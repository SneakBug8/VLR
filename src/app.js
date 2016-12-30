id=0
time=0

// Исходный код

// Функция, выполняемая при окончании загрузки элемента
$(document).ready(function() {

	$("#author").html('<a id="author "href="'+AUTHORLINK+'">'+AUTHOR+'</a>')
	$('title').text(TITLE);
	if (TIMER==1)
	{
	setInterval(reload, 10000)
	}
});

// Смена иллюстрации
function changeBg(pic){
$('.image').css('background-image', "url('images/"+pic+".jpg')")
}

function addtext(text){
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

// Добавление действия
function addaction(text,func){
	id=id+1
var text=document.getElementById("do").innerHTML+"<li id='act"+id+"'><a href='javascript://' onclick='"+func+"()'>"+text+"</a></li>"
  $("ul.do").html(text)  
}

// Удаление действия с номером id
function remaction(id){
$("#act"+id).remove()
}

// Удаление всех действий
function cleardo()
{
    $("ul.do").html("")
}

// Система очков [In development]

function points(num)
{
	window.points=points+num
}


// Сохранения [WIP]

function load()
{
	stage=Cookies.get('stage');
	console.log(stage)
window[stage]()
}
function save(stage)
{
	if (SAVE_PARAM==1)
	{
		Cookies.set('stage',stage); 
	}
	else
	{
	Cookies.set('stage',window[SAVE_VAR]); 
	}
}

function clear()
{
	Cookies.remove('stage');
}

function reload() // Выполняется каждые 10 секунд
{
	time=time+10 // Запись времени каждые 10 секунд
}
