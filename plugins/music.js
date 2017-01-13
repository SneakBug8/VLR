var background = document.createElement('audio');
if (MUSIC_LOOP)
{
background.loop="loop"
}

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

function playmusic(name,time) // Background music changer
{
	if (typeof(time)=="integer")
	{
		background.currentTime = time;
	}
	if (dismuss==0)
	{
background.src="music/"+name+".mp3"
background.play()
	}
}
