<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <link rel="stylesheet" type="text/css" href="../css.css">
</head>
<body>

<?php

header('Content-Type: text/html; charset=utf-8');

session_start();

if(!empty($_POST['name']) and !empty($_POST['message']))
{
		$email_odbiorcy = 'kopysno@kopysno.pl';
		
		$header = 'Reply-To: <'.$_POST['email']."> \r\n"; 
		$header .= "MIME-Version: 1.0 \r\n"; 
		$header .= "Content-Type: text/html; charset=UTF-8"; 
		
		$wiadomosc = "<p>Dostałeś wiadomość od:</p>";
		$wiadomosc .= "<p>Imie i nazwisko: " . $_POST['name'] . "</p>";
		$wiadomosc .= "<p>Kontakt: " . $_POST['email'] . "</p>";
		$wiadomosc .= "<p>Wiadomość: " . $_POST['message'] . "</p>";
		
		$message = '<!doctype html><html lang="pl"><head><meta charset="utf-8">'.$wiadomosc.'</head><body>';

		$subject = 'Wiadomość ze strony...';
		$subject = '=?utf-8?B?'.base64_encode($subject).'?=';
	
		if(mail($email_odbiorcy, $subject, $message, $header)){
			echo '<div class="message success">Wiadomość została wysłana.</div>';
			header("refresh:5;url=http://kopysno.pl/Kontakt.html");
		}else{
			echo '<div class="message error">Wiadomość nie została wysłana. <br>Sprawdź poprawność wprowadzonych informacji</div>';
			header("refresh:5;url=http://kopysno.pl/Kontakt.html");
		}
}
?>
<div id="countdown"></div>

<script>
    var timeleft = 5;
    var downloadTimer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(downloadTimer);
            window.location.href = "http://kopysno.pl/kontakt";
        } else {
            document.getElementById("countdown").innerHTML = "Powrócisz na stronę za: " + timeleft;
        }
        timeleft -= 1;
    }, 1000);
</script>

</body>
</html>