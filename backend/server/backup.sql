-- MySQL dump

-- Current Database: `testdb`
CREATE DATABASE IF NOT EXISTS `testdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `testdb`;

-- Table structure for table `STUDENTS`
DROP TABLE IF EXISTS `STUDENTS`;

CREATE TABLE `STUDENTS` (
  `id` varchar(20) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `week1` tinyint(1) DEFAULT '0',
  `week2` int DEFAULT '0',
  `week3` int DEFAULT '0',
  `week4` int DEFAULT '0',
  `week5` int DEFAULT '0',
  `week6` int DEFAULT '0',
  `week7` int DEFAULT '0',
  `week8` int DEFAULT '0',
  `week9` int DEFAULT '0',
  `week10` int DEFAULT '0',
  `week11` int DEFAULT '0',
  `week12` int DEFAULT '0',
  `week13` int DEFAULT '0',
  `week14` int DEFAULT '0',
  `week15` int DEFAULT '0',
  `week16` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table `STUDENTS`
LOCK TABLES `STUDENTS` WRITE;

INSERT INTO `STUDENTS` VALUES 
('41106114E','吳姵諭',1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41277013H','黃浩閔',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41073142H','黃浩閔',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41047035S','林昕銳',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41147009S','陳炫佑',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('B08207014','潘姿妤',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41275026H','宮崎卓',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40940309S','黃靖庭',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41040111s','黃建勛',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41271202H','洪明凱',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('91299077X','U.A.T. Brisset (Mina 蜜娜)',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40947030S','吳文元',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41244012S','賴俞翔',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40940323S','王珮菱',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('230916106','Vincent Tran （陳幸華）',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('E11207001','Oeter Anne-Catherine',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40871207h','李亭萱',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40975024H','馮楷宸',0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('4940309S','黃靖庭',0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0);

ALTER TABLE STUDENTS CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

UNLOCK TABLES;
