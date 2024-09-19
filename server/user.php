<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}
$users = [
    [
        'id' => 1,
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'age' => 30
    ],
    [
        'id' => 2,
        'name' => 'Jane Smith',
        'email' => 'jane@example.com',
        'age' => 25
    ],
    [
        'id' => 3,
        'name' => 'Alice Johnson',
        'email' => 'alice@example.com',
        'age' => 28
    ]
];

// แสดงผลข้อมูลผู้ใช้
echo json_encode($users, JSON_PRETTY_PRINT);
?>
