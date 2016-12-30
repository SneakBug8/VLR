// Настройки
TITLE="Viva la Revolution | Текстовая adventure игра" // Название игры
AUTHOR="[SneakBug8]"
AUTHORLINK="http://www.etrt.ru/"

DESC_TYPING=0 // Медленный вывод описания. 1 - включить, 0 - выключить.
DESC_SPEED=-250 // Скорость вывода описания
END_TYPING=1 // Медленный вывод концовок.
END_SPEED=-50 // Скорость вывода концовок

SAVE_PARAM=0 // 1, если хотите сохранять параметр, переданный в функцию, а не переменную.
SAVE_VAR='chapter' // Какую переменную сохранять

MUSACT=4// Id действия с отключением музыки


dismuss=0 // =1, если хотите отключить музыку
locid=0
actid=0

// Исходный код
var desc
// Функция, выполняемая при окончании загрузки элемента
$(document).ready(function() {

 window.onload = function () {
                var btn = document.getElementById("run"),
                    cd = document.getElementById("code"),
                    chart;
                (btn.onclick = function () {
                    var code = cd.value;
                    if (chart) {
                      chart.clean();
                    }
                    chart = flowchart.parse(code);
                    chart.drawSVG('canvas', {
                      // 'x': 30,
                      // 'y': 50,
                      'line-width': 3,
                      'maxWidth': 3,//ensures the flowcharts fits within a certian width
                      'line-length': 50,
                      'text-margin': 10,
                      'font-size': 14,
                      'font': 'normal',
                      'font-family': 'Helvetica',
                      'font-weight': 'normal',
                      'font-color': 'black',
                      'line-color': 'black',
                      'element-color': 'black',
                      'fill': 'white',
                      'yes-text': 'yes',
                      'no-text': 'no',
                      'arrow-end': 'block',
                      'scale': 1,
                      'symbols': {
                        'start': {
                          'font-color': 'red',
                          'element-color': 'green',
                          'fill': 'yellow'
                        },
                        'end':{
                          'class': 'end-element'
                        }
                      },
                      'flowstate' : {
                        'past' : { 'fill' : '#CCCCCC', 'font-size' : 12},
                        'current' : {'fill' : 'yellow', 'font-color' : 'red', 'font-weight' : 'bold'},
                        'future' : { 'fill' : '#FFFF99'},
                        'request' : { 'fill' : 'blue'},
                        'invalid': {'fill' : '#444444'},
                        'approved' : { 'fill' : '#58C4A3', 'font-size' : 12, 'yes-text' : 'APPROVED', 'no-text' : 'n/a' },
                        'rejected' : { 'fill' : '#C45879', 'font-size' : 12, 'yes-text' : 'n/a', 'no-text' : 'REJECTED' }
                      }
                    });
                    $('[id^=sub1]').click(function(){
                      alert('info here');
                    });
                })();
            };
});

// Смена иллюстрации
function changeBg(pic){
}

// Изменение описания
function changetext(text){
	desc=text
	locid=locid+1
	document.getElementById("code").value=document.getElementById("code").value+"\n"+locid+"=>condition: "+desc
	if (locid==1)
	{
		document.getElementById("code").value=document.getElementById("code").value+"\nst->1"
	}
}

// Вывод концовки
function showend(text){
	end=text
}

// Добавление действия
function addaction(text,func){
	 actid=actid+1
 document.getElementById("code").value=document.getElementById("code").value+"\n"+func+"=>condition: "+text
 document.getElementById("code").value=document.getElementById("code").value+"\n"+locid+"("+actid+')->'+func
 // window[func]()
}

// Удаление действия с номером id
function remaction(id){
}

// Удаление всех действий
function cleardo()
{
	actid=0
}

// Система очков [In development]

function points(num)
{
	window.points=points+num
}


// Сохранения [Disabled]

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

// Музыка

function disablemusic()
{
dismuss=1
background.pause()
remaction(MUSACT)
}

function playmusic()
{}

function enablemusic()
{
dismuss=0
}
