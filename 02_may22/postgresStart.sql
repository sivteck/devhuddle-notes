--  list all databases
-- \l
-- 
--  create database
-- CREATE DATATBASE <dbname>;
-- 
--  connect to database
-- \c <dbname>
-- 
--  display all tables
-- \dt
-- 
--  create table

CREATE TABLE IF NOT EXISTS  operation(
  operation_name TEXT UNIQUE,
  description TEXT NOT NULL,
  total_cost TEXT NOT NULL,
  coverup TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS simbagang (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  nickname TEXT,
  phone TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS involved(
  id INT REFERENCES simbagang(id),
  operation_name TEXT references operation(operation_name),
  role TEXT NOT NULL
);

-- psql -U sivarambalakrishnan -d sivdb -a -f postgresStart.sql
