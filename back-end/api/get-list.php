<?php
$json_list = file_get_contents('../data/store.json');

$list = json_decode($json_list);

header('Content-Type: application/json');

echo json_encode($list);