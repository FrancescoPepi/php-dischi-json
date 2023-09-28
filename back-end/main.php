<?php

header('content-type: application/json');
$store = file_get_contents('./data/store.json');
$array_disc = json_decode($store);
var_dump($store);
echo $store;