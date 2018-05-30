-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- 主機: localhost
-- 產生時間： 2018 年 05 月 30 日 05:41
-- 伺服器版本: 10.1.31-MariaDB
-- PHP 版本： 7.2.2

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
CREATE DATABASE IF NOT EXISTS `air` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=74817 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=755780 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=1591008 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=31557410 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `userdevice`
--

CREATE TABLE IF NOT EXISTS `userdevice` (
  `no` int(11) NOT NULL AUTO_INCREMENT,
  `user_no` int(11) NOT NULL,
  `type` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `device_id` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`no`),
  KEY `user_no` (`user_no`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

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
