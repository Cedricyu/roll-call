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
('41106114E','Wu Pei-yu',1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41277013H','Huang Hao-min',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41073142H','Huang Hao-min',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41047035S','Lin Xin-rui',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41147009S','Chen Xuan-you',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('B08207014','Pan Zi-yu',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41275026H','Miyazaki Taku',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40940309S','Huang Jing-ting',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41040111s','Huang Jian-xun',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41271202H','Hong Ming-kai',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('91299077X','U.A.T. Brisset (Mina)',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40947030S','Wu Wen-yuan',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('41244012S','Lai Yu-xiang',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40940323S','Wang Pei-ling',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('230916106','Vincent Tran (Chen Xing-hua)',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('E11207001','Oeter Anne-Catherine',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40871207h','Li Ting-xuan',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
('40975024H','Feng Kai-chen',0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0),

ALTER TABLE STUDENTS CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

UNLOCK TABLES;
