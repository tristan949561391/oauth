/**
 * Created by Tristan on 2017/3/28.
 */
const util = require('util');
let AbstractError = function (msg, code) {
    Error.call(message);
    this.message = msg || 'Error'
    this.code = code || 500;
}
util.inherits(AbstractError, Error)

module.exports = AbstractError
