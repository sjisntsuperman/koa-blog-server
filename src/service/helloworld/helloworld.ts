import { Service } from '../service';
import {HelloWorld} from '../../model/helloworld/msg';

interface Msg{
  id?: number,
  rtx: string,
  msg: string
}

/**
 * @desc helloworld服务
 */
export class HelloWorldService extends Service {
  // 创建用户
  public createMsg = async (params: Msg) => {
    let msg = new HelloWorld();
    msg.rtx = params.rtx;
    msg.msg = params.msg;
    msg = await this.manager.save(msg);
    return msg;
  };

  public getMsg = async(rtx: string) => {
    const msg = await this.manager.findOne(HelloWorld, {
      rtx 
    });
    return msg;
  }
}