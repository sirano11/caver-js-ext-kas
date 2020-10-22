/*
 * Token History API
 * # Introduction  Token History API는 KLAY, FT (KIP-7, Labeled ERC-20), NFT (KIP-17, Labeled ERC-721) 토큰 정보, 이들 토큰을 주고받은 기록을 조회하는 기능을 제공합니다. 여러분은 특정 EOA가 KLAY를 주고받은 기록을 확인하거나 EOA가 가지고 있는 NFT 정보를 불러오는 등 Token History API를 다양하게 활용할 수 있습니다.   Token History API 사용에 관한 자세한 내용은 [튜토리얼](https://klaytn.com)을 확인하십시오.   이 문서 혹은 KAS에 관한 문의는 [개발자 포럼](https://forum.klaytn.com/)을 방문해 도움을 받으십시오
 *
 * OpenAPI spec version: 0.7.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient', '../model/FtContract', '../model/Transaction'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'), require('./FtContract'), require('./Transaction'))
    } else {
        // Browser globals (root is window)
        if (!root.TokenHistoryApi) {
            root.TokenHistoryApi = {}
        }
        root.TokenHistoryApi.FtTransfer = factory(
            root.TokenHistoryApi.ApiClient,
            root.TokenHistoryApi.FtContract,
            root.TokenHistoryApi.Transaction
        )
    }
})(this, function(ApiClient, FtContract, Transaction) {
    /**
     * The FtTransfer model module.
     * @class FtTransfer
     * @version 0.7.0
     */

    /**
     * Constructs a new <code>FtTransfer</code>.
     * @alias FtTransfer
     * @class
     * @param contract {FtContract}
     * @param formattedValue {String} decimal을 적용한 변환값
     * @param from {String} 보낸 사람 EOA (20-byte)
     * @param to {String} 받은 사람 EOA (20-byte)
     * @param transaction {Transaction}
     * @param transferType {String} 거래내역 유형
     * @param value {String} 전송한 토큰 개수 (16진수)
     */
    const FtTransfer = function(contract, formattedValue, from, to, transaction, transferType, value) {
        this.contract = contract
        this.formattedValue = formattedValue
        this.from = from
        this.to = to
        this.transaction = transaction
        this.transferType = transferType
        this.value = value
    }

    /**
     * Constructs a <code>FtTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {FtTransfer} obj Optional instance to populate.
     * @return {FtTransfer} The populated <code>FtTransfer</code> instance.
     * @memberof FtTransfer
     */
    FtTransfer.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new FtTransfer()
            if (data.hasOwnProperty('contract')) obj.contract = FtContract.constructFromObject(data.contract)
            if (data.hasOwnProperty('formattedValue')) obj.formattedValue = ApiClient.convertToType(data.formattedValue, 'String')
            if (data.hasOwnProperty('from')) obj.from = ApiClient.convertToType(data.from, 'String')
            if (data.hasOwnProperty('to')) obj.to = ApiClient.convertToType(data.to, 'String')
            if (data.hasOwnProperty('transaction')) obj.transaction = Transaction.constructFromObject(data.transaction)
            if (data.hasOwnProperty('transferType')) obj.transferType = ApiClient.convertToType(data.transferType, 'String')
            if (data.hasOwnProperty('value')) obj.value = ApiClient.convertToType(data.value, 'String')
        }
        return obj
    }

    /**
     * @type {FtContract}
     * @memberof FtTransfer
     */
    FtTransfer.prototype.contract = undefined

    /**
     * decimal을 적용한 변환값
     * @type {String}
     * @memberof FtTransfer
     */
    FtTransfer.prototype.formattedValue = undefined

    /**
     * 보낸 사람 EOA (20-byte)
     * @type {String}
     * @memberof FtTransfer
     */
    FtTransfer.prototype.from = undefined

    /**
     * 받은 사람 EOA (20-byte)
     * @type {String}
     * @memberof FtTransfer
     */
    FtTransfer.prototype.to = undefined

    /**
     * @type {Transaction}
     * @memberof FtTransfer
     */
    FtTransfer.prototype.transaction = undefined

    /**
     * 거래내역 유형
     * @type {String}
     * @memberof FtTransfer
     */
    FtTransfer.prototype.transferType = undefined

    /**
     * 전송한 토큰 개수 (16진수)
     * @type {String}
     * @memberof FtTransfer
     */
    FtTransfer.prototype.value = undefined

    return FtTransfer
})
