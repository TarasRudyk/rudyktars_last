<?php
header("Content-Description: File Transfer");
header ('Content-disposition: attachment; filename=TRudyk_DD.pdf');
header ("Content-type: application/octet-stream");
readfile ($file);
?>