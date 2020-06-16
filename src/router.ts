import Router from 'koa-router';
import controllersModule from './controller';

const routers = new Router({
  prefix: '/cgi/',
  sensitive: true,
  strict: true
});

// 遍历生成控制器路由
controllersModule.forEach(controller => {
  const {
    name,
    path,
    methods,
    handle,
  //   validateRules
  } = controller;
  const middleWares = [];

  // 是否需要校验参数
  // const hasValidateRules = !!Object.keys(validateRules).length;
  // if (hasValidateRules) {
  //   middleWares.push(validateParams({
  //     validateRules
  //   }));
  // }

  middleWares.push(handle);

  // 路由选项
  const opts = {
    name
  };
  routers.register(
    path,
    methods,
    middleWares,
    opts
  );
});

export = routers;