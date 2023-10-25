-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 18, 2023 at 12:22 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reservation`
--

-- --------------------------------------------------------

--
-- Table structure for table `day_reservations`
--

CREATE TABLE `day_reservations` (
  `id` int(11) NOT NULL,
  `nameday` varchar(255) NOT NULL,
  `emailday` varchar(255) NOT NULL,
  `addressday` text NOT NULL,
  `dateday` date NOT NULL,
  `cottage_id` int(11) NOT NULL,
  `kidsday` int(11) NOT NULL,
  `adultsday` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `night_reservations`
--

CREATE TABLE `night_reservations` (
  `id` int(11) NOT NULL,
  `nameNight` varchar(255) NOT NULL,
  `emailNight` varchar(255) NOT NULL,
  `addressNight` text NOT NULL,
  `dateNight` date NOT NULL,
  `roomNumber` int(11) NOT NULL,
  `kidsNight` int(11) NOT NULL,
  `adultsNight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `day_reservations`
--
ALTER TABLE `day_reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `night_reservations`
--
ALTER TABLE `night_reservations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `day_reservations`
--
ALTER TABLE `day_reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `night_reservations`
--
ALTER TABLE `night_reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
