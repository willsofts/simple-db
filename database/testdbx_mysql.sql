/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `testdb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `testdb`;

CREATE TABLE IF NOT EXISTS `sample` (
  `fieldchar` varchar(50) NOT NULL DEFAULT '0',
  `fieldint` int DEFAULT NULL,
  `fieldbigint` bigint DEFAULT NULL,
  `fielddecimal` decimal(16,2) DEFAULT NULL,
  `fielddate` date DEFAULT NULL,
  `fieldtime` time DEFAULT NULL,
  `fieldstamp` datetime DEFAULT NULL,
  `fieldbit` bit(1) DEFAULT NULL,
  `fieldtext` text,
  PRIMARY KEY (`fieldchar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `sample` (`fieldchar`, `fieldint`, `fieldbigint`, `fielddecimal`, `fielddate`, `fieldtime`, `fieldstamp`, `fieldbit`, `fieldtext`) VALUES
	('TEST-1', 3500, 3500, 3500.50, '2024-03-27', '12:00:00', '2024-03-27 10:31:34', b'1', 'Testing'),
	('TEST-10', 4500, 4500, 4500.00, '2024-09-06', '08:44:05', '2024-09-06 08:44:06', b'0', 'Testing'),
	('TEST-11', 5500, 5500, 5500.00, '2024-09-06', '08:44:36', '2024-09-06 08:44:36', b'0', 'Testing'),
	('TEST-12', 6500, 6500, 6500.00, '2024-09-06', '08:44:58', '2024-09-06 08:44:59', b'0', 'Testing'),
	('TEST-13', 7500, 7500, 7500.00, '2024-09-06', '08:45:21', '2024-09-06 08:45:22', b'0', 'Testing'),
	('TEST-14', 8500, 8500, 8500.00, '2024-09-06', '08:45:52', '2024-09-06 08:45:52', b'0', 'Testing'),
	('TEST-15', 9500, 9500, 9500.00, '2024-09-06', '08:46:14', '2024-09-06 08:46:15', b'0', 'Testing'),
	('TEST-2', 3500, 3500, 3500.50, '2027-03-25', '12:00:00', '2027-03-25 12:00:00', b'1', 'Testing'),
	('TEST-3', 3500, 3500, 3500.50, '2024-09-06', '10:36:41', '2024-03-27 10:36:41', b'1', 'Testing'),
	('TEST-4', 3500, 3500, 3500.50, '2024-09-06', '10:37:17', '2024-03-27 10:37:17', b'1', 'Testing'),
	('TEST-5', 3500, 3500, 3500.50, '2024-03-27', '10:38:29', '2024-03-27 10:38:29', b'1', 'Testing'),
	('TEST-6', 3500, 3500, 3500.50, '2024-03-27', '10:53:55', '2024-03-27 10:53:55', b'1', 'Testing'),
	('TEST-7', 1100, 2300, 1300.50, '2022-10-31', '11:39:14', '2022-10-31 11:39:14', b'1', 'Hello Test'),
	('TEST-8', 2200, 2500, 3300.50, '2022-10-31', '10:10:10', '2022-10-31 10:10:10', b'1', 'Hello Test'),
	('TEST-9', 3300, 3300, 3300.00, '2024-09-06', '08:43:27', '2024-09-06 08:43:28', b'0', 'Testing');

CREATE TABLE IF NOT EXISTS `testdbx` (
  `share` varchar(20) NOT NULL DEFAULT '',
  `yield` decimal(20,6) DEFAULT NULL,
  `percent` decimal(10,2) DEFAULT NULL,
  `remark` varchar(100) DEFAULT NULL,
  `mktid` varchar(100) DEFAULT NULL,
  `editdate` date DEFAULT NULL,
  `edittime` time DEFAULT NULL,
  `isactive` bit(1) DEFAULT NULL,
  PRIMARY KEY (`share`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

INSERT INTO `testdbx` (`share`, `yield`, `percent`, `remark`, `mktid`, `editdate`, `edittime`, `isactive`) VALUES
	('BBL', 45.500000, 55.00, 'Testing', 'TSO', '2023-10-03', '10:57:17', b'1'),
	('CIMB', 55.250000, 35.00, 'Update Testing', 'TST', '2022-10-23', '13:17:18', b'1'),
	('SCB', 55.750000, 55.00, 'Update Testing', 'TSO', '2023-01-01', '10:10:10', b'1'),
	('TEST', 55.550000, 35.00, 'Update Testing', 'TST', '2023-01-06', '10:39:52', b'1'),
	('TMB', 55.250000, 20.00, 'Update Testing', 'TAS', '2022-10-23', '13:17:17', b'1'),
	('UOB', 1155.500000, 55.00, 'Update Testing', 'TSO', '2023-01-01', '10:10:10', b'0');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
