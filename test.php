<?php
$arr = array('name'=> 'Вася', 'password'=> 123);
$arr1 = array('name'=> 'Петя', 'password'=> 456);
$arrNew = array($arr, $arr1);
echo json_encode($arrNew);