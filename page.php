<?php
//получаем данные пришедшие post
$email=$_POST['email'];
$text=$_POST['text'];
$mess='email: '.$email.'; сообщение: '.$text;//сообщение
$headers  = "Content-type: text/html; charset=utf-8 \r\n";//кодировка 
$headers .= "From: mail@email.ru";//откуда отправлено письмо
//отправляем email админу
@mail('admin@email.ru', 'Форма обратной связи', $mess, $headers);
if(@mail('admin@email.ru', 'Форма обратной связи', $mess, $headers)){
echo '<div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    Сообщение успешно отправлено!'.$email.', '.$text.'
    </div>';
}else{
    echo '<div class="alert alert-danger alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Ошибка !</strong> Сообщение не отправлено!
    </div>';
}
?>