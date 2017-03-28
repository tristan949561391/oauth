/**
 * Created by Tristan on 17/3/19.
 */
const Router = require('koa-router')
const ClientService = require('../service/client.service')
const ParamError = require('../error/index').ParamError;
const route = new Router();
route.prefix('/client')
module.exports = route

route.get('/register.html', async (ctx) => {
    throw new ParamError(258, 'unkow')
    await ctx.render('client/register');
})

route.post('/register', async (ctx) => {
    let client_name = ctx.request.body.client_name;
    let redirect_uri = ctx.request.body.redirect_uri;
    if (client_name == null || client_name.length == 0) {
        throw new Error('client name can not be null')
    }
    if (redirect_uri == null || redirect_uri.length == 0) {
        throw new Error('redirect_uri can not be null')
    }
    let client = await ClientService.register(client_name, redirect_uri);
    ctx.body = client
})

