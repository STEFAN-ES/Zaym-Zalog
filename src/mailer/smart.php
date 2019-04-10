<?php 

$user_name 			= $_POST['user_name'];
$user_phone 		= $_POST['user_phone'];
$user_variant 	= $_POST['user_variant'];
$p_user_variant = $_POST['p_user_variant'];

$rooms	= $_POST['rooms'];
$sqr 		= $_POST['sqr'];
$city 	= $_POST['city'];
$town 	= $_POST['town'];
$adres 	= $_POST['adres'];

// main-form




require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'sotnikov.work@yandex.ru';                 // Наш логин
$mail->Password = 'ppdWorkcdm560pro12';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('sotnikov.work@yandex.ru', 'Название сайта');   // От кого письмо 
$mail->addAddress('stefanplay1@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);
$mail->Subject = 'Форма с сайта';                                  // Set email format to HTML
if($_REQUEST['formname'] ==='main-form'){
$mail->Body    = '
	Пользователь оставил свои данные с главной формы: <br> 
	Надобность: ' . $user_variant . ' <br> 
	Телефон: ' . $user_phone . ' <br> 
	Имя: ' . $user_name . '';
}else if($_REQUEST['formname'] ==='form-modal'){
	$mail->Body    = '
	Пользователь оставил свои данные с модального окна: <br> 
	Надобность: ' . $p_user_variant . ' <br> 
	Телефон: ' . $user_phone . ' <br> 
	Имя: ' . $user_name . '';
}else if($_REQUEST['formname'] ==='form-calc'){
	$mail->Body    = '
	Пользователь оставил свои данные с модального окна: <br> 
	Надобность: ' . $p_user_variant . ' <br> 
	Телефон: ' . $user_phone . ' <br> 
	Имя: ' . $user_name . '';
}else if($_REQUEST['formname'] ==='bigform'){
	$mail->Body    = '
	Пользователь оставил свои даные с расширенной формы: <br> 
	Количество комнат: ' . $rooms . ' <br> 
	Площадь:' . $sqr . '<br>
	Телефон: ' . $user_phone . ' <br> 
	Адрес: ' . $adres . ' <br> 
	Город: ' . $city . $town. '';
}
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>