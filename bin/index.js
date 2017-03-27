/**
 * Created by Tristan on 17/3/18.
 */
const server = require('../core/server')
const http = require('http');
const port = require('../core/conf/index').port
const log = require('log4js').getLogger()



http.createServer(server.callback()).listen(port, () => {
    log.debug(`服务器已经启动，端口${port}`);
})

