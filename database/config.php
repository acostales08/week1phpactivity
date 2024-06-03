<?php

class DatabaseMutation
{
    static $host = "localhost";
    static $user = "root";
    static $pass = "";
    static $db = "employeedb";
    static $helper;
    static $statement;
}

class Database
{
    public function connect()
    {
        try {
            $connectionString = "mysql:host=" . DatabaseMutation::$host . ";dbname=" . DatabaseMutation::$db;
            DatabaseMutation::$helper = new PDO($connectionString, DatabaseMutation::$user, DatabaseMutation::$pass);
            DatabaseMutation::$helper->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return DatabaseMutation::$helper;
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    public function php_prepare($sql)
    {
        return DatabaseMutation::$statement = $this->connect()->prepare($sql);
    }

    public function php_execute()
    {
        return DatabaseMutation::$statement->execute();
    }

    public function php_fetchAll()
    {
        return DatabaseMutation::$statement->fetchAll();
    }

    public function php_rowCount()
    {
        return DatabaseMutation::$statement->rowCount();
    }
}
