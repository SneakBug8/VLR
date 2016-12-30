var background = document.createElement('audio');
background.loop="loop"

function playmusic(name) // Background music changer
{
	if (dismuss==0)
	{
background.src="music/"+name+".mp3"
background.play()
	}
}

if (Cookies.get('settings_sound')=="1")
{
function playmusic (name) {}
}
