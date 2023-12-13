-- יצירת מסד נתונים Tov_yomi
CREATE DATABASE IF NOT EXISTS Tov_yomi;

-- השימוש במסד נתונים Tov_yomi
USE Tov_yomi;

-- יצירת טבלה Users
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255)
);
