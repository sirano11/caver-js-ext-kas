/*
 * KIP-7 API
 * # Introduction KIP-7 API is a RESTful API for managing KIP-7 contracts and tokens that follow the [KIP-7 Fungible Token Standard](https://kips.klaytn.com/KIPs/kip-7).   You can deploy contracts and send tokens using the default contract managing account (`deployer`) and an `alias`. And by using SDK like caver,  you can manage your contracts and tokens using [Wallet API](https://refs.klaytnapi.com/en/wallet/latest) for contracts created on the Klaytn Network. # Error Codes ## 400: Bad Request  | Code | Messages |   | --- | --- | | 1130050 | incorrect request; spender 1130107 | incorrect bookmark 1134410 | invalid address; to</br>invalid address; owner</br>invalid address; address 1134411 | invalid amount; amount |## 404: Not Found  | Code | Messages | | --- | --- | | 1134504 | contract not found 1134506 | deployer not found |  ## 409: Conflict  | Code | Messages |   | --- | --- |   | 1134900 | duplicate alias 1134902 | contract already paused 1134903 | contract already unpaused |
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
        if (!root.Kip7Api) {
            root.Kip7Api = {}
        }
        root.Kip7Api.DeployKip7ContractRequest = factory(root.Kip7Api.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The DeployKip7ContractRequest model module.
     * @class DeployKip7ContractRequest
     * @version 1.0
     */

    /**
     * Constructs a new <code>DeployKip7ContractRequest</code>.
     * @alias DeployKip7ContractRequest
     * @class
     * @param alias {String} Contract alias; for KIP-7 API, you can use not only the contract address but also an alias.
     * @param name {String} Contract name
     * @param symbol {String} Token symbol
     * @param decimals {Number} Token decimal place
     * @param initialSupply {String} Initial supply (in hexadecimal)
     */
    const DeployKip7ContractRequest = function(alias, name, symbol, decimals, initialSupply) {
        this.alias = alias
        this.name = name
        this.symbol = symbol
        this.decimals = decimals
        this.initialSupply = initialSupply
    }

    /**
     * Constructs a <code>DeployKip7ContractRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {DeployKip7ContractRequest} obj Optional instance to populate.
     * @return {DeployKip7ContractRequest} The populated <code>DeployKip7ContractRequest</code> instance.
     * @memberof DeployKip7ContractRequest
     */
    DeployKip7ContractRequest.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new DeployKip7ContractRequest()
            if (data.hasOwnProperty('alias')) obj.alias = ApiClient.convertToType(data.alias, 'String')
            if (data.hasOwnProperty('name')) obj.name = ApiClient.convertToType(data.name, 'String')
            if (data.hasOwnProperty('symbol')) obj.symbol = ApiClient.convertToType(data.symbol, 'String')
            if (data.hasOwnProperty('decimals')) obj.decimals = ApiClient.convertToType(data.decimals, 'Number')
            if (data.hasOwnProperty('initialSupply')) obj.initialSupply = ApiClient.convertToType(data.initialSupply, 'String')
        }
        return obj
    }

    /**
     * Contract alias; for KIP-7 API, you can use not only the contract address but also an alias.
     * @type {String}
     * @memberof DeployKip7ContractRequest
     */
    DeployKip7ContractRequest.prototype.alias = undefined

    /**
     * Contract name
     * @type {String}
     * @memberof DeployKip7ContractRequest
     */
    DeployKip7ContractRequest.prototype.name = undefined

    /**
     * Token symbol
     * @type {String}
     * @memberof DeployKip7ContractRequest
     */
    DeployKip7ContractRequest.prototype.symbol = undefined

    /**
     * Token decimal place
     * @type {Number}
     * @memberof DeployKip7ContractRequest
     */
    DeployKip7ContractRequest.prototype.decimals = undefined

    /**
     * Initial supply (in hexadecimal)
     * @type {String}
     * @memberof DeployKip7ContractRequest
     */
    DeployKip7ContractRequest.prototype.initialSupply = undefined

    return DeployKip7ContractRequest
})
