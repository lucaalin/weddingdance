<?php
$receiver="contact@alinluca.com"
	// the message
	$subject = $_POST["firstName"]." ". $_POST["lastName"]." messaged you !";
$msg="Contact Details: Name ".$_POST["firstName"]." ".$_POST["lastName"]."\n".
	"email: ".$_POST["emailAddress"]."\n".
	"phone number: ".$_POST["phoneNo"]."\n".
	"interest: ".$_POST["interest"]."\n".
	"eventDate: ".$_POST["eventDate"]."\n".
	"location: ".$_POST["location"]."\n".
	$_POST["message"]
	// use wordwrap() if lines are longer than 70 characters
	$msg = wordwrap($msg,70);
// send email
mail($receiver,$subject,$msg);
?>