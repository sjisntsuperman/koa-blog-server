"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = void 0;
const typeorm_1 = require("typeorm");
const utils_1 = require("../utils");
class Service {
    constructor() {
        try {
            this.manager = typeorm_1.getManager();
            this.queryBuild = typeorm_1.getConnection().createQueryBuilder();
        }
        catch (err) {
            utils_1.logger.error(err);
        }
    }
}
exports.Service = Service;
