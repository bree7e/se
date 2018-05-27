-- Написать SQL который вернет список из последних 10 тем (по времени)
-- с их последним сообщением и его автором, 
-- в которых отписалось больше 3 пользователей. 
-- Результат: тема | сообщение | автор | дата.

-- Результат: тема | сообщение | автор | дата.
-- "Спортивный" вариант. Вытаскивать данные из базы "на месте".
SELECT t.name AS topic_name, p.content AS `message`, u.name AS author, p.created_at
FROM topics t JOIN posts p
ON p.id = (
	SELECT id
	FROM posts
	WHERE t.id = topic_id
	ORDER BY created_at DESC
	LIMIT 1
) JOIN users u ON u.id = p.user_id 
WHERE (
	SELECT COUNT(DISTINCT(users.id))
	FROM users JOIN posts ON users.id = posts.user_id
	WHERE t.id = posts.topic_id
) > 3
ORDER BY p.created_at DESC
LIMIT 10;

-- Вариант с денормализцей, приближенный к реальности. В темах сразу хранить id последнего сообщения и id автора последнего сообщения.
SELECT t.name AS topic_name, p.content AS `message`, u.name AS author, p.created_at
FROM topics t JOIN posts p ON t.id = p.topic_id
	JOIN users u ON t.last_post_user_id = u.id 
WHERE (
	SELECT COUNT(DISTINCT(users.id))
	FROM users JOIN posts ON users.id = posts.user_id
	WHERE t.id = posts.topic_id
) > 3
ORDER BY p.created_at DESC
LIMIT 10;

-- Последние 10 тем по постам
SELECT t.id AS topic_id, t.name AS topic_name, (
	SELECT created_at 
	FROM posts
	WHERE t.id = topic_id
	ORDER BY created_at DESC
	LIMIT 1
) as last_post_created_at
FROM topics t
ORDER BY last_post_created_at DESC
LIMIT 10

-- Последние 10 тем по постам, где отписалось больше 3 пользователей
SELECT t.id AS topic_id, t.name AS topic_name, (
	SELECT created_at 
	FROM posts
	WHERE t.id = topic_id
	ORDER BY created_at DESC
	LIMIT 1
) as last_post_created_at, COUNT(DISTINCT(u.id)) AS uniq_users_count
FROM users u JOIN posts p
ON u.id = p.user_id  JOIN topics t
ON t.id = p.topic_id
GROUP BY t.id, t.name
HAVING uniq_users_count > 3
ORDER BY last_post_created_at DESC
LIMIT 10


-- Посты пользователей
SELECT * 
FROM users u JOIN posts p
ON u.id = p.user_id
ORDER BY p.created_at

-- Пользователи написавшие больше 3 постов
SELECT u.name
FROM users u JOIN posts p
ON u.id = p.user_id
GROUP BY u.name
HAVING COUNT(p.id) > 3

-- Темы, где отписалось больше 2 пользователей
SELECT t.id AS topic_id, t.name AS topic_name, COUNT(distinct(u.id)) AS uniq_users_count
FROM users u JOIN posts p
ON u.id = p.user_id  JOIN topics t
ON t.id = p.topic_id
GROUP BY t.id, t.name
HAVING uniq_users_count > 2

-- Последние 10 тем, где отписалось больше 3 пользователей
SELECT t.id AS topic_id, t.name AS topic_name, t.created_at, COUNT(DISTINCT(u.id)) AS uniq_users_count
FROM users u JOIN posts p ON u.id = p.user_id  JOIN topics t ON t.id = p.topic_id
GROUP BY t.id, t.name
HAVING uniq_users_count > 3
ORDER BY t.created_at DESC
LIMIT 10