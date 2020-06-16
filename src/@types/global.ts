import Koa from 'koa';
// import { JSONSchema7Definition } from 'json-schema';

// import {
//   RecurrenceRule,
//   RecurrenceSpecDateRange,
//   RecurrenceSpecObjLit,
//   JobCallback
// } from 'node-schedule';

interface CustomT {
  [propName: string]: any;
}

declare global {
  type Methods = 'GET' | 'POST';

  type ServerMiddleware = Koa.Middleware<{}, CustomT>;

  // 控制器
  interface Controller {
    name?: string;
    path: string;
    methods?: Methods[];
    handle: ServerMiddleware;
    // validateRules?: JSONSchema7Definition;
  }

  // 定时任务
//   interface Schedule {
//     rule: RecurrenceRule | RecurrenceSpecDateRange | RecurrenceSpecObjLit | Date | string | number;
//     jobCallback: JobCallback;
//   }
}
