<?php
$link = mysql_connect('localhost', 'srv32984_555pru', 'p12092001');
mysql_set_charset('utf8');
if (!$link) {
    die('Ошибка соединения: ' . mysql_error());
}
$db_selected = mysql_select_db('srv32984_glands', $link);

$query = mysql_query("INSERT INTO `time` (`id`,`time`) VALUES ('".$_GET['id']."','".$_GET['time']."')",$link);
if (!$query) {
    echo('Неверный запрос: ' . mysql_error());
}

echo $query;

mysql_close($link);
?>