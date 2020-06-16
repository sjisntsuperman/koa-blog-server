"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloworld = void 0;
const helloworld_1 = require("../../service/helloworld/helloworld");
exports.helloworld = {
    path: 'helloworld',
    handle: async (ctx) => {
        const helloWorldService = new helloworld_1.HelloWorldService();
        let msg = await helloWorldService.getMsg('steinwei');
        if (!msg) {
            msg = await helloWorldService.createMsg({
                rtx: 'steinwei',
                msg: 'helloworld'
            });
        }
        ctx.body = {
            retcode: 0,
            result: Object.assign({}, msg)
        };
    }
};
