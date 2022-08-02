DROP TABLE IF EXISTS `user`;

 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `reg_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES 
(1,'Germiona','Greyndger','krasotka@hogvards.com','2020-04-13 22:34:13'),
(2,'Ron','Uizli','rigiy@dira.com','2020-04-13 22:34:35'),
(3,'Garry','Potter','garik@hogvards.com','2020-04-13 22:34:58'),
(4,'Sneg','Professor','always@sneg.com','2020-04-13 22:36:04');

UNLOCK TABLES;


select * from user;
