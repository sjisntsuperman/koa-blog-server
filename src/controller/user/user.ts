// import {
//     fetchUserInfo,
//     setCookies
//   } from 'utils';
//   import { UserService } from '@/service/user/user';
//   import { ApplyRoleService } from '@/service/apply/role';
  
//   export const login: Controller = {
//     path: 'user/login',
//     handle: async (ctx) => {
//       // 用户RTX相关信息
//       const userInfo = await fetchUserInfo(ctx);
//       let {
//         loginName: rtx,
//         chineseName: name
//       } = userInfo;
//       const userService = new UserService();
//       let user = await userService.findUser(rtx);
//       const applyInfo = {
//         applyFor: 0,
//         applyState: 1,
//         business: 'all'
//       };
//       // 当前用户不存在, 创建用户
//       if (!user) {
//         user = await userService.createUser({
//           rtx,
//           name
//         });
//       } else {
//         // 获取当前用户角色申请状态, 返回最近一条记录
//         const applyRoleService = new ApplyRoleService();
//         const applyRecord = await applyRoleService.findOneRecord({
//           rtx
//         });
  
//         if (applyRecord) {
//           applyInfo.applyFor = applyRecord.role;
//           applyInfo.applyState = applyRecord.status;
//         }
  
//         // 若是管理员, 不在存在申请
//         if (user.role === 1) {
//           applyInfo.applyFor = 1;
//           applyInfo.applyState = 1;
//         }
//       }
  
//       // 设置用户Cookie信息
//       setCookies(ctx, {
//         key: 'rtx',
//         val: rtx
//       });
  
//       ctx.body = {
//         result: {
//           user: {
//             ...user,
//             ...applyInfo
//           }
//         }
//       };
//     }
//   };