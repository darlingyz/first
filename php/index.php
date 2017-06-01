<?php
header("content-type:text/html,charset=utf-8");
header("Access-Control-Allow-Origin:*");
$phone_num=$_POST["phone_num"];
$phone_random=$_POST["phone_random"];
$password=$_POST["password"];
$password1=$_POST["password1"];
$conn = new mysqli("","root");
$conn -> select_db("work");
$sql="select * from newwork where phone_num='$phone_num'";
$result=$conn->query($sql);
if($result->num_rows==0){
	echo "1";
	$sql="insert into newwork (phone_num,phone_random,password,password1) values ('$phone_num','$phone_random','$password','$password1')";
	$conn->query($sql);//
}else{
	echo "0";
};



?>