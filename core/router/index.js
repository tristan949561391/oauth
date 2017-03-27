/**
 * Created by Tristan on 17/3/19.
 */
const Router = require('koa-router')
const router = new Router();
const log = require('log4js').getLogger('debug');
router.prefix('/')
module.exports = router

router.get('/', async(ctx) => {
    log.info('hello world')
    ctx.body = 'asdasd'
})

