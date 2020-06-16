import { Service } from '../service';
import { User } from '../../model/user/user.model';
interface UserInfo {
    rtx: string;
    name: string;
}
export declare class UserService extends Service {
    findUser: (rtx: string) => Promise<User>;
    createUser: (params: UserInfo) => Promise<User>;
}
export {};
