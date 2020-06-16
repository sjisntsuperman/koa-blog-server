const Koa = require( 'koa');

import path from 'path';
import envConfig from './config/env';
import moduleAlias  from 'module-alias';
moduleAlias.addAlias('@', __dirname);

import {logger} from './utils';

// const config = envConfig.properties;
const modelsPath = path.join(__dirname, './model');

const { createConnection } =require( 'typeorm');
// createConnection(config.database).then(() => {
//     // dbStatus.emit('success');
//     logger.info('Connection Database Success');
//   }).catch((err) => {
//     // dbStatus.emit('error');
//     logger.error(err);
//     logger.error('Connection Database Error');
//   });

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "blog",
  entities: [
    `${modelsPath}/**/*.ts`,
    `${modelsPath}/**/*.js`
  ],
  synchronize: true,
  logging: true
}).then(connection => {
  // 这里可以写实体操作相关的代码 
  logger.info('Connection Database Success');
}).catch(error => {
  logger.error(error);
  logger.error('Connection Database Error');
});

const mount = require('koa-mount');

const router = require('./router');

const app = new Koa();
// app.use(router);
app.use(mount('/', router.routes())).use(router.allowedMethods());

// middlewares

export = app;