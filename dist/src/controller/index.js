"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const utils_1 = require("../utils");
const controllersModule = [];
const controllersPath = path_1.default.join(__dirname, './');
const regReplace = /[\/-]([a-zA-Z])/g;
const regExt = /\.(js)|\.(ts)$/;
function extendController(controller) {
    const controllerN = Object.assign({}, controller);
    if (!controllerN.name) {
        controllerN.name = controllerN.path.replace(regReplace, (str, subStr) => {
            return subStr.toLocaleUpperCase();
        });
    }
    if (!controllerN.methods) {
        controllerN.methods = [
            'GET',
            'POST'
        ];
    }
    return controllerN;
}
fs_1.default.readdirSync(controllersPath).forEach(folder => {
    const modulesPath = path_1.default.join(controllersPath, folder);
    const isFolder = fs_1.default.statSync(modulesPath).isDirectory();
    if (!isFolder) {
        return;
    }
    fs_1.default.readdirSync(modulesPath).forEach(controllerFile => {
        const filePath = path_1.default.join(modulesPath, controllerFile);
        const isFile = !fs_1.default.statSync(filePath).isDirectory();
        if (!isFile) {
            return;
        }
        const fileInfo = path_1.default.parse(filePath);
        const controllerPath = path_1.default.join(fileInfo.dir, fileInfo.name);
        const controller = require(controllerPath);
        for (const key in controller) {
            if (!controller.hasOwnProperty(key)) {
                continue;
            }
            utils_1.logger.info({ 1: controller[key] });
            const controllerExt = extendController(controller[key]);
            controllersModule.push(controllerExt);
        }
    });
});
module.exports = controllersModule;
