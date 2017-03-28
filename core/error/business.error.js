/**
 * Created by Tristan on 2017/3/28.
 */
const util = require('util');
let AbstractError = function (msg, constr) {
    Error.captureStackTrace(this, constr || this)
    this.message = msg || 'Error'
}
util.inherits(AbstractError, Error)
AbstractError.prototype.name = 'Abstract Error'