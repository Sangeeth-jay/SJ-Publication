<?php
require_once 'connection.php';

if(isset($_POST['delete'])){
    $id=$_POST['id'];

    $sql="DELETE from acc where id='$id';";

    $query_run=mysqli_query($conn,$sql);

    if($query_run){
        echo('<script>alert"Account deleted"</script>');
        header("location:index1.php");
    }
    else{
        echo"Error";
    }
}
?>