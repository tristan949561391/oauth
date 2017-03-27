/**
 * Created by Tristan on 17/3/19.
 */
const log4j = require('log4js');

let connInit = {
    init: () => {
        require('../conn/mongoose')
        require('../conn/redis')
    }
}


module.exports = connInit
