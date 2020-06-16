"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const service_1 = require("../service");
const user_model_1 = require("../../model/user/user.model");
class UserService extends service_1.Service {
    constructor() {
        super(...arguments);
        this.findUser = async (rtx) => {
            const user = await this.manager.findOne(user_model_1.User, {
                rtx
            });
            return user;
        };
        this.createUser = async (params) => {
            let user = new user_model_1.User();
            user.rtx = params.rtx;
            user.name = params.name;
            user = await this.manager.save(user);
            return user;
        };
    }
}
exports.UserService = UserService;
