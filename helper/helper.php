<?php
require("../controller/userController.php");

if (isset($_GET["isTrue"]) === true) {
    $callback = new UserController();
    $callback->fetchData();
}
