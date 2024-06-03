<?php
require("../database/config.php");
require("../queries/query.php");

interface Iuser
{
    public function fetchData();
}

class UserController extends Database implements Iuser
{
    public function fetchData()
    {
        $query = new QueryBuilder();
        if ($_SERVER["REQUEST_METHOD"] === "GET") {
            if ($this->php_prepare($query->fetchUserQuery("user/fetch"))) {
                $this->php_execute();
                if ($this->php_rowCount()) {
                    $data = $this->php_fetchAll();
                    echo json_encode($data);
                } else {
                    $response = array(
                        "status" => 404,
                        "message" => "no data found"
                    );
                    echo json_encode($response);
                }
            }
        }
    }
}
