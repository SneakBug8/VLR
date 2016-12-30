$(document).ready(function() {
cleardo()
changetext("Index")
addaction("Action1","act")
addaction("Action2","act")
addaction("Action3","act3")
times=0
});

function act()
{
	times=times+1
	if (times==1)
	{ word="раз"}
	else if (times<5)
	{
		word=" раза"
	}
	else
	{
		word=" раз"
	}
	changetext("Вы нажали на кнопку "+times+word+".")
}

function act3()
{
	remaction(2)
}