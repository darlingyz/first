<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$phone_num = $_POST["phone_num"];
$password = $_POST["password"];
$conn = new mysqli("","root");
$conn ->select_db("work");
$sql = "select * from newwork where phone_num = '$phone_num'";
$result = $conn->query($sql);
if($result->num_rows == 0){
	echo "1";
}else{
	$sql = "select * from newwork where password = '$password'";
	$result = $conn->query($sql);
	if($result->num_rows == 0){
		echo "0";
}else{
	echo "2";
}
}

?>
