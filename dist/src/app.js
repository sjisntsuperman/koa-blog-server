"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Koa = require('koa');
const path_1 = __importDefault(require("path"));
const module_alias_1 = __importDefault(require("module-alias"));
module_alias_1.default.addAlias('@', __dirname);
const utils_1 = require("./utils");
const modelsPath = path_1.default.join(__dirname, './model');
const { createConnection } = require('typeorm');
createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "blog",
    entities: [
        `${modelsPath}/**/*.ts`,
        `${modelsPath}/**/*.js`
    ],
    synchronize: true,
    logging: true
}).then(connection => {
    utils_1.logger.info('Connection Database Success');
}).catch(error => {
    utils_1.logger.error(error);
    utils_1.logger.error('Connection Database Error');
});
const mount = require('koa-mount');
const router = require('./router');
const app = new Koa();
app.use(mount('/', router.routes())).use(router.allowedMethods());
module.exports = app;
