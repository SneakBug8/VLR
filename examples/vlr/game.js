$(document).ready(function() {
changeBg("revol")
cleardo()
changetext("Добро пожаловать в Viva la Revolution!")
addaction("Начать игру","start")
addaction("Об игре","about")
addaction("Сайт автора","site")
playmusic("bloodonwhite",30)
if (dismuss==0)
{
addaction("Выключить музыку","disablemusic")
}
setInterval(stats, 10000)
});

time=0
nolead=0


function stats()
{
    time=time+10
}
var mlist;
var chapter;

function site()
{
    window.location = "http://www.etrt.ru/blog";
}

function about()
{
    window.location = "http://www.etrt.ru/blog/kril2016";
}

function start()
{
    playmusic("petersberg")
chapter=1
var text="<i>Теперь октябрь не тот, <br>\
Не тот октябрь теперь.<br>\
В стране, где свищет непогода,<br>\
Ревел и выл<br>\
Октябрь, как зверь,<br>\
Октябрь семнадцатого года.<br>\
Я помню жуткий<br>\
Снежный день.<br>\
Его я видел мутным взглядом.<br>\
Железная витала тень<br>\
Над омрачённым Петроградом.</i>\
<br> - Сергей Есенин";
changetext(text)
changeBg("esenyn")
cleardo()
addaction("Далее","part1")
}
function part1()
{
    changeBg("kon")
text="Россия погрузилась в хаос революции. Партии открыто снаряжают вооруженные отряды, гуляющие по улицам. Власти не могут ничего поделать с ситуацией и судьба всей Империи завязалась на жизни одного студента, о котором и пойдет речь. Жизни одного из тех, кого называют 'бурной молодежью', они часто сами не знают на какой они стороне, но при этом уже вступают в самые различные революционные кружки и организации."
changetext(text)
cleardo()
addaction("Далее","part2")
}
function part2()
{
    changeBg("rev1")
    text="Имея такой набор качеств, он быстро поднялся по ступеням РСДРП, став одним из лучших исполнителей поручений глав революции. Завтра же его ждала первая крупная операция по устранению Великого Князя, которая могла обернуться для него абсолютно неожиданным образом."
changetext(text)
cleardo()
addaction("Далее","part3")
}
function part3()
{
changeBg("sobr")
var text="Собрание революционеров было в самом разгаре. Небольшая квартира-штаб на Моховой была полна людей. \
Сегодня все были чрезвычайно напряжены, ведь завтра их ждала великая операция. \
А больше всех напряжен был наш герой, ведь именно ему предстояло совершить сие преступление.<br>\
- О чем задумался?";
changetext(text)
cleardo()
addaction("- Думаю о завтрашней операции","part4")
addaction("- Просто немного нехорошо","part5")
}
function part4()
{
    changetext("- Тебя что-то в ней беспокоит? Скажи, ведь от этого зависит вся революция, товарищ.")
    cleardo()
    addaction("- Да нет, ничего","part6")
    addaction("- Что если я провалю операцию?","part7")
}
function part5()
{
    changetext("- Я думаю, что ты знаешь все, что от тебя ждут завтра. Можешь отправляться домой, если хочешь.")
    cleardo()
    addaction("- Да нет, я пожалуй останусь, революция важнее","part6")
    addaction("- Да, пожалуй я лучше пойду","part15")
}
function part6()
{
    text="Из-за длинного стола, где сидели такие великие люди, как Троцкий и Ленин, встал Владимир Ильич.\
    Он начал свою торжественную речь о завтрашнем деле и том, что ждет нас в случае победы."   
changetext(text)
changeBg("lenin")
cleardo()
addaction("Далее","part9")
}
function part7()
{
    cleardo()
    text="- Не бойся, это не означает провал революции, ни в коем случае. Хотя нам придется попотеть, чтобы создать еще одну подобную возможность для уничтожения Великого Князя."
    changetext(text)
    addaction("- Хорошо","part6")
}
function part9()
{
    cleardo();
    text="- Мы не утописты.<br> Мы знаем, что любой чернорабочий и любая кухарка не способны сейчас же вступить в управление государством. \
В этом мы согласны и с кадетами, и с Брешковской, и с Церетели."
    changetext(text)
    addaction("Далее","part9_1")
}
function part9_1()
{
    cleardo()
    text="Но мы отличаемся от этих граждан тем, что требуем немедленного разрыва с тем предрассудком, \
будто управлять государством, нести будничную, ежедневную работу управления в состоянии только богатые или из богатых семей взятые чиновники. \
Мы требуем, чтобы обучение делу государственного управления велось сознательными рабочими и солдатами и чтобы начато было оно немедленно, \
т. е. к обучению этому немедленно начали привлекать всех трудящихся, всю бедноту."
    changetext(text)
addaction("Далее","part10")
}
function part10()
{
    text="- И поэтому завтра мы устраним Великого Князя Михаила Романова! Ур-ра комунизму! Ур-ра революции!"
    changetext(text)
    cleardo()
    addaction("- Мне хотелось бы задать пару вопросов.","part11")
   addaction("Отправиться домой","part15")
}
function part11()
{
    text="- Какие у тебя есть вопросы?"
    changetext(text)
    cleardo()
    addaction("- Сколько людей будет на балу?","part12")
    addaction("- Как лучше всего устранить Князя?","part13")
    
}
function part12()
{
    text="- Очень много, почти весь высший свет Петербурга."
    changetext(text)
    cleardo()
    window.bal=1
    if (window.knyaz!=1){addaction("- Как лучше всего устранить Князя?","part13")}
    addaction("Отправиться домой","part15")
    
}
function part13()
{
    text="- Лучше всего - сделать это тихо и незаметно, но и громкий вариант подойдет"
    changetext(text)
    cleardo()
    window.knyaz=1
    if (window.bal!=1) {addaction("- Сколько людей будет на балу?","part12")}
    addaction("Отправиться домой","part15")
}

function part15()
{
    text="Наш герой отправился домой в приподнятом настроении. Все сулило хорошие выгоды революции, а завтрашняя операция не обещала быть сложной."
    changetext(text)
    cleardo()
    addaction("Далее","part16")
}

function part16()
{
    text="<i>Утро. 27 октября 1917 года.</i>"
    changetext(text)
    cleardo()
    changeBg("kvart")
    // addaction("Прогуляться по Петрограду","go1") // Распутин
    addaction("Подождать вечера","part18")
}

function part17 ()
{
    // Поход за оружием
}

function part18()
{
text="<i>Вечер. 27 октября 1917 года.</i><br>Вам пора на бал."
changetext(text)
cleardo()
addaction("Нанять извозчика","part19")
addaction("Отправиться пешком","part22")
}

function part19()
{
text="Извозчик довез вас до Университетской, где будет бал. Стоит ли оставить извозчика ожидать вас?"
changetext(text)
changeBg("izvoz")
cleardo()
addaction("Оставить извозчика ждать вас.","part20")
addaction("Отпустить извозчика.","part21")
}

function part20()
{
window.izvoz=1
part22()
}

function part21()
{
part22()
}

function part22()
{

    playmusic("waltz")
    changeBg("bal")
    cleardo()
    // ToDO: написать описание бала
text="<i>Около 10 вечера. 27 октября 1917 года</i>. Бал в доме Графини Воронцовой."
changetext(text)
addaction("Отправиться выпить","part23")
addaction("Потанцевать с дамами.","part24")
}

function part23()
{
// Выпивка
cleardo()
    // ToDO: найти подходящую картинку
text="Наш герой отправился в небольшой 'бар', в основном тут собрались старые люди, для которых танцы уже закончились."
changetext(text)
addaction("Выпить","drink")
addaction("Отправиться на танцы","part24")
}
var drunk=0
function drink()
{
drunk=drunk+1
ph=""
switch (drunk) {
case 1: ph="Еще одну?"; break
case 2: ph="Ну что? Еще?"; break
case 3: ph="СКОЛЬКО МОЖНО ПИТЬ!?"; break
}
 text=document.getElementById("desc").innerHTML+"<br>"+ph
    changetext(text)
if (drunk==3)
{
    text="Похоже, что Князь отошел в туалетную комнату. Может стоит проследить за ним?"
    changetext(text)
    addaction("Отправиться за Князем","toilet")
}
}
function toilet()
{
cleardo()
changeBg("bathroom")
text = "Пьяной походкой вы доходите до туалета. Прекрасное место для убийства Князя. Просто волшебное."
changetext(text)
addaction("Стрелять в князя","shoot")
}

function shoot()
{
cleardo()
text ="Дрожащими руками вы достаете револьвер, наводите на Князя, стоящего у дорогой раковины... Выстрел. Зеркало разбито. Князь резко оборачивается и идет к вам."
changetext(text)
addaction("Выстрелить еще раз","shoot2")
}

function shoot2()
{
cleardo()
changeBg("trup")
text ="Вы стреляете еще раз. Зеркало сзади обагряется кровью. Ослабевшее тело Князя падает наземь. Кровь медленно растекается по полу. Снаружи слышится топот ног. Пора спасаться."
changetext(text)
addaction("Осмотреть туалеты","watchtoil")
addaction("Пробиваться с боем","boy")
}

function boy()
{
    cleardo()
    text="Хоть вы и успели ранить нескольких человек на балу, но были схвачены и публично повешены на следующий день."
    changetext(text)
    addaction("Начать заного","lose")
}

function watchtoil()
{
cleardo()
text ="Осмотрев туалеты, вы замечаете небольшое окошко под потолком."
changetext(text)
addaction("Попытаться выбраться через окно","windowtoil")
addaction("Пробиваться с боем","boy")
}

function windowtoil()
{
changeBg("night")
cleardo()
window.rana=1
text="Разбив окно, вы вылезаете наружу, но режетесь об обломки стекла. Что же вы будете делать дальше?"
changetext(text)
addaction("Отправиться домой","part45")
}
function part24()
{
    cleardo()
    // Приглашение на танец
text="Оглядываясь, вы замечаете немолодого офицера и молоденькую красавицу, видимо дочь. Они о чем-то разговаривают."
changetext(text)
addaction("Пригласить даму на танец.","part26")
}
function part26()
{
    cleardo()
text="Вы подошли к паре и попросили дочь офицера на танец, в чем он вам не отказал. И вы вскружились по залу в мазурке, краем глаза заметив танцующих Великого Князя и княгиню."
changetext(text)
addaction("Продолжить танец","dance")
addaction("Приблизиться к Великому Князю","part27")
}

function dance()
{
text="Вы продолжаете кружиться по залу в танце, но, увы, нельзя заниматься этим вечно."
changetext(text)
}
function part27()
{
cleardo()
text="Вы осторожно приближаетесь к своей цели. Вот, Князь стоит в нескольких шагах... Что же он будет делать!?"
changetext(text)
addaction("Достать револьвер и выстрелить","part28")
addaction("Продолжить танец","part27")
}

function part28()
{
changeBg("panic")
cleardo()
text="С громким хлопком пуля вылетела из револьвера. Не ожидавший подобного Михаил был сражен, ноги его подкосились, лицо изобразило подобие великого ужаса, Княгиня закричала, в зале началась паника. Отец девушки, с которой вы только что танцевали, ринулся к вам, достав парадную шашку, не приспособленную для реальных сражений."
changetext(text)
addaction("Бежать к выходу","part29")
}

function part29()
{
cleardo()
text="Сквозь толпу Главный герой протискивается к выходу, но немолодой офицер оказался быстрым малым и нагонял его."
changetext(text)
addaction("Развернуться и выстрелить","part30")
addaction("Продолжить бег","part31")
}

function part30()
{
cleardo()
text="Офицер скрючился, больше никто не мог помешать революционеру покинуть бал."
changetext(text)
if (window.izvoz==1){addaction("Сесть в конку и уехать","part45")}
addaction("Бежать отсюда.","part33")
}

function part31()
{
cleardo()
text="Вы чувствуете глухой удар по своей голове. Ваши ноги подкашиваются, глаза слипаются. Вы падаете наземь. Кто-то связывает вас платком.<br> "
changetext(text)
addaction("Начать заново","lose")
}

function lose()
{
window.location=document.location.href
}


function part33()
{
cleardo()
text="Сзади начинается пальба. Главного героя задевает пулей, но раненый он скрывается во дворах."
window.rana=2
changetext(text)
addaction("Далее","part45")
}


function part45()
{
    cleardo()
    text="Наконец-то вы дома. Переосмысливая произошедшее, вы можете подумать, что это открытое объявление войне Монархии. Так и есть, ведь ее век отжил свое и всем пора смириться с этим."
    changetext(text)
    changeBg("kvart")
    addaction("Лечь спать","part46")
}

function part46()
{
    cleardo()
    text="<i>Утро. 29 октября 1917 года.</i><br>На улице уже светло и вам пора на собрание революционеров, где товарищ Ленин озвучит новые шаги революции."
    changetext(text)
    addaction("Отправиться на Моховую.","part47")
}
function part47()
{
    playmusic("bloodonwhite")
    cleardo()
    chapter=3
    text="Уже на подъезде вы замечаете полыхающий дом. Вы останавливаете конку на расстоянии от дома и краем глаза замечаете Троцкого, стоящего неподалеку."
    changetext(text)
    changeBg("fire")
    addaction("Броситься в горящий дом","part48")
    addaction("Направиться к Троцкому","part52")
}
function part48()
{
    cleardo()
    text="Вы забегаете в объятый пламенем дом и замечаете товарища Ленина, задавленного тяжелейшей балкой."
    changetext(text)
    addaction("Рвануть к Владимиру Ильичу","part49")
    addaction("Выбежать из горящего дома","part51")
}

function part49()
{
    cleardo()
    text="Вы подбегаете к умирающему революционеру."
    changetext(text)
    addaction("- Не умирайте, я вас спасу!","part50")
}

function part50()
{
    cleardo()
    text="- У-уже слиишком поздно.<br>З-закончи мое дело, уничтожь революцию и ее прихвостней!<br>Вместе с этими словами скончался глава революции, его место займет Троцкий."
    changetext(text)
    addaction("Выбежать из горящего дома","part51")
}
function part51()
{
    text="Троцкий стоял на противоположной стороне улицы, нервно озираясь по сторонам."
    changeBg("trock")
    changetext(text)
    cleardo()
    addaction("Направиться к Троцкому","part52")
    addaction("Уехать (предательство революции)","part54")
}

function part52()
{
    text="Замечая вас, Троцкий снимает шляпу.<br>- Наипечальнейшее известие, что товарищ Ленин остался там, верно?"
    cleardo()
changeBg("trock")
    changetext(text)
    addaction("Не без вашей ли помощи?","part53")
}

function part53()
{
    text="- Да за кого вы меня принимаете!? Мы были сердечными друзьями с Владимиром!"
    cleardo()
    changetext(text)
    addaction("Уехать","part55")
    addaction("Обвинить Троцкого в предательстве","part54")
}

function part54()
{
    cleardo()
    window.nolead=1
    text="- Да пошел ты знаешь куда, пес!?<br>Троцкий демонстративно развернулся и ушел."
    changetext(text)
    addaction("Уехать","part55")
}
function part55()
{
    chapter=4
    cleardo()
    changeBg("gazeta")
    text="Из газеты вы узнаете, что Царь собирается в поездку в Первопрестольную. Согласно газетам он отправится на вокзал, а оттуда поездом до Москвы, где его встретят лично Победоносцев и Юсупов."
    changetext(text)
    addaction("Далее","part56")
}

function part56()
{
    cleardo()
    
 text="Необходимо узнать о планах Царя на завтрашний день и устранить его."
 changetext(text)
 addaction("Попробовать подкупить камергера","part57")
addaction("Наладить связи с Княгиней","part58")
}

function part57()
{
    cleardo()
    changeBg("kamer")
    text="Вы встретились с царским камергером в темном переулке.<br>- Кхем, довольно странное предложение продать маршрутный лист Царя... Но я думаю, что мы сможем договориться."
    changetext(text)
addaction("Заплатить из своего кармана","part60")
}
function part58()
{
    cleardo()
    changeBg("knyag2")
text="Вы встретились с Княгиней в дорогом ресторане на Невском проспекте. Вскоре выяснилось, что все, чего желает княгиня, так это выслушивания ее долгих, нудных монологов...<br>- ... В наше время не то, что ныне, все было по чести, а сейчас, ээх, не та Россия стала. Слышали? Корнилов метит на роль главнокомандующего, пока наши офицеры браво сражаются на фронте. Кстати, Вы слышали о завтрашней поездке Царя?"
addaction("- Да, и я хотел бы сопроводить вас в ней.","part59")
changetext(text)
}

function part59()
{
    text="- Ох, прекрасно. Тогда приезжайте завтра к 9 утра к Зимнему Дворцу. Я буду ждать."
    changetext(text)
    cleardo()
    addaction("Отправиться домой","part61")
}
function part60()
{
    cleardo()
    window.method=1
    text="Камергер осторожно пересчитывает бумажки и передает вам лист бумаги, попутно пряча ассигнации в карманы."
changetext(text)
    addaction("Отправиться прямиком домой (быстро)","part61")
    addaction("Отправиться домой (гуляючи)","go1")
}

function go1()
{
    cleardo()
    text="Прохаживаясь по улицам Петрограда, вы замечаете большую толпу у здания Думы. Может посмотреть что там такое?"
    changetext(text)
    addaction("Подойти к Думе","go2")
    addaction("Отправиться домой","part61")
}

function go2()
{
    cleardo()
    text="Подойдя поближе, вы замечаете, что все здание оцеплено жандармами. Кое-где стоят бронемашины. Все внимание обращено к окнам, где то и дело мелькают черные силуэты. Осматривая жандармов, ваш глаз цепляется за человека в генеральской униформе, рассмотрев его получше, вы узнаете в нем Лавра Корнилова."
    changetext(text)
    addaction("Направиться к Корнилову","go3")
    addaction("Уйти","go1")
}
function go2_1()
{
    text="Вам остановил один из жандармов.<br>- Стой, что надо?<br>Корнилов, обернувшись на крик, сделал жест рукой и вас пропустили."
}
function go3()
{
    changeBg("kornilov")
    cleardo()
    text="Корнилов был закаленным в боях и умным генералом, который метил в главнокомандующего, но пока не удостоился этой должности. Выглядел он несколько старше своих реальных лет.<br>- Я вас слушаю."
    changetext(text)
    addaction("- Что здесь происходит?","go4")
}

function go4()
{
    cleardo()
    text="- Черная гвардия захватила Думу и всех депутатов. Если мы подойдем ближе, то они начнут расстрел заложников."
    changetext(text)
    addaction("- Что вы намерены делать?","go5")
}

function go5()
{
    cleardo()
    text="- Сказать честно, не знаю. Анархисты способны на все угодно, а я не могу жертвовать Думой ради нескольких лидеров Черногвардейцев.<br>- А ты кто такой вообще будешь"
    changetext(text)
        addaction("- Не важно. (уйти)","part61")
}

function go12()
{
    cleardo()
    text='Смеркалось. Стоило ли продолжать прогулку?'
    changetext(text)
    addaction("Продолжить прогулку","go20")
    addaction("Отправиться домой","part61")
}

function go20()
{
    cleardo()
    text='Вы проходили мимо очередного ресторана, как к вам обратился прилично выглядящий старик в строгом черном костюме и цилиндре.<br>- Мистер, Не желаете ль вступить в ряды вы Англицкого Клоба?'
    changetext(text)
    addaction("- Извините, не сейчас","go20")
    addaction("- В эту шайку сумасбродных стариков?","go21")
}

function go12()
{
    cleardo()
    text='Совсем стемнело. Героя клонило в сон. Обстоятельства принуждали закончить променад.'
    changetext(text)
    addaction("Отправиться домой","part61")
}

function go21()
{
    cleardo()
    text='- Ах! Постоять за честь Англицкого Клоба обязанность имею! И не писан мне закон, честь превыше страха. Стреляться будем! Сей же час! Зовите секунданта!<br>Несколько друзей старика взяли вас под руку и с ними вы дошли до темного двора. Никого не было видно кроме вас. Достали из саквояжа револьверы, один вручили вам. Один из "англичан" оказался вашим секундантом:<br>- По предписанию обязан я спросить в последний раз, не намерены ли уладить конфликт вы миром?'
    changetext(text)
    addaction("- Готов стреляться я сейчас!","go22")
}

function go21()
{
    cleardo()
    text='- Хорошо.<br>Оба дуэлянта отошли на знаменитые 20 шагов.'
    changetext(text)
    addaction("- Готов стреляться я сейчас!","go22")
}

function part61()
{
    cleardo()
    changeBg("kvart")
    text=""
changetext(text)
    addaction("Спать до утра","part65")
}

// Убийство Витте. 

function part65()
{
cleardo()
changeBg("kareta")
    if (window.method==1)
    {
        text="Вы просыпаетесь, и в приподнятом настроении отправляетесь к Зимнему Дворцу. Это было не так сложно, как казалось. Ровно в срок карета отъезжает от Зимнего Дворца."
    }
    else
    {
        text="Просыпаясь, вы смотрите на часы. Опоздали, черт. Вы выбегаете из дома и прибываете к Зимнему Дворцу, когда карета только тронулась от дверей."
    }
    changetext(text)
    addaction("Закинуть бомбу в окно кареты","part66")
}

function part66()
{
    cleardo()
    changeBg("vzriv")
    text="Метко брошенный снаряд разбивает окно кареты и залетает внутрь. Раздается взрыв, карета падает на бок. Оторвавшиеся кони с диким ржением убегают вперед по улице."
    changetext(text)
    addaction("Осмотреть карету","part67")
    addaction("Уйти","part69")
}

function part67()
{
window.mlist=0
cleardo()
    text="Внутри кареты вы обнаруживаете бездыханные и искореженные трупы Витте и Княгини."
    changetext(text)
    addaction("Осмотреть труп Витте","part68")
 addaction("Уйти","part69")
}

function part68()
{
cleardo()
    text="В кармане мертвого министра экономики вы находите маршрутный лист Царя на завтрашний день."
changetext(text)
addaction("Уйти","part69")
    window.mlist=1
}

function part69()
{
playmusic("society")
cleardo()
    if (window.nolead==1)
{
text="Вы проснулись от стука в дверь. К вам пришел Троцкий, ведь во имя революции можно забыть личные обиды.<br>- Думаю, что для тебя не секрет, что наша конечная цель - смерть Царя. Я хочу, чтобы это сделал ты. Есть предложения как это осуществить?"
}
else if (mlist!=1)
{
            text="Вы проснулись от стука в дверь. К вам пришел Троцкий, с собой он принес маршрутный лист Царя.<br>- Мои люди добыли важные сведения, я хотел бы, чтобы ты устранил Царя. Есть предложения как это сделать?"
    }
else
{
text="Вы проснулись от стука в дверь. К вам пришел Троцкий.<br>- Я хотел бы, чтобы ты устранил Царя. Есть предложения как это сделать?"
}
changetext(text)
changeBg("trock")
        addaction("- Может быть в карете?","part70")
        addaction("- Расстрелять во дворце?","part71")
        addaction("- Подорвать поезд?","part72")
}

function end1()
{
text="Главы революции погибли, наш Герой не смог ничего сделать, восстание Троцкого было успешно подавлено.<br><h2>White win</h2>"
changetext(text)
addaction("Начать заново","lose")
writetime()
}

function part70()
{
    text="- Для Царя не составит труда взять лишних карет, дабы сбить тебя с толку. Шансы удачного убийства близки к нулю."
    changetext(text)
    cleardo()
    addaction("Сменить вариант","part69")
}

function part71()
{
    text="- Ворваться в дворец Царя после убийства Витте и Великой Княжны? Тебя бомбой не задело случаем?"
    changetext(text)
    cleardo()
    addaction("Сменить вариант","part69")
}

function part72()
{
    text="- Тогда тебе следует проверить вокзал."
    changetext(text)
    cleardo()
    addaction("Отправиться на вокзал","part721")
}

function part721()
{
cleardo()
text="Уже издалека вы замечаете, что вокзал наполнен жандармами. Лучше туда не соваться. Вдруг через толпу к вам пробирается человек, не похожий на жандарма."
changetext(text)
addaction("Поговорить с человеком","d1")
addaction("Вернуться и сообщить Троцкому","part722")
}

function d1()
{
    cleardo()
    text="- Стой, мальчишка. Я от Лавра Георгиевича. Мы знаем с кем ты работаешь, но не намерены тебя арестовывать, потому что ты можешь нам пригодиться. Сотрудничай с нами и Корнилов замнет твои грехи перед государством. Ну, что скажешь?"
    changetext(text)
    changeBg("mug1")
    addaction("Согласиться","d2")
    addaction("Отказаться","d3")
}
function d2()
{
    cleardo()
window.bel=1
text="- Я рад, что мы нашли общий язык. Все, что нам от тебя требуется, так это устранение Троцкого. Я уверен, что ты сможешь это сделать без особых проблем. После этого с тобой свяжутся."
changetext(text)
addaction("Уйти","part722")
}

function d3()
{
    cleardo()
window.vstbel=1
text="- Тогда мне придется вас арестовать."
changetext(text)
addaction("Убежать","d4")
}

function d4()
{
    cleardo()
    text="- Стой, дурак!<br>Сзади раздалось несколько выстрелов, но все мимо. Вы скрылись в одном из переулков."
    changetext(text)
    addaction("Идти к Троцкому","ot1")
}

function part722()
{
    changeBg('troc')
cleardo()
text="Вы возвращаетесь к себе на квартиру, где обнаруживаете Троцкого за газетой, сообщаете ему о новостях с вокзала.<br>- Говоришь, что вокзал наполнен жандармами? Тогда остается один вариант, взорвать поезд уже после отправления, то есть на пути в Москву."
changetext(text)
addaction("Взять бомбу и отправиться к путям","part724")
}

function part724()
{ 
    changeBg('jd')
text="Вы подъезжаете к железнодорожным путям, однако понимаете, что между вами и поездом Царя может проехать другой поезд и тогда жертвы будут не оправданы. Придется взрывать бомбу самому. Вы протягиваете бикфордов шнур и прячетесь в кустах. Остается только ждать"
changetext(text)
cleardo()
addaction("Ждать","part724_1")
addaction("Не убивать царя","part750")
}
function part724_1()
{
    playmusic("charge") 
text="Вы оказались правы. Перед вами проезжает гражданский поезд и вы замечаете еще поезд вдалеке. Когда он подъехал ближе, вы поняли, что это поезд Царя."
changetext(text)
    cleardo()
addaction("Зажечь шнур","part725")
addaction("Не убивать царя","part750")
}
function part725()
{
    changeBg("poezd")
text="Вы спешно зажгли шнур, однако несколько прогадали и центр взрыва пришелся не на парадный вагон. Поезд слетел с рельс и, упавши набок, улетел в пролесок. Кое-где начинает разгораться пламя."
changetext(text)
cleardo()
addaction("Осмотреть парадный вагон","part726")
}

function part726()
{
    changeBg("tsar")
text="Запахло дымом, но вы бесстрашно залезаете в покореженный вагон и обнаруживаете раненого Царя посреди трупов.<br>- Ах, вот он, мой убийца. Я уж думал, что ты сбежал"
changetext(text)
cleardo()
addaction("- Это было нужно для революции","part727")
addaction("- Заткнись, ублюдок! (пристрелить Царя)","part733")
}

function part727()
{
text="- Хех. Времени у меня немного, но давай все же раскинем мозгами. Все равно я никуда не убегу, верно? Убив меня, ты поставишь страну на грань катастрофы. Разгорится Гражданская война, она пройдет через леса и поля, сжигая каждую деревню на своем пути. Да, рано или поздно Белые генералы потерпят поражение, так как не смогут объединиться. Но и Троцкий даже не догадывается, что не он один претендует на кровавый престол. А внешние враги?"
changetext(text)
cleardo()
addaction("- А что внешние враги?","part728")
addaction("- Идеальный момент для нападения...", "part729")
}

function part728()
{
window.l730=0
window.l731=0
text="- Кхе-кхе, а я не думал, что ты так глуп. Для них это прекрасная возможность без особого труда захватить страну. Уничтожить все, что создавали поколения русских людей."
changetext(text)
cleardo()
addaction("- Что по поводу императрицы?","part730")
addaction("- Кто поджег квартиру и убил Ленина?","part731")
if (l731==1 && l730==1)
    {
    addaction("Уйти","part732")
    addaction("Застрелить Царя","part733")
    }
}
function part729()
{
    cleardo()
text="- А ты не так глуп, как казалось. Именно. Уничтожат все, что создавали целые поколения русских людей."
changetext(text)
addaction("- Что по поводу императрицы?","part730")
addaction("- Кто поджег квартиру и убил Ленина?","part731")
if (l731==1 && l730==1)
    {
    addaction("Уйти","part732")
    addaction("Застрелить Царя","part733")
    }
}

function part730()
{
    window.l730=1
    cleardo()
    text="- Оо, Алиса ни за что не согласится взять власть в свои руки, можешь о ней не беспокоиться."
changetext(text)
    addaction("- Кто поджег квартиру и убил Ленина?","part731")
if (l731==1 && l730==1)
    {
    addaction("Уйти","part732")
    addaction("Застрелить Царя","part733")
    }

}
function part731()
{
    window.l731=1
    cleardo()
    text="- Ты не один задаешься этим вопросом, друг мой, но могу сказать абсолютно точно, что ни жандармерия, ни охранное отделение тут ни причем."
changetext(text)
    addaction("- Что по поводу императрицы?","part730")
if (l731==1 && l730==1)
    {
    addaction("Уйти","part732")
    addaction("Застрелить Царя","part733")
    }
}
function part732()
{
    playmusic("general")
    changeBg("poezd")
    cleardo()
    text="<br><h2>Red win</h2><br>Вы уходите, оставляя Царя истекать кровью. В такой глуши никто его не найдет. <br><i>Сильнейшее душевное потрясение изменило нашего героя. После убийства Царя его никто не видел, но говорят, что он поселился в одном из лесов Нижегородской губернии, волоча там свои оставшиеся годы. Царь погиб, революция свершилась, но монархисты все еще были сильны, поэтому началась Гражданская война, потрясшая всю страну и мир. Обе стороны были одинаково жестоки друг к другу, миллионы смертей, многие из которых были беспричинными.<i>"
   showend(text)
   writetime()
}
function part733()
{
    playmusic("general")
    cleardo()
    changeBg("killtsar")
    text="<br><h2>Red win</h2><br>Вы достаете револьвер и стреляете в Царя, оканчивая его славное правление и жизнь. Выждав несколько секунд, вы уходите. <br> <i>Сильнейшее душевное потрясение изменило нашего героя. После убийства Царя его никто не видел, но говорят, что он поселился в одном из лесов Нижегородской губернии, волоча там свои оставшиеся годы. Царь погиб, революция свершилась, но монархисты все еще были сильны, поэтому началась Гражданская война, потрясшая всю страну и мир. Обе стороны были одинакого жестоки друг к другу, миллионы смертей, многие из которых были беспричинными.<i>"
    showend(text)
    writetime()
}

function part750()
{
    cleardo()
    text="Одумавшись, вы даете поезду Царя проехать. Но Троцкий не оставит попыток устранить Императора. Если не убрать его, то Царь рано или поздно будет убит."
    changetext(text)
    addaction("Вернуться к себе в квартиру","part751")
}
function part751()
{
    window.withweap=0
    changeBg("lest")
    cleardo()
    text="Вы поднимаетесь по лестнице, останавливаясь у двери в свою квартиру."
    changetext(text)
    addaction("Достать револьвер и войти","part751_1")
    addaction("Войти без оружия","part751_2")
}

function part751_1()
{
window.withweap=1
part751_2()
}

function part751_2()
{
    if (nolead==1)
    part752()
    else {
        part753()
    }
}
function part752()
{
    playmusic("general")
    cleardo()
    text="Вы открываете дверь и заходите в квартиру, краем глаза замечая Троцкого с вытянутой рукой.Раздался громкий хлопок. Вашу грудь пронзила резкая боль, и вы почувствовали, как горячий металл обжигает ваше тело. Внезапный и мощный толчок отбросил вас на пол. Из свежей раны засочилась кровь, вместе с которой, секунда за секундой, вас покидает жизнь. С каждым мгновением мир вокруг делается всё темнее и темнее. Не в силах сопротивляться навалившейся тяжести, ваши глаза закрываются, вы падаете на землю. В последние секунды своей жизни вы слышите глухие слова Троцкого:<br>- Революция благодарна тебе за выполненное дело, но личные обиды не прощают.<br>Впоследствии Троцкий был вынужден эмигрировать в Мексику, где был убит одним из его соратников. Страна осталась без своих благодетелей, но нашлись и новые деятели, не столь радикальные. Совместно с Императором они провели либеральные реформы и Россия стала конституционной монархией, силе и единству которой завидовал весь свет."
    
    showend(text)
    writetime()
}
function part753()
{
    cleardo()
    text="Вы заходите в квартиру, обнаруживая Троцкого сидящим за газетой в вашем кресле.<br>- Ну как там Царь?"
    changetext(text)
    if (withweap==1)
    {
        addaction("Застрелить Троцкого","part753_1")
    }
    addaction("- Все хорошо. Он мертв.","part754")
    if (withweap==0)
    {
    addaction("Достать револьвер","part755")
    }
}
function part753_1()
{
    playmusic("charge")
    text="Вы делаете несколько выстрелов в ничего не подозревающего Троцкого. Кровь анархиста навечно испортила ваше любимое кресло, но это ничего. Царь спасен, Россия спасена. Страна осталась без своих благодетелей, но нашлись и новые деятели, не столь радикальные. Совместно с Императором они провели либеральные реформы и Россия стала конституционной монархией, силе и единству которой завидовал весь свет. Главный Герой так и не смог найти себе место после убийства Витте и эмигрировал в Францию, где прожил остаток своих дней, выискивая русских социалистов."
    if (bel==1)
    {
        text="Вы делаете несколько выстрелов в ничего не подозревающего Троцкого. Кровь анархиста навечно испортила ваше любимое кресло, но это ничего. Царь спасен, Россия спасена. Страна осталась без своих благодетелей, но нашлись и новые деятели, не столь радикальные. Совместно с Императором они провели либеральные реформы и Россия стала конституционной монархией, силе и единству которой завидовал весь свет. Корнилов сдержал обещание, данное нашему герою, и умял дело Витте, а также обеспечил работой в жандармерии Петрограда."
    }
    showend(text)
    writetime()
}
function part754()
{
cleardo()
    text="- Отлично."
    changetext(text)
       if (withweap==0)
    {
    addaction("Достать револьвер","part755")
    }
     if (withweap==1)
    {
        addaction("Застрелить Троцкого","part753_1")
    }
}
function part755()
{
     playmusic("charge")
    cleardo()
    text="- Чего молчишь?<br>Троцкий убрал газету и обернулся. Увидев, как вы достаете револьвер, он резко вскочил и рванул в открытое окно, приземлившись на крышу ларька под вашим окном."
    changetext(text)
    addaction("Подбежать к окну и выстрелить несколько раз","part756")
    addaction("Побежать вниз по лестнице","part757")
}

function part756()
{
     playmusic("charge")
text="Герой подбежал к открытому окну и выстрелил несколько раз в убегающего анархиста, но промахнулся. Впоследствии Троцкий был вынужден эмигрировать в Мексику, где был убит одним из его соратников. Страна осталась без своих благодетелей, но нашлись и новые деятели, не столь радикальные. Совместно с Императором они провели либеральные реформы и Россия стала конституционной монархией, силе и единству которой завидовал весь свет.<br>Главный герой был посажен в Бухарскую тюрьму, где познакомился с Корниловым, а позже сбежал в охваченный войной Китай, где сражался против захватчиков."
  if (bel==1)
    {
        text="Герой подбежал к открытому окну и выстрелил несколько раз в убегающего анархиста, но промахнулся. Впоследствии Троцкий был вынужден эмигрировать в Мексику, где был убит одним из его соратников. Страна осталась без своих благодетелей, но нашлись и новые деятели, не столь радикальные. Совместно с Императором они провели либеральные реформы и Россия стала конституционной монархией, силе и единству которой завидовал весь свет.<br>Главный герой был посажен в Бухарскую тюрьму, где снова встретился с Корниловым, а позже вместе с ним сбежал в охваченный войной Китай, где сражался против иноземных захватчиков."
    }
showend(text)
writetime()
}

function part757()
{
     playmusic("charge")
    cleardo()
text="Когда вы вышли из парадной, то от анархиста уже и след простыл. Искать этого засранца бесполезно, а завтра он уже уедет из города. Впоследствии Троцкий был вынужден эмигрировать в Мексику, где был убит одним из его соратников. Страна осталась без своих благодетелей, но нашлись и новые деятели, не столь радикальные. Совместно с Императором они провели либеральные реформы и Россия стала конституционной монархией, силе и единству которой завидовал весь свет.<br>Главный герой был посажен в Бухарскую тюрьму, где познакомился с Корниловым, а позже сбежал в охваченный войной Китай, где сражался против захватчиков."
showend(text)
writetime()
}


// Распутин

/* function ra1()
{
    text="Исходя весь центр города, вы случайно натыкаетесь на своего старого друга, Феликса Юсупова, стоящего около фонарного столба и нервно оглядывающегося по сторонам. Сегодня он выглядел крайне напряженно."
} 

function ra2()
{
    text="- Кхм... Ладно, я расскажу тебе. Я намерен избавить Россию от гадюки Распутина во дворце."
}

function

*/
function ot1()
{
cleardo()
text="Входя в квартиру, вы замечаете письмо, лежащее в ящике у двери. Бумага от отца, генерала от инфантерии, ярого консерватора, он хочет встретиться с сыном немедленно."
changetext(text)
addaction("Отправиться к отцу в усадьбу","ot2")
addaction("Идти к Троцкому",'part722')
}

function ot2()
{
cleardo()
text="Вы останавливаете пролетку у массивного трехэтажного особняка в центре города. У входа вас встречает дворецкий, провожающий вас к отцу и закрывающий дверь. Отец выглядел строгим, будучи облаченным в тяжелый черный сюртюк. Он взглянул на вас суровым пронизывающим взглядом и начал разговор."
changetext(text)
addaction("Далее","ot3")
}

function ot3()
{
    changeBg("otec")
cleardo()
text="- Сын мой... Корнилов мне обо всем рассказал. О твоих знакомствах, о твоих занятиях. И я убедительно прошу тебя отречься от нигилистских идей во имя нашего с тобой общего блага."
changetext(text)
addaction("- Я никогда не откажусь от своих идей, отец","ot4")
addaction("- Да... Я не разделяю идей Троцкого, ты прав... Так будет лучше, я помогу Корнилову.","ot5")
addaction("- Прости меня Отец... (застрелить его)",'ot6')
}

function ot4()
{
text="- Ну... что ж. С этого момента ты больше не мой сын, я официально лишаю тебя каких-либо прав на мое наследство и титул. Я ожидал этого. Жандармы!<br>Резко открылись двери и в помещение вбежали стражи порядка и окружили героя.<br>- Так будет лучше для всех.<br>- Уведите его!<br>Главный герой схвачен. Троцкий лишился поддержки и был вынужден эмигрировать в Мексику, где был убит шпионом главнокомандующего Корнилова. Царь остался у власти, однако отдал часть своих прав народу, дабы полностью остановить революционные течения."
showend(text)
}

function ot5()
{
cleardo()
text="- Я рад, что ты сделал правильный выбор, сын. А теперь ступай, уничтожь Троцкого, восстанови свою честь!"
changetext(text)
addaction("Вернуться в квартиру","part751")
}

function ot6()
{
    cleardo()
text="Вы резко выхватываете револьвер и стреляете в своего старого батюшку. Распахиваются двери, откуда к вам выбегают ошарашенные жандармы, однако вы умудряетесь сбежать."
window.deado=1
changetext(text)
addaction("Вернуться в квартиру","part722")
}