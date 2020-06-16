"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const koa_router_1 = __importDefault(require("koa-router"));
const controller_1 = __importDefault(require("./controller"));
const routers = new koa_router_1.default({
    prefix: '/cgi/',
    sensitive: true,
    strict: true
});
controller_1.default.forEach(controller => {
    const { name, path, methods, handle, } = controller;
    const middleWares = [];
    middleWares.push(handle);
    const opts = {
        name
    };
    routers.register(path, methods, middleWares, opts);
});
module.exports = routers;
