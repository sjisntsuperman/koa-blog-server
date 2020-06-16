import { Service } from '../service';
import { User } from '../../model/user/user.model';

interface UserInfo {
  rtx: string;
  name: string;
}

/**
 * @desc 用户服务
 */
export class UserService extends Service {
  // 查找用户
  public findUser = async (rtx: string) => {
    const user = await this.manager.findOne(User, {
      rtx
    });
    return user;
  };

  // 创建用户
  public createUser = async (params: UserInfo) => {
    let user = new User();
    user.rtx = params.rtx;
    user.name = params.name;
    user = await this.manager.save(user);
    return user;
  };
}