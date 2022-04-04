<?php

/* https://api.telegram.org/bot5285919179:AAHAK4k7q9JGVCUkx8hMt7fu9hMZwDpNTQk/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "5285919179:AAHAK4k7q9JGVCUkx8hMt7fu9hMZwDpNTQk";
$chat_id = "-778304068";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>