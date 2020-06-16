import { Service } from '../service';
import { HelloWorld } from '../../model/helloworld/msg';
interface Msg {
    id?: number;
    rtx: string;
    msg: string;
}
export declare class HelloWorldService extends Service {
    createMsg: (params: Msg) => Promise<HelloWorld>;
    getMsg: (rtx: string) => Promise<HelloWorld>;
}
export {};
