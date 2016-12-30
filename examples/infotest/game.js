$(document).ready(function() {
changeBg("info")
cleardo()
changetext("Пример теста по информатике")
addaction("Начать тест","act")
});

function act()
{
	changetext("В двоичном кодировании для кодировки используют  два значения: 1 и 2.")
	addaction("Верно","act2")
	addaction("Не верно","act1") //T
}

function act1()
{
	points=points+10
	act2()

}

function act2()
{
cleardo()
changetext("Значение 1 — это включено.")
addaction("Верно","act3") //T
addaction("Не верно","act4") 
}

function act3()
{
	points=points+10
	act4()
}

function act4()
{
cleardo()
changetext("Цифры 1 и 2,   хранящиеся в «клетках» памяти компьютера, называются значениями битов.")
addaction("Верно","act6") 
addaction("Не верно","act5") //T
}

function act5()
{
	points=points+10
	act6()
}

function act6()
{
cleardo()
changetext("Перед тобой число в двоичной системе. Выбери, какое это число в десятеричной системе: 1011")
addaction("11","act7") //T
addaction("12","act8")
addaction("7","act8")
addaction("3","act8")
}

function act7()
{
	points=points+30
	act8()
}

function act8()
{
	cleardo()
changetext("На этом и закончился наш маленький тест. Ваш результат - "+points)
}