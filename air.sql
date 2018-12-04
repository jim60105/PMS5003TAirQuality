-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2018-06-12 11:39:19
-- 伺服器版本: 10.1.30-MariaDB
-- PHP 版本： 7.1.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `air`
--
CREATE DATABASE IF NOT EXISTS `air` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `air`;

-- --------------------------------------------------------

--
-- 資料表結構 `airdata`
--

CREATE TABLE IF NOT EXISTS `airdata` (
  `no` bigint(20) NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pm1` float DEFAULT NULL,
  `pm10` float DEFAULT NULL,
  `pm25` float DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `humid` float DEFAULT NULL,
  `clientNum` int(11) DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `time` (`time`),
  KEY `clientNum` (`clientNum`)
) ENGINE=InnoDB AUTO_INCREMENT=73456 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `airdatadevice`
--

CREATE TABLE IF NOT EXISTS `airdatadevice` (
  `clientNum` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `app` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `device` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gps_lat` double DEFAULT NULL,
  `gps_lon` double DEFAULT NULL,
  `gps_alt` int(11) DEFAULT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pm1` float DEFAULT NULL,
  `pm10` float DEFAULT NULL,
  `pm25` float DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `humid` float DEFAULT NULL,
  `co2` float DEFAULT NULL,
  `ThingSpeakWriteKey` tinytext COLLATE utf8_unicode_ci,
  `ThingSpeakReadKey` tinytext COLLATE utf8_unicode_ci,
  PRIMARY KEY (`clientNum`),
  KEY `device_id` (`device_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 資料表的匯出資料 `airdatadevice`
--

INSERT INTO `airdatadevice` (`clientNum`, `device_id`, `app`, `device`, `gps_lat`, `gps_lon`, `gps_alt`, `time`, `pm1`, `pm10`, `pm25`, `temp`, `humid`, `co2`, `ThingSpeakWriteKey`, `ThingSpeakReadKey`) VALUES
(0, '東海別墅', 'PM25', 'Ameba', 24.181598, 120.589623, 256, '2018-12-04 03:22:20', 4, 7, 7, 22.9, 66.9, NULL, '6DJSX5DL75TROZXE', 'DESPDR96061TRMZM'),
(1, '東海別墅_indoor', 'PM25', 'Ameba', 24.18167, 120.58945, 256, '2018-11-21 13:33:58', 4, 5, 5, 22.9, 72, NULL, 'FZX92BB5QS7N7LTR', ''),
(2, '西屯福科', 'PM25', 'Ameba', 24.1836697, 120.6193887, 134, '2018-06-17 15:03:14', 4, 7, 7, 26.2, 72, NULL, 'BMABO2PN6JSI6OJA', '35WV5CFISE6X8QNT');

-- --------------------------------------------------------

--
-- 資料表結構 `airdataqueue`
--

CREATE TABLE IF NOT EXISTS `airdataqueue` (
  `no` bigint(20) NOT NULL AUTO_INCREMENT,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pm1` float DEFAULT NULL,
  `pm10` float DEFAULT NULL,
  `pm25` float DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `humid` float DEFAULT NULL,
  `clientNum` int(11) DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=533538 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `lassdata`
--

CREATE TABLE IF NOT EXISTS `lassdata` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pm1` float DEFAULT NULL,
  `pm10` float DEFAULT NULL,
  `pm25` float DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `humid` float DEFAULT NULL,
  `co2` float DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `device_id` (`device_id`),
  KEY `time` (`time`)
) ENGINE=InnoDB AUTO_INCREMENT=203013 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `lassdataqueue`
--

CREATE TABLE IF NOT EXISTS `lassdataqueue` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pm1` float DEFAULT NULL,
  `pm10` float DEFAULT NULL,
  `pm25` float DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `humid` float DEFAULT NULL,
  `co2` float DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `device_id` (`device_id`),
  KEY `time` (`time`)
) ENGINE=InnoDB AUTO_INCREMENT=799015 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `lassdevice`
--

CREATE TABLE IF NOT EXISTS `lassdevice` (
  `device_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `app` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `device` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gps_lat` double DEFAULT NULL,
  `gps_lon` double DEFAULT NULL,
  `gps_alt` int(11) DEFAULT NULL,
  `time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `pm1` float DEFAULT NULL,
  `pm10` float DEFAULT NULL,
  `pm25` float DEFAULT NULL,
  `temp` float DEFAULT NULL,
  `humid` float DEFAULT NULL,
  `co2` float DEFAULT NULL,
  PRIMARY KEY (`device_id`),
  KEY `device_id` (`device_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `email` longtext COLLATE utf8_unicode_ci NOT NULL,
  `password` longtext COLLATE utf8_unicode_ci NOT NULL,
  `useNearest` tinyint(1) NOT NULL DEFAULT '0',
  `iftttKey` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`no`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `userdevice`
--

CREATE TABLE IF NOT EXISTS `userdevice` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `user_no` int(11) NOT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `device_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `nickname` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`no`),
  KEY `user_no` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `useriftttdevice`
--

CREATE TABLE IF NOT EXISTS `useriftttdevice` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `user_no` int(11) NOT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `device_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `air_type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `monitor_value` int(11) NOT NULL,
  PRIMARY KEY (`no`),
  KEY `user_no` (`user_no`),
  KEY `device_id` (`device_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
