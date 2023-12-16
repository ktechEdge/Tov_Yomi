-- יצירת מסד נתונים Tov_yomi
CREATE DATABASE IF NOT EXISTS Tov_yomi;

-- השימוש במסד נתונים Tov_yomi
USE Tov_yomi;

-- --------------------------------------------------------

-- יצירת טבלה Users
CREATE TABLE IF NOT EXISTS Users (
    id INT(20) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    First_name VARCHAR(255) DEFAULT NULL,
    Last_name varchar(255) DEFAULT NULL,
    Email varchar(255) DEFAULT NULL,
    User_name varchar(255) DEFAULT NULL,
    Password int(222) NOT NULL
);

-- --------------------------------------------------------

-- יצירת טבלה items
CREATE TABLE IF NOT EXISTS items (
   id int(11) NOT NULL,
   item text NOT NULL,
   Date date NOT NULL
);

-- --------------------------------------------------------

-- יצירת טבלה settings
CREATE TABLE IF NOT EXISTS settings (
   Image_URL varchar(255) DEFAULT NULL,
   to_remind tinyint(1) NOT NULL,
   Reminder_time time NOT NULL
);

