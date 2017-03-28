/**
 * Created by Tristan on 17/3/27.
 */
const Router = require('koa-router')
const router = new Router();
const log = require('log4js').getLogger('debug');
const oauthService = require('../service/oauth.service.js');
const StringUtil = require('../utils/StringUtil')
router.prefix('/oauth')

router.get('/authration', async (ctx) => {
    let grantType = ctx.request.query.grant_type;
    let clientId = ctx.request.query.client_id;
    let redirect_uri = ctx.request.query.redirect_uri;
    let state = ctx.request.query.state;
    let scope = ctx.request.query.scope;
    if (await StringUtil.haveEmpty([grantType, clientId, redirect_uri, state, scope])) {
        throw new Error('Param error')
    }
    if (grantType == "authenticate_code") {
        let client=await oauthService.authenticate_code(clientId, redirect_uri, scope)
        await ctx.render("oauth/oauth_login",{client_id:client.client_id,client_name:client.client_name});
    } else {
        throw new Error("not support")
    }
})
module.exports = router
