/**
 * Created by Tristan on 17/3/18.
 */
const Koa = require('koa');
const plugins = require('./plugin')
const routeInit = require('./initialize/routerInit')
const logConfig = require('./conf/index').log4j
const logInit = require('./initialize/log4jInit').loggerInit
const connInit = require('./initialize/conninit')
const path = require('path')

const server = new Koa();

server.use(plugins());


logInit.init(logConfig);

connInit.init();

server.use(async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        ctx.body = e.message;
    }
});

routeInit.init(server, path.join(__dirname, 'router'))

module.exports = server
