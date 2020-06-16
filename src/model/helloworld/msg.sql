CREATE TABLE `helloworld` (
  `id` int(10) NOT NULL AUTO_INCREMENT COMMENT '自定义ID',
  `rtx` varchar(32) NOT NULL COMMENT '用户RTX',
  `msg` varchar(32) NOT NULL COMMENT '信息',
  PRIMARY KEY (`id`),
  UNIQUE KEY `rtx` (`rtx`) COMMENT '用户RTX'
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COMMENT='测试信息'
