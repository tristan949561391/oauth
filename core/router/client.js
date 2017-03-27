/**
 * Created by Tristan on 17/3/19.
 */
const Router = require('koa-router')

const route = new Router();
route.prefix('/client')
module.exports = route

route.get('/', async(ctx) => {
    ctx.body = 'asd'
})

