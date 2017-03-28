/**
 * Created by Tristan on 2017/3/28.
 */
var util = require('util');

function ParamError(errCode, method, message) {
    this.error_code = errCode
    this.method = method
    this.message = message
    this.time = Date.now()
    this.type = 'param'
    Error.call(this)
}

util.inherits(ParamError, Error)


function BusinessError(errCode, method, message) {
    this.error_code = errCode
    this.method = method
    this.message = message
    this.time = Date.now()
    this.type = 'business'
    Error.call(this)
}
util.inherits(BusinessError, Error)


function unCheckError(method, message) {
    var successModel = {
        error_code: 0,
        method:method,
        message:message||'success',
        time:Date.now(),
        type:'OK'
    }
    return successModel
}
module.exports.BusinessError = BusinessError
module.exports.ParamError = ParamError
module.exports.Success=unCheckError