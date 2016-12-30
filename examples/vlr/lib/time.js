function writetime()
{
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   return xhttp.responseText;
   }
}
id=randomInteger(1,10000)
xhttp.open("GET","lib/writetime.php?id="+id+"&time"+time,false);
xhttp.send();
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}