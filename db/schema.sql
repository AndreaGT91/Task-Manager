-- USE m5579rzj2yaqcl90;

-- CREATE TABLE todos (
-- id INT AUTO_INCREMENT NOT NULL,
-- description VARCHAR(255),
-- createdAt TIMESTAMP NOT NULL CURRENT_TIMESTAMP,
-- PRIMARY KEY(id)
-- );

DROP DATABASE IF EXISTS tasks_db;

CREATE database tasks_db;

USE tasks_db;

CREATE TABLE tasks (
  id INTEGER NOT NULL AUTO_INCREMENT,
  task_name VARCHAR(255),
  completed BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);