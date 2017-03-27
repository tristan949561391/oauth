/**
 * Created by Tristan on 17/3/19.
 */
const fs = require("fs");
const path = require('path')
const log = require('log4js')
// 动态路由
const RouteInit = {
    path: './router/',
    app: null,
    // 遍历目录
    listDir: function (dir) {
        const fileList = fs.readdirSync(dir, 'utf-8');
        for (let i = 0; i < fileList.length; i++) {
            let stat = fs.lstatSync(path.join(dir, fileList[i]));
            // 是目录，需要继续
            if (stat.isDirectory()) {
                this.listDir(path.join(dir, fileList[i]));
            } else {
                this.loadRoute(path.join(dir, fileList[i]));
            }
        }
    },
    // 加载路由
    loadRoute: function (routeFile) {
        let route = require(routeFile.substring(0, routeFile.lastIndexOf('.')));
        // 在路由文件中定义了一个basePath变量，设置路由路径前缀
        this.app.use(route.routes())

    },
    // 初始化入口
    init: function (app, path) {
        if (!app) {
            console.error("系统主参数App未设置");
            return false;
        }
        this.app = app;
        this.path = path ? path : this.path;
        this.listDir(this.path);
    }
};

module.exports = RouteInit

