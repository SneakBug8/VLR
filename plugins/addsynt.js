
function addtext(text){
	text=syncheck(text)
	text=document.getElementById("desc").innerHTML+text
	if (DESC_TYPING==1)
	{
	 $("p.desc").typed({
            strings: [text],
			typeSpeed: DESC_SPEED,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
	}
	else
	{
   $("p.desc").html(text)
	}
}

// Изменение описания
function changetext(text){
	text=syncheck(text)
	if (DESC_TYPING==1)
	{
	 $("p.desc").typed({
            strings: [text],
			typeSpeed: DESC_SPEED,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
	}
	else
	{
   $("p.desc").html(text)
	}
}

// Вывод концовки
function showend(text){
	text=syncheck(text)
	if (DESC_TYPING==1)
	{
	$("div.game").typed({
            strings: [text],
			typeSpeed: END_SPEED,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
        });
	}
	else
	{
   $("div.game").html(text)
	}
}

function syncheck(str)
{
	str=str.replace("[[","<a href='javascript://'")
	str=str.replace("((","onClick='")
	str=str.replace("))","'")
	str=str.replace("|",">")
	str=str.replace("]]","</a>")
	return str;
}