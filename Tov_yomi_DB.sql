-- יצירת מסד נתונים tov_yomi
CREATE DATABASE IF NOT EXISTS tov_yomi;

-- השימוש במסד נתונים tov_yomi
USE tov_yomi;

-- --------------------------------------------------------

-- יצירת טבלה users
CREATE TABLE IF NOT EXISTS users (
    id INT(20) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    real_name VARCHAR(255) NOT NULL,
    email varchar(255) NOT NULL,
    user_name varchar(255) NOT NULL,
    password int(222) NOT NULL,
    last_login_time datetime DEFAULT NULL,
    total_login_cnt int(255) NOT NULL,
    token int(20) DEFAULT NULL
);

-- --------------------------------------------------------

-- יצירת טבלה items
CREATE TABLE IF NOT EXISTS items (
   id int(11) NOT NULL,
   item text NOT NULL,
   date date NOT NULL,
   is_shared tinyint(4) NOT NULL,
   ordr int(11) NOT NULL
);

-- --------------------------------------------------------

-- יצירת טבלה settings
CREATE TABLE IF NOT EXISTS settings (
   image_URL varchar(255) DEFAULT NULL,
   to_remind tinyint(1) NOT NULL,
   reminder_time time NOT NULL
);

