"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldService = void 0;
const service_1 = require("../service");
const msg_1 = require("../../model/helloworld/msg");
class HelloWorldService extends service_1.Service {
    constructor() {
        super(...arguments);
        this.createMsg = async (params) => {
            let msg = new msg_1.HelloWorld();
            msg.rtx = params.rtx;
            msg.msg = params.msg;
            msg = await this.manager.save(msg);
            return msg;
        };
        this.getMsg = async (rtx) => {
            const msg = await this.manager.findOne(msg_1.HelloWorld, {
                rtx
            });
            return msg;
        };
    }
}
exports.HelloWorldService = HelloWorldService;
