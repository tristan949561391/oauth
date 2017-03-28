/**
 * Created by Tristan on 17/3/19.
 */
const Router = require('koa-router')
const router = new Router();
const log = require('log4js').getLogger('debug');
router.prefix('/')
module.exports = router

router.get('/', async (ctx) => {
    await ctx.render('index')
})

router.get('/register.html', async (ctx) => {
    await    ctx.render("register")

})

