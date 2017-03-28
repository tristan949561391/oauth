/**
 * Created by Tristan on 17/3/27.
 */
let errorHandler = {
    handle: async (ctx, next) => {
        try {
            await next();
        } catch (e) {
            console.error(e.stack)
            await ctx.render('error/500', {status: e.message});
        }
    }
}

module.exports = errorHandler