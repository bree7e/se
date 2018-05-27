-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               5.7.16 - MySQL Community Server (GPL)
-- Операционная система:         Win32
-- HeidiSQL Версия:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Дамп структуры для таблица skyeng_forum.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8mb4_unicode_ci,
  `topic_id` int(10) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `topic_id_index` (`topic_id`),
  KEY `user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы skyeng_forum.posts: ~13 rows (приблизительно)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` (`id`, `content`, `topic_id`, `user_id`, `created_at`, `updated_at`) VALUES
	(1, 'Test 1', 1, 1, '2017-02-20 23:36:17', '2018-05-21 23:36:18'),
	(2, 'Test 2', 4, 1, '2018-06-21 23:36:35', '2018-05-21 23:36:36'),
	(3, 'Test 3', 2, 1, '2018-03-21 23:36:53', '2018-05-21 23:36:53'),
	(4, 'Всем привет', 8, 3, '2018-01-21 23:38:12', NULL),
	(5, '1', 1, 2, '2018-05-21 23:51:30', NULL),
	(6, '2', 1, 3, '2018-05-21 23:51:31', NULL),
	(7, '3', 1, 2, '2018-05-21 23:51:32', NULL),
	(8, '1', 2, 3, '2018-05-21 23:51:33', NULL),
	(9, '2', 2, 3, '2018-05-21 23:51:34', NULL),
	(10, '3', 2, 3, '2018-05-21 23:51:35', NULL),
	(11, '1', 4, 2, '2018-05-21 23:51:50', NULL),
	(12, '2', 4, 3, '2018-05-21 23:52:03', NULL),
	(13, '3', 4, 2, '2018-05-21 23:52:03', NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Дамп структуры для таблица skyeng_forum.sections
CREATE TABLE IF NOT EXISTS `sections` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parent_id` int(10) unsigned DEFAULT NULL,
  `nest_left` int(11) DEFAULT NULL,
  `nest_right` int(11) DEFAULT NULL,
  `nest_depth` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug_unique` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы skyeng_forum.sections: ~4 rows (приблизительно)
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` (`id`, `name`, `slug`, `description`, `parent_id`, `nest_left`, `nest_right`, `nest_depth`, `created_at`, `updated_at`) VALUES
	(10, 'Осень', 'autumn', NULL, NULL, 1, 6, 0, '2018-05-21 22:27:40', '2018-05-21 22:27:41'),
	(12, 'Зима', 'winter', NULL, NULL, 7, 8, 0, '2018-05-21 22:29:42', '2018-05-21 22:29:43'),
	(13, 'Сентябрь', 'september', NULL, 10, 2, 3, 1, '2018-05-21 22:29:14', '2018-05-21 22:29:15'),
	(15, 'Октябрь', 'october', NULL, 10, 4, 5, 1, '2018-05-21 22:29:38', '2018-05-21 22:29:39');
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;

-- Дамп структуры для таблица skyeng_forum.topics
CREATE TABLE IF NOT EXISTS `topics` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `section_id` int(10) unsigned NOT NULL,
  `topic_starter_id` int(11) DEFAULT NULL,
  `last_post_id` int(11) DEFAULT NULL,
  `last_post_user_id` int(11) DEFAULT NULL,
  `last_post_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `topic_slug_unique` (`slug`),
  KEY `section_id_index` (`section_id`),
  KEY `topic_starter_id_index` (`topic_starter_id`),
  KEY `topics_last_post_at_index` (`last_post_at`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы skyeng_forum.topics: ~5 rows (приблизительно)
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` (`id`, `name`, `slug`, `section_id`, `topic_starter_id`, `last_post_id`, `last_post_user_id`, `last_post_at`, `created_at`, `updated_at`) VALUES
	(1, 'Снова в школу', 'school', 13, 1, NULL, NULL, NULL, '2018-05-21 23:29:45', NULL),
	(2, 'Гербарий', 'herbarium', 13, 1, NULL, NULL, '2018-05-21 23:30:47', '2018-05-21 23:30:48', NULL),
	(4, 'Путешествия', 'travel', 14, 2, NULL, NULL, '2018-05-21 23:31:25', '2018-05-21 23:31:25', '2018-05-21 23:31:26'),
	(6, 'Воспоминания', 'memory', 13, 3, NULL, NULL, NULL, NULL, NULL),
	(8, 'Подготовка к зиме', 'preparation', 14, 1, NULL, NULL, '2018-05-21 23:35:05', '2018-05-21 23:35:05', '2018-05-21 23:35:05');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;

-- Дамп структуры для таблица skyeng_forum.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_unique` (`email`),
  UNIQUE KEY `login_unique` (`name`),
  KEY `login_index` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Дамп данных таблицы skyeng_forum.users: ~3 rows (приблизительно)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `last_login`, `created_at`, `updated_at`) VALUES
	(1, 'John', 'john@tyapk.ru', '123', '2018-05-21 22:26:21', NULL, NULL),
	(2, 'Vasya', 'vasya@tyapk.ru', '234', '2018-05-21 22:26:14', NULL, NULL),
	(3, 'Petya', 'petya@tyapk.ru', '345', '2018-05-21 22:26:39', NULL, NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
