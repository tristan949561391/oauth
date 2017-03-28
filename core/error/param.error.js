/**
 * Created by Tristan on 2017/3/28.
 */
const AbsError = require('./abstract.error');

var ParamError = function (msg, code) {
    ParamError.super_.call(this, msg, code, this.constructor)
}
util.inherits(ParamError, AbsError)
module.exports = ParamError;