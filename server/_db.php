<?php
$host = 'localhost'; // ที่อยู่เซิร์ฟเวอร์
$dbName = 'your_database_name'; // ชื่อฐานข้อมูล
$username = 'your_username'; // ชื่อผู้ใช้
$password = 'your_password'; // รหัสผ่าน

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "เชื่อมต่อฐานข้อมูลสำเร็จ!";
} catch (PDOException $e) {
    echo "ไม่สามารถเชื่อมต่อฐานข้อมูลได้: " . $e->getMessage();
}
?>
