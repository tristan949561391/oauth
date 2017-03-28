/**
 * Created by Tristan on 17/3/19.
 */
module.exports.port = 3000


module.exports.log4j = {
    appenders: [
        {type: "console"},
        {
            type: "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符
            filename: "logs/",     // 日志文件名，可以设置相对路径或绝对路径
            pattern: "info/yyyy-MM-dd.log",  // 占位符，紧跟在filename后面
            absolute: true,                   // filename是否绝对路径
            alwaysIncludePattern: true,       // 文件名是否始终包含占位符
            category: "info"               // 记录器名
        },
        {
            type: "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符
            filename: "logs/",     // 日志文件名，可以设置相对路径或绝对路径
            pattern: "debug/yyyy-MM-dd.log",  // 占位符，紧跟在filename后面
            absolute: true,                   // filename是否绝对路径
            alwaysIncludePattern: true,       // 文件名是否始终包含占位符
            category: "debug"               // 记录器名
        },
        {
            type: "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符
            filename: "logs/",     // 日志文件名，可以设置相对路径或绝对路径
            pattern: "warn/yyyy-MM-dd.log",  // 占位符，紧跟在filename后面
            absolute: true,                   // filename是否绝对路径
            alwaysIncludePattern: true,       // 文件名是否始终包含占位符
            category: "warn"               // 记录器名
        },
        {
            type: "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符
            filename: "logs/",     // 日志文件名，可以设置相对路径或绝对路径
            pattern: "error/yyyy-MM-dd.log",  // 占位符，紧跟在filename后面
            absolute: true,                   // filename是否绝对路径
            alwaysIncludePattern: true,       // 文件名是否始终包含占位符
            category: "error"               // 记录器名
        },
        {
            type: "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符
            filename: "logs/",     // 日志文件名，可以设置相对路径或绝对路径
            pattern: "default/yyyy-MM-dd.log",  // 占位符，紧跟在filename后面
            absolute: true,                   // filename是否绝对路径
            alwaysIncludePattern: true,       // 文件名是否始终包含占位符
            category: "default"               // 记录器名
        }
    ],
    levels: {
        info: "INFO",
        debug: "DEBUG",
        warn: "WARN",
        error: "ERROR",
        default: "ALL"
    },
    replaceConsole: true
}


module.exports.mongoose = {
    url: 'mongodb://localhost/auth',
    options: {
        // db: {native_parser: true},
        // server: {poolSize: 5},
        // replset: {rs_name: 'myReplicaSetName'},
        // user: 'myUserName',
        // pass: 'myPassword'
    }
}


module.exports.redis={
    host:'localhost',
    port:6379,
    options:{

    }
}