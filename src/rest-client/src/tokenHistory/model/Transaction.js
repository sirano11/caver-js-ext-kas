/*
 * Token History API
 * # Introduction  Token History API allows you to query the transaction history of KLAY, FTs (KIP-7 and Labelled ERC-20), NFTs (KIP-17 and Labelled ERC-721), and MTs (KIP-37 and Labelled ERC-1155). You can track KLAY's transaction history or retrieve NFT-related data of a certain EOA.   For more details on using Token History API, please refer to the [Tutorial](https://docs.klaytnapi.com/tutorial).   For any inquiries on this document or KAS in general, please visit [Developer Forum](https://forum.klaytn.com/).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.Transaction = factory(root.TokenHistoryApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The Transaction model module.
     * @class Transaction
     * @version 1.0
     */

    /**
     * Constructs a new <code>Transaction</code>.
     * @alias Transaction
     * @class
     * @param feePayer {String} Fee delegation account address (20-byte)
     * @param feeRatio {Number} Fee delegation ratio
     * @param fee {String} Gas fee
     * @param from {String} EOA of the sender of transaction (20-byte)
     * @param timestamp {Number} Time of transaction (timestamp)
     * @param transactionHash {String} Transaction hash (32-byte)
     * @param typeInt {Number} Transaction type
     * @param value {String} Amount of KLAY transferred (in hexadecimal)
     */
    const Transaction = function(feePayer, feeRatio, fee, from, timestamp, transactionHash, typeInt, value) {
        this.feePayer = feePayer
        this.feeRatio = feeRatio
        this.fee = fee
        this.from = from
        this.timestamp = timestamp
        this.transactionHash = transactionHash
        this.typeInt = typeInt
        this.value = value
    }

    /**
     * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {Transaction} obj Optional instance to populate.
     * @return {Transaction} The populated <code>Transaction</code> instance.
     * @memberof Transaction
     */
    Transaction.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new Transaction()
            if (data.hasOwnProperty('feePayer')) obj.feePayer = ApiClient.convertToType(data.feePayer, 'String')
            if (data.hasOwnProperty('feeRatio')) obj.feeRatio = ApiClient.convertToType(data.feeRatio, 'Number')
            if (data.hasOwnProperty('fee')) obj.fee = ApiClient.convertToType(data.fee, 'String')
            if (data.hasOwnProperty('from')) obj.from = ApiClient.convertToType(data.from, 'String')
            if (data.hasOwnProperty('timestamp')) obj.timestamp = ApiClient.convertToType(data.timestamp, 'Number')
            if (data.hasOwnProperty('transactionHash')) obj.transactionHash = ApiClient.convertToType(data.transactionHash, 'String')
            if (data.hasOwnProperty('typeInt')) obj.typeInt = ApiClient.convertToType(data.typeInt, 'Number')
            if (data.hasOwnProperty('value')) obj.value = ApiClient.convertToType(data.value, 'String')
        }
        return obj
    }

    /**
     * Fee delegation account address (20-byte)
     * @type {String}
     * @memberof Transaction
     */
    Transaction.prototype.feePayer = undefined

    /**
     * Fee delegation ratio
     * @type {Number}
     * @memberof Transaction
     */
    Transaction.prototype.feeRatio = undefined

    /**
     * Gas fee
     * @type {String}
     * @memberof Transaction
     */
    Transaction.prototype.fee = undefined

    /**
     * EOA of the sender of transaction (20-byte)
     * @type {String}
     * @memberof Transaction
     */
    Transaction.prototype.from = undefined

    /**
     * Time of transaction (timestamp)
     * @type {Number}
     * @memberof Transaction
     */
    Transaction.prototype.timestamp = undefined

    /**
     * Transaction hash (32-byte)
     * @type {String}
     * @memberof Transaction
     */
    Transaction.prototype.transactionHash = undefined

    /**
     * Transaction type
     * @type {Number}
     * @memberof Transaction
     */
    Transaction.prototype.typeInt = undefined

    /**
     * Amount of KLAY transferred (in hexadecimal)
     * @type {String}
     * @memberof Transaction
     */
    Transaction.prototype.value = undefined

    return Transaction
})
