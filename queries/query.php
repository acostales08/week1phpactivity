    <?php

    class QueryBuilder
    {
        public function fetchUserQuery($condition)
        {
            if ($condition === "user/fetch") {
                $query = "SELECT * FROM employeenames";
                return $query;
            }
        }
    }
