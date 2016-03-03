<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST))
    $_POST = json_decode(file_get_contents('php://input'), true);


        $receiver = "dans@weddingdance.ro";
	$subject = $_POST['firstName'] . " " . $_POST['lastName'] . " ti-a trimis un mesaj pe site";
        $msg = "Persoana : " .
        $_POST['firstName'] . " " .
        $_POST['lastName'] . "\n\n" .
	"adresa email: " . $_POST['emailAddress'] . "\n\n" .
	"telefon: ".$_POST['phoneNo'] . "\n\n" .
	"optiunea selectata (1 - dansul mirilor, 2- cursuri de dans): " . $_POST['interest'] . "\n\n" .
	"data eveniment: " . $_POST['eventDate'] . "\n\n" .
	"locatia: " . $_POST['eventLocation'] . "\n\n" .
	"mesaj: " . $_POST['message'];
        mail($receiver,$subject,$msg);
?>