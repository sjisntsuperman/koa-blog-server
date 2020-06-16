import app from './app';
import {logger} from './utils';

const port = 3333;

// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name; // 获取请求参数
//     ctx.response.body = `<h5>Hello, ${name}!</h5>`;
// });

// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h5>Index</h5>';
// });

// app.use(router.routes());

app.listen(port, ()=>{
    logger.info(`server is on ${port}`);
})

module.exports=app;