import {HelloWorldService} from '../../service/helloworld/helloworld';

export const helloworld:Controller = {
    path: 'helloworld',
    handle: async(ctx)=>{
        const helloWorldService = new HelloWorldService();
        let msg = await helloWorldService.getMsg('steinwei');
        if (!msg) {
            msg = await helloWorldService.createMsg({
              rtx: 'steinwei',
              msg: 'helloworld'
            });
          }
    
        ctx.body = {
            retcode: 0,
            result: {
                ...msg
            }
        };
    }
}