/**
 * Created by Tristan on 17/3/19.
 */
const log4j = require('log4js');


const loggerInit = {

    config: null,
    init(config){
        this.config = config;
        log4j.configure(this.config)
    }
}
module.exports.loggerInit = loggerInit
