$(document).ready(function() {
changeBg("revol")
cleardo()
changetext("Index")
addaction("Action1","act")
addaction("Action2","act")
addaction("Action3","act")
times=0
if (dismuss==0)
{
addaction("Выключить музыку","disablemusic")
}
});

function act()
{
	times=times+1
	changetext("Вы нажали на кнопку "+times+" раз.")
}