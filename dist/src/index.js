"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const utils_1 = require("./utils");
const port = 3333;
app_1.default.listen(port, () => {
    utils_1.logger.info(`server is on ${port}`);
});
module.exports = app_1.default;
