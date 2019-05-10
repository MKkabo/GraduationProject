-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2019 at 03:32 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ekhtarni`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `course_level` varchar(255) NOT NULL,
  `about` text NOT NULL,
  `duration` int(3) NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `category`, `course_level`, `about`, `duration`, `image`, `location`) VALUES
(1, 'Data Science', 'IT-Data Analysis', 'beginner', 'The Applied Data Science module is delivered entirely online so students can participate in continuing education without disrupting their lives.\n\nStudents who successfully complete Unit I earn a certificate and an invitation to enroll in Unit II. Those who successfully complete Unit II earn an overall certificate. Students have the opportunity to complete either unit of the module with honors.', 5, 'uploads\\2019-04-30T07-28-32.547ZDS.png', 'Online-Courseraa'),
(2, 'Business Analytics Specialization', 'Business Analysis', 'Advanced', 'The Advanced Business Analytics Specialization brings together academic professionals and experienced practitioners to share real world data analytics skills you can use to grow your business, increase profits, and create maximum value for your shareholders. Learners gain practical skills in extracting and manipulating data using SQL code, executing statistical methods for descriptive, predictive, and prescriptive analysis, and effectively interpreting and presenting analytic results. The problems faced by decision makers in today’s competitive business environment are complex. Achieve a clear competitive advantage by using data to explain the performance of a business, evaluate different courses of action, and employ a structured approach to business problem-solving. Check out a one-minute video about this specialization to learn more! ', 9, 'uploads\\2019-04-30T07-38-10.232Zbs.jpeg', 'Online- Courseraa');

-- --------------------------------------------------------

--
-- Table structure for table `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `follower_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `job_title` varchar(255) NOT NULL,
  `job_field` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `requirements` text NOT NULL,
  `about` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `newsfeed`
--

CREATE TABLE `newsfeed` (
  `id` int(11) NOT NULL,
  `body` text NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `newsfeed`
--

INSERT INTO `newsfeed` (`id`, `body`, `image`) VALUES
(1, 'NEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSS', 'uploads\\2019-05-05T12-33-20.074Zspider-man-into-the-spider-verse-3840x2160-4k-20634.jpg'),
(2, 'NEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSSNEWSS', 'uploads\\2019-05-05T14-00-34.269Zspider-man-into-the-spider-verse-3840x2160-4k-20634.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `profile`
--

CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone` varchar(15) CHARACTER SET utf16 COLLATE utf16_bin NOT NULL,
  `birthdate` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `interests` varchar(255) NOT NULL,
  `featured_skills` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profile`
--

INSERT INTO `profile` (`id`, `user_id`, `first_name`, `last_name`, `phone`, `birthdate`, `address`, `interests`, `featured_skills`, `image`) VALUES
(3, 1, 'Mohamed', 'Khaled', '01110560063', '2/4/1997', 'ein shams', 'ERP,Web-Development,Security', 'Hardworker self learning team working', 'uploads\\2019-04-30T07-09-46.302Zavatar.jpeg'),
(4, 2, 'Allaa', 'Magdy', '01282317121', '14/7/1997', 'El Mokattam', 'Buisness,Finance,Information System', '-Creativity  -Problem Solving -self learning', 'uploads\\2019-05-02T13-48-21.370ZWhatsApp Image 2019-05-02 at 3.43.32 PM.jpeg'),
(5, 3, 'test', 'test', '1234567890', '00/00/00', 'test', 'Finance,ERP', 'test test', 'uploads\\2019-05-02T21-19-33.884Zlogo.png');

-- --------------------------------------------------------

--
-- Table structure for table `rate`
--

CREATE TABLE `rate` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `created_at`) VALUES
(1, 'Mohamedkhaled', 'Mohamed@Bis.com', '$2a$10$oy37gj5T8BQq2wnZuY2epuAgLUPyvjg7OlXMjkyGOuXktfHPKBpsG', 0, '2019-04-30 07:08:25'),
(2, 'Allaa Magdy', 'Allaa@Bis.com', '$2a$10$/hCXX6JfgSjBDftkCtLZ8.qzrNNZy5Zsqt5E1KFFC/rgBuVvPgsyC', 0, '2019-05-02 13:22:30'),
(3, 'test', 'test@bis.com', '$2a$10$/Yry0ckxADMoO4BtzVEzmuSENoaBp9XAFPXTf8bVHKIWZQ9ovi8oC', 0, '2019-05-02 21:17:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `col_user_follower` (`user_id`),
  ADD KEY `col_follower_user` (`follower_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsfeed`
--
ALTER TABLE `newsfeed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `profile`
--
ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `rate`
--
ALTER TABLE `rate`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `newsfeed`
--
ALTER TABLE `newsfeed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `profile`
--
ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rate`
--
ALTER TABLE `rate`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `col_follower_user` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `col_user_follower` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profile`
--
ALTER TABLE `profile`
  ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
