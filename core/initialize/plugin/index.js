/**
 * Created by Tristan on 17/3/18.
 */
const compose = require('koa-compose');
const logger = require('koa-logger')
const bodyparser = require('./bodyparser')
const log = require('log4js').getLogger()
const view = require('koa-views');
const errorHandler = require('./errorhandler')
const path = require('path')

let plugins = new Array();
plugins.push(logger())
plugins.push(bodyparser())
plugins.push(view(path.join(__dirname, '../../../view'), {
    map: {
        html: 'ejs'
    }
}))
plugins.push(errorHandler.handle)
module.exports = () => {
    log.debug(`插件装载完毕`)
    return compose(plugins)
}

