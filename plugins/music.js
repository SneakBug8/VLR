var background = document.createElement('audio');
background.loop="loop"

// Музыка

function disablemusic()
{
dismuss=1
background.pause()
remaction(MUSACT)
}

function enablemusic()
{
dismuss=0
}

function playmusic(name) // Background music changer
{
	if (dismuss==0)
	{
background.src="music/"+name+".mp3"
background.play()
	}
}
