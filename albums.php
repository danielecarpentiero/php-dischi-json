<?php

$database = file_get_contents(__DIR__ . '/discs.json');

$albums = json_decode($database);

$results = $albums;

if (isset($_GET['index'])) {
    $results = $albums[$_GET['index']];
}


header('Content-Type: application/json');
echo json_encode($results);
