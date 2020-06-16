CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `rtx` varchar(32) NOT NULL COMMENT '用户RTX',
  `name` varchar(32) NOT NULL COMMENT '用户中文名',
  `role` int(10) DEFAULT '0' COMMENT '用户角色\n0 - 新用户\n1 - 管理员\n2 - 开发\n3 - 产品/运营\n4 - 设计\n',
  PRIMARY KEY (`id`),
  UNIQUE KEY `rtx` (`rtx`) COMMENT '用户RTX'
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COMMENT='用户基本信息'
