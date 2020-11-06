/*
 * Copyright 2020 The caver-js-ext-kas Authors
 *
 * Licensed under the Apache License, Version 2.0 (the “License”);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an “AS IS” BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const _ = require('lodash')
const AnchorBlockRequest = require('../../rest-client/src/anchor/model/AnchorBlockRequest')
const { OperatorApi, DataAnchoringTransactionApi } = require('../../rest-client/src')
const AnchorQueryOptions = require('./anchorQueryOptions')

const NOT_INIT_API_ERR_MSG = `Anchor API is not initialized. Use 'caver.initAnchorAPI' function to initialize Anchor API.`

/**
 * A warpping class that connects Anchor API.
 * @class
 */
class Anchor {
    /**
     * Creates an instance of anchor api.
     * @constructor
     * @param {ApiClient} client - The Api client to use to connect with KAS.
     * @param {AccessOptions} accessOptions - An instance of AccessOptions including `chainId`, `accessKeyId` and `secretAccessKey`.
     */
    constructor(client, accessOptions) {
        this.accessOptions = accessOptions
        this.apiInstances = {}

        if (client) {
            this.apiInstances = {
                anchor: new DataAnchoringTransactionApi(client),
                operator: new OperatorApi(client),
            }
        }
    }

    /**
     * @type {string}
     */
    get auth() {
        return this.accessOptions.auth
    }

    /**
     * @type {AccessOptions}
     */
    get accessOptions() {
        return this._accessOptions
    }

    set accessOptions(accessOptions) {
        this._accessOptions = accessOptions
    }

    /**
     * @type {string}
     */
    get accessKeyId() {
        return this.accessOptions.accessKeyId
    }

    set accessKeyId(accessKeyId) {
        this.accessOptions.accessKeyId = accessKeyId
    }

    /**
     * @type {string}
     */
    get secretAccessKey() {
        return this.accessOptions.secretAccessKey
    }

    set secretAccessKey(secretAccessKey) {
        this.accessOptions.secretAccessKey = secretAccessKey
    }

    /**
     * @type {string}
     */
    get chainId() {
        return this.accessOptions.chainId
    }

    set chainId(chainId) {
        this.accessOptions.chainId = chainId
    }

    /**
     * @type {object}
     */
    get apiInstances() {
        return this._apiInstances
    }

    set apiInstances(apiInstances) {
        this._apiInstances = apiInstances
    }

    /**
     * @type {object}
     */
    get client() {
        return this.apiInstances.anchor.apiClient
    }

    set client(client) {
        this.apiInstances = {
            anchor: new DataAnchoringTransactionApi(client),
            operator: new OperatorApi(client),
        }
    }

    /**
     * @type {DataAnchoringTransactionApi}
     */
    get anchorApi() {
        return this.apiInstances.anchor
    }

    /**
     * @type {OperatorApi}
     */
    get operatorApi() {
        return this.apiInstances.operator
    }

    // Anchor API
    /**
     * Sends data to be anchored to the Klaytn blockchain platform. <br>
     * POST /v1/anchor
     *
     * @param {string} operator Operator address to send ChainDataAnchoring transaction.
     * @param {object} payload Data to be anchored to the Klaytn blockchain platform.
     * @param {Function} [callback] The callback function to call.
     * @return {AnchorBlockStatus}
     */
    sendAnchoringData(operator, payload, callback) {
        if (!this.accessOptions || !this.anchorApi) throw new Error(NOT_INIT_API_ERR_MSG)

        if (payload.id === undefined) throw new Error(`The payload id should be defined.`)
        if (!_.isString(payload.id)) throw new Error(`The payload id must be string type.`)

        const opts = {
            body: AnchorBlockRequest.constructFromObject({ payload, operator }),
        }

        return new Promise((resolve, reject) => {
            this.anchorApi.anchorBlock(this.chainId, opts, (err, data, response) => {
                if (err) {
                    reject(err)
                }
                if (callback) callback(err, data, response)
                resolve(data)
            })
        })
    }

    /**
     * Gets for anchoring transaction list generated by a specific operator. <br>
     * GET /v1/operator/{operator-id}/tx
     *
     * @param {string} operator The address of the operator that anchored the data.
     * @param {AnchorQueryOptions} [queryOptions] Filters required when retrieving data. `size`, `fromTimestamp`, `toTimestamp`, and `cursor`.
     * @param {Function} [callback] The callback function to call.
     * @return {AnchorTransactions}
     */
    getAnchoringTransactionList(operator, queryOptions, callback) {
        if (!this.accessOptions || !this.anchorApi) throw new Error(NOT_INIT_API_ERR_MSG)

        // operator
        // operator, queryOptions
        // operator, callback
        // operator, queryOptions, callback
        if (_.isFunction(queryOptions)) {
            callback = queryOptions
            queryOptions = {}
        }

        queryOptions = AnchorQueryOptions.constructFromObject(queryOptions || {})
        if (!queryOptions.isValidOptions(['size', 'cursor', 'fromTimestamp', 'toTimestamp']))
            throw new Error(`Invalid query options: 'size', 'cursor', 'fromTimestamp' or 'toTimestamp' can be used.`)

        return new Promise((resolve, reject) => {
            this.anchorApi.retrieveAnchorBlock(this.chainId, operator, queryOptions, (err, data, response) => {
                if (err) {
                    reject(err)
                }
                if (callback) callback(err, data, response)
                resolve(data)
            })
        })
    }

    /**
     * Gets anchoring transaction generated by the transaction hash. <br>
     * GET /v1/operator/{operator-id}/tx/{transaction-hash}
     *
     * @param {string} operator The address of the operator that anchored the data.
     * @param {string} transactionHash The transaction hash to query.
     * @param {Function} [callback] The callback function to call.
     * @return {AnchorTransactionDetail}
     */
    getAnchoringTransactionByTxHash(operator, transactionHash, callback) {
        if (!this.accessOptions || !this.anchorApi) throw new Error(NOT_INIT_API_ERR_MSG)

        return new Promise((resolve, reject) => {
            this.anchorApi.getAnchorBlockByTx(this.chainId, operator, transactionHash, (err, data, response) => {
                if (err) {
                    reject(err)
                }
                if (callback) callback(err, data, response)
                resolve(data)
            })
        })
    }

    /**
     * Gets anchoring transaction generated by the payload id. <br>
     * GET /v1/operator/{operator-id}/payload/{payload-id}
     *
     * @param {string} operator The address of the operator that anchored the data.
     * @param {string} payloadId The payload id to query.
     * @param {Function} [callback] The callback function to call.
     * @return {AnchorTransactionDetail}
     */
    getAnchoringTransactionByPayloadId(operator, payloadId, callback) {
        if (!this.accessOptions || !this.anchorApi) throw new Error(NOT_INIT_API_ERR_MSG)

        return new Promise((resolve, reject) => {
            this.anchorApi.getAnchorBlockByPayloadID(this.chainId, operator, payloadId, (err, data, response) => {
                if (err) {
                    reject(err)
                }
                if (callback) callback(err, data, response)
                resolve(data)
            })
        })
    }

    // Operator API
    /**
     * Gets operator list. <br>
     * GET /v1/operator
     *
     * @param {AnchorQueryOptions} [queryOptions] Filters required when retrieving data. `size`, `fromTimestamp`, `toTimestamp`, and `cursor`.
     * @param {Function} [callback] The callback function to call.
     * @return {Operators}
     */
    getOperatorList(queryOptions, callback) {
        if (!this.accessOptions || !this.operatorApi) throw new Error(NOT_INIT_API_ERR_MSG)

        if (_.isFunction(queryOptions)) {
            callback = queryOptions
            queryOptions = {}
        }

        queryOptions = AnchorQueryOptions.constructFromObject(queryOptions || {})
        if (!queryOptions.isValidOptions(['size', 'cursor', 'fromTimestamp', 'toTimestamp']))
            throw new Error(`Invalid query options: 'size', 'cursor', 'fromTimestamp' or 'toTimestamp' can be used.`)

        return new Promise((resolve, reject) => {
            this.operatorApi.retrieveOperators(this.chainId, queryOptions, (err, data, response) => {
                if (err) {
                    reject(err)
                }
                if (callback) callback(err, data, response)
                resolve(data)
            })
        })
    }

    /**
     * Gets operator information. <br>
     * GET /v1/operator/{operator-id}
     *
     * @param {string} operator The address of the operator.
     * @param {Function} [callback] The callback function to call.
     * @return {Operator}
     */
    getOperator(operator, callback) {
        if (!this.accessOptions || !this.operatorApi) throw new Error(NOT_INIT_API_ERR_MSG)

        return new Promise((resolve, reject) => {
            this.operatorApi.getOperator(this.chainId, operator, (err, data, response) => {
                if (err) {
                    console.error(err)
                    reject(err)
                }
                if (callback) callback(err, data, response)
                resolve(data)
            })
        })
    }
}

module.exports = Anchor
