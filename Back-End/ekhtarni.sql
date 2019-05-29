-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2019 at 09:25 PM
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
(1, 'Data Science', 'IT-Data Analysis', 'beginner', 'The Applied Data Science module is delivered entirely online so students can participate in continuing education without disrupting their lives.\n\nStudents who successfully complete Unit I earn a certificate and an invitation to enroll in Unit II. Those who successfully complete Unit II earn an overall certificate. Students have the opportunity to complete either unit of the module with honors.', 5, 'uploads\\2019-04-30T07-28-32.547ZDS.png', 'Online - Courseraa'),
(2, 'Business Analytics Specialization', 'Business Analysis', 'Advanced', 'The Advanced Business Analytics Specialization brings together academic professionals and experienced practitioners to share real world data analytics skills you can use to grow your business, increase profits, and create maximum value for your shareholders. Learners gain practical skills in extracting and manipulating data using SQL code, executing statistical methods for descriptive, predictive, and prescriptive analysis, and effectively interpreting and presenting analytic results. The problems faced by decision makers in today’s competitive business environment are complex. Achieve a clear competitive advantage by using data to explain the performance of a business, evaluate different courses of action, and employ a structured approach to business problem-solving. Check out a one-minute video about this specialization to learn more! ', 9, 'uploads\\2019-04-30T07-38-10.232Zbs.jpeg', 'Online - Courseraa'),
(3, 'Deep Learning', 'Data Analysis', 'Advanced', 'If you want to break into AI, this Specialization will help you do so. Deep Learning is one of the most highly sought after skills in tech. We will help you become good at Deep Learning.\n\nIn five courses, you will learn the foundations of Deep Learning, understand how to build neural networks, and learn how to lead successful machine learning projects. You will learn about Convolutional networks, RNNs, LSTM, Adam, Dropout, BatchNorm, Xavier/He initialization, and more. You will work on case studies from healthcare, autonomous driving, sign language reading, music generation, and natural language processing. You will master not only the theory, but also see how it is applied in industry. You will practice all these ideas in Python and in TensorFlow, which we will teach.\n\nYou will also hear from many top leaders in Deep Learning, who will share with you their personal stories and give you career advice.\n\nAI is transforming multiple industries. After finishing this specialization, you will likely find creative ways to apply it to your work.', 12, 'uploads\\2019-05-21T15-52-44.508Z1_5ZuLCsB1KXEPgHu-qJ8WxQ.png', 'Online - Udemy'),
(4, 'Digital Marketing', 'Marketing', 'Advanced', 'This Specialization explores several aspects of the new digital marketing environment, including topics such as digital marketing analytics, search engine optimization, social media marketing, and 3D Printing. When you complete the Digital Marketing Specialization you will have a richer understanding of the foundations of the new digital marketing landscape and acquire a new set of stories, concepts, and tools to help you digitally create, distribute, promote and price products and services.', 6, 'uploads\\2019-05-21T15-56-17.212Zdigitalmarketing850.jpg', 'Online - Udemy'),
(5, 'Essential Career', 'Soft Skills', 'Beginers', 'This soft skills training course will teach you how to develop the skills that can make the difference between a lackluster career that tops out at middle management versus one that lands you in the executive suite. Or to wherever you define career success. So many soft skills seem like common sense at first glance, but they are not commonly applied by most workers. This soft skills training course will give you an edge over your competitors. It will also make your job, your career and your life more rewarding and enjoyable.\n\nWhat will students achieve or be able to do after taking this course?\n\nUnderstand how to be a great communicator\nBecome a stronger listener\nAppear professional to co-workers and bosses of all ages\nAvoid common career blunders that often end careers\nManage expectations for bosses and colleagues\nPosition yourself for promotions\nMake technology your asset, even if you are afraid of technology\nAvoid the Not My Job Syndrome\nDevelop EQ to Match Your IQ\nDevelop leadership qualities', 5, 'uploads\\2019-05-21T16-04-16.228Zsoft-skills-1.png', 'Tahrer - Greek campus '),
(6, 'ICDL', 'The International Computer Driving License ', 'Beginers', 'The ICDL was developed with the aim to enable both individuals and institutions to improve their uses of information technology and computers.\r\n\r\nThe ICDL is now required by many companies, the Ministry of Communications, the Ministry of Education, the Ministry of Health and Population and the Supreme Council of Universities; i.e. ICDL will be available for a wide range of people so as to be qualified to get jobs and to develop job skills.\r\nwww.ICDl.com', 5, 'uploads\\2019-05-21T16-14-15.465Z1851052_44c1.jpg', 'Ein Shams University');

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

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `job_title`, `job_field`, `company_name`, `requirements`, `about`, `image`, `location`) VALUES
(1, 'Manager', 'ERP', 'SAP', 'ABES,ITI', 'this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job is', 'uploads\\2019-05-17T18-58-19.078Z58549573_645065285956834_1532393285526487040_n.jpg', 'Ein shams'),
(2, 'Manager', 'ERP', 'Orcal', 'ABES,ITI', 'this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job isis job is this job is this job is this job is this job is this job is this job is', 'uploads\\2019-05-17T22-37-22.218Z58549573_645065285956834_1532393285526487040_n.jpg', 'Maadi');

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
(1, 'Almost two-thirds of businesses are planning to migrate an enterprise resource planning (ERP) system to the cloud or are already doing so, despite many of them having concerns about moving sensitive data, security and regulatory compliance.\nwhich open New Fields on ERP Cloud path and make oportonties  for new careers', 'uploads\\2019-05-21T16-23-27.886Z21601.png'),
(2, 'Whether you want to get into IT from another sector or advance your career and increase your earning potential as an experienced IT professional, IT certifications can help you achieve your career goals. But you may be asking, which IT certification should I get?\r\nYou can go to https://www.certification.comptia.org\r\nfor More Detials for free!', 'uploads\\2019-05-21T16-26-13.799Zprogram_certification_275x135.9c8f42a9ff6fe424146651405821bed8cbae926b.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
