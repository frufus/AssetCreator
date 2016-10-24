<?php
    echo json_encode(array_diff(scandir(dirname(__FILE__)), array('.', '..', 'scanDir.php')));