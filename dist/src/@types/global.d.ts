import Koa from 'koa';
interface CustomT {
    [propName: string]: any;
}
declare global {
    type Methods = 'GET' | 'POST';
    type ServerMiddleware = Koa.Middleware<{}, CustomT>;
    interface Controller {
        name?: string;
        path: string;
        methods?: Methods[];
        handle: ServerMiddleware;
    }
}
export {};
