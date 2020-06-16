import  fs from 'fs';
import  path from 'path';
import {logger} from '../utils';

const controllersModule: Controller[] = [];
const controllersPath = path.join(__dirname, './');

const regReplace = /[\/-]([a-zA-Z])/g;
const regExt = /\.(js)|\.(ts)$/;

// 扩展控制器, 添加基础配置
function extendController(controller: Controller): Controller {
  const controllerN = {
    ...controller
  };
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
  // if (!controllerN.validateRules) {
  //   controllerN.validateRules = {};
  // }
  return controllerN;
}

fs.readdirSync(controllersPath).forEach(folder => {
    const modulesPath = path.join(controllersPath, folder);
    const isFolder = fs.statSync(modulesPath).isDirectory();
    if (!isFolder) {
      return;
    }
    // 遍历控制器模块目录, 获取对应控制器模块文件
    fs.readdirSync(modulesPath).forEach(controllerFile => {
      const filePath = path.join(modulesPath, controllerFile);
      const isFile = !fs.statSync(filePath).isDirectory();
      if (!isFile) {
        return;
      }
      const fileInfo = path.parse(filePath);
      // 过滤非js和ts文件
    //   if (!fileInfo.ext.match(regExt)) {
    //     return;
    //   }
  
      const controllerPath = path.join(fileInfo.dir, fileInfo.name);
      const controller = require(controllerPath); // eslint-disable-line
      for (const key in controller) {
        if (!controller.hasOwnProperty(key)) {
          continue;
        }
        logger.info({1:controller[key]});
        const controllerExt = extendController(controller[key]);
        controllersModule.push(controllerExt);
        // controllersModule.push(controller[key]);
  
        // 校验是否存在相同路径的控制器
        // let sameFile;
        // const hasSamePath = controllersCache.find(ele => {
        //   sameFile = ele.fileName;
        //   return ele.controller.path === controllerExt.path;
        // });
        // if (hasSamePath) {
        //   let errorMsg = `The ${controllerExt.path} has the same controller path, and it is not allowed. `;
        //   errorMsg += `From ${controllerFile} and ${sameFile}.\n`;
        //   throw new Error(errorMsg);
        // }
        // controllersCache.push({
        //   controller: controllerExt,
        //   fileName: controllerFile
        // });
      }
    });
  });

  export = controllersModule;

