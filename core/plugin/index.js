/**
 * Created by Tristan on 17/3/18.
 */
const compose = require('koa-compose');
const logger = require('koa-logger')
const bodyparser = require('./bodyparser')
const log = require('log4js').getLogger()

let plugins = new Array();
plugins.push(logger())
plugins.push(bodyparser())

module.exports = () => {
    log.debug(`插件装载完毕`)
    return compose(plugins)
}

