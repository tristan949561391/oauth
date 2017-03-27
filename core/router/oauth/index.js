/**
 * Created by Tristan on 17/3/27.
 */
const Router = require('koa-router')
const router = new Router();
const log = require('log4js').getLogger('debug');
const oauthService = require('../../service/oauth.service');
router.prefix('/oauth')
module.exports = router

router.post('/', async (ctx) => {
    let grantType = ctx.request.body.grant_type;
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    let clientId = ctx.request.body.client_id;
    let timestamp = ctx.request.body.timestamp;
    if (timestamp == null || Math.abs(new Date().getTime() - timestamp) > 10000) {
        throw new Error('params not egale')
    }
    let token;
    if (grantType == 'password') {
        token = await oauthService.passwordAuth(clientId, username, password);
    } else if (grantType == 'authorize_code') {
        token = await oauthService.codeAuth();
    } else {
        throw new Error("granttype not support");
    }
    ctx.body = token;
})

