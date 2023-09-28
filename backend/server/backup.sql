-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.10.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `testdb`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `testdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `testdb`;

--
-- Table structure for table `STUDENTS`
--

DROP TABLE IF EXISTS `STUDENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STUDENTS`
--

LOCK TABLES `STUDENTS` WRITE;
/*!40000 ALTER TABLE `STUDENTS` DISABLE KEYS */;
INSERT INTO `STUDENTS` VALUES ('41106114E','吳姵諭',1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('41277013H','黃浩閔',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('41073142H','黃浩閔',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('41047035S','林昕銳',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('41147009S','陳炫佑',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('B08207014','潘姿妤',1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('41275026H','宮崎卓',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('40940309S','黃靖庭',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('41040111s','黃建勛',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('41271202H','洪明凱',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('91299077X','U.A.T. Brisset (Mina 蜜娜)',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('40947030S','吳文元',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('41244012S','賴俞翔',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('40940323S','王珮菱',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('230916106','Vincent Tran （陳幸華）',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('E11207001','Oeter Anne-Catherine ',0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('40871207h','李亭萱',0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),('40975024H','馮楷宸',0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0),('4940309S','黃靖庭',0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0);
/*!40000 ALTER TABLE `STUDENTS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-29  2:38:05
