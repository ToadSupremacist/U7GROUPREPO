const searchinput = document.querySelector(".search__input");
const searchmenu = document.getElementsByClassName("searchmenu");
const searchmenu_links = document.getElementsByClassName("searchmenu_link");

class Program {
    constructor(ruName, engName, id) {
        this.ruName = ruName;
        this.engName = engName;
        this.id = id;
    }
}

///////////////////////////////////////////////////////////////////////////
//adds characters from user input to keysPressed string
let keysPressed = "";
searchinput.addEventListener("keypress", (event) => {
    keysPressed += event.key;
});

//removes last letter on backspace
searchinput.addEventListener("keydown", (event) => {
    if (event.code == "Backspace" && keysPressed.length > 0) {
        keysPressed = keysPressed.slice(0, keysPressed.length - 1) 
        + keysPressed.slice(keysPressed.length, keysPressed.length);
    }
});

///////////////////////////////////////////////////////////////////////////
//compares input with arrays of total programs and programs already in the search menu
//returns matches into validResults array
let progsInMenu = [];

function addProgs() {
    let i = 0;
    let validResults = [];
    for (el of progArray) {
        const lowerCaseRu = el.ruName.toLowerCase();
        const lowerCaseEng = el.engName.toLowerCase();
        const lowerCaseKeys = keysPressed.toLowerCase();
        if (lowerCaseRu.includes(lowerCaseKeys) || lowerCaseEng.includes(lowerCaseKeys)) {
            validResults.push(el.ruName);
        }
    }
    for (el of validResults) {
        if (progsInMenu.includes(el) == false){
            searchmenu_links[i].innerHTML = el;
            progsInMenu.push(el);
            progsInMenu.sort();
            i++;
        }else if (progsInMenu.includes(el)&&el.includes(keysPressed)==false){
            progsInMenu.pop(el);
        }
    }
}

searchinput.addEventListener("input", addProgs);


const progArray = [
    new Program("Сколько стоит кит?", "My Little Pony", "0550"),
    new Program("Дневники дикой природы", "My Little Pony", "0549"),
    new Program("Рабы-гиганты", "My Little Pony", "0548"),
    new Program("Тёмные глубины мироздания", "My Little Pony", "0536"),
    new Program("Охота на кабана", "My Little Pony", "0547"),
    new Program("Хвостатые медалисты", "My Little Pony", "0526"),
    new Program("Лесные", "My Little Pony", "0546"),
    new Program("Съедобное-несъедобное", "My Little Pony", "0475"),
    new Program("Африканские истории семьи гепардов", "My Little Pony", "0544"),
    new Program("Охота на пернатых", "My Little Pony", "0543"),
    new Program("Планета джунглей", "My Little Pony", "0488"),
    new Program("Необычные соревнования обычных людей", "My Little Pony", "0530"),
    new Program("В борьбе за выживание", "My Little Pony", "0481"),
    new Program("Space room", "My Little Pony", "0542"),
    new Program("Высокая охота", "My Little Pony", "0541"),
    new Program("Зенит. Успехи в освоении космоса", "My Little Pony", "0540"),
    new Program("100 чудес света", "My Little Pony", "0353"),
    new Program("Дикое меню дикого мира", "My Little Pony", "0539"),
    new Program("Незаметный мир", "My Little Pony", "0538"),
    new Program("Лисьи истории", "My Little Pony", "0537"),
    new Program("Спасение детенышей гризли", "My Little Pony", "0535"),
    new Program("Мир будущего: планета Земля 2050", "My Little Pony", "0372"),
    new Program("Медведи: борьба за жизнь", "My Little Pony", "0534"),
    new Program("Ужас морских глубин", "My Little Pony", "0533"),
    new Program("На границе миров", "My Little Pony", "0531"),
    new Program("Живой арсенал", "My Little Pony", "0529"),
    new Program("Как отреставрировать замок (и остаться в живых)", "My Little Pony", "0528"),
    new Program("Жизнь за пределами земли", "My Little Pony", "0527"),
    new Program("Удивительный мир китовой стаи", "My Little Pony", "0525"),
    new Program("Древо жизни", "My Little Pony", "0524"),
    new Program("Человек и его звери", "My Little Pony", "0523"),
    new Program("Жил-был пёс", "My Little Pony", "0522"),
    new Program("Новые горизонты космоса", "My Little Pony", "0521"),
    new Program("Остров тюленей", "My Little Pony", "0520"),
    new Program("Дикая природа Шри-Ланки. Царство леопардов", "My Little Pony", "0519"),
    new Program("Невероятные моменты из жизни животных", "My Little Pony", "0517"),
    new Program("Что нам стоит дом построить", "My Little Pony", "0516"),
    new Program("Кто выпустил собак?", "My Little Pony", "0330"),
    new Program("Охотничьи приключения в Норвегии", "My Little Pony", "0515"),
    new Program("Неповторимый вкус охоты", "My Little Pony", "0514"),
    new Program("Очарование Бразилии", "My Little Pony", "0513"),
    new Program("Отель своими руками", "My Little Pony", "0512"),
    new Program("Боевые силы", "My Little Pony", "0511"),
    new Program("Мир, затерянный в океане", "My Little Pony", "0510"),
    new Program("Наши питомцы", "My Little Pony", "0334"),
    new Program("Дорогами Эквадора", "My Little Pony", "0509"),
    new Program("Оружие древности: искусство войны", "My Little Pony", "0507"),
    new Program("На пределе возможностей", "My Little Pony", "0506"),
    new Program("Барибалы на краю земли", "My Little Pony", "0505"),
    new Program("В поисках охотничьих трофеев", "My Little Pony", "0504"),
    new Program("Утопия инженерии", "My Little Pony", "0503"),
    new Program("Выслеживая диких животных", "My Little Pony", "0502"),
    new Program("Тролли", "My Little Pony", "0399"),
    new Program("Зверята-работяги", "My Little Pony", "0501"),
    new Program("Журавль: дорога домой", "My Little Pony", "0500"),
    new Program("Дом мечты у моря", "My Little Pony", "0499"),
    new Program("Заповедник спасенных животных", "My Little Pony", "0498"),
    new Program("Человеческий разум", "My Little Pony", "0497"),
    new Program("Дикая природа Индии", "My Little Pony", "0496"),
    new Program("Патруль дикой природы", "My Little Pony", "0495"),
    new Program("Культурное наследие Латинской Америки", "My Little Pony", "0494"),
    new Program("Латинская Америка. Рекомендовано к посещению", "My Little Pony", "0493"),
    new Program("Город белых медведей. Лето", "My Little Pony", "0492"),
    new Program("Удивительный дом профессора Амброзиуса", "My Little Pony", "0491"),
    new Program("Король реки", "My Little Pony", "0490"),
    new Program("Рыбацкое сокровище", "My Little Pony", "0489"),
    new Program("Подумай ещё!", "My Little Pony", "0487"),
    new Program("Дичь на столе", "My Little Pony", "0486"),
    new Program("Битва за дикую природу", "My Little Pony", "0485"),
    new Program("Высокая кухня Аляски", "My Little Pony", "0484"),
    new Program("Снежный человек Ларэми Миллер", "My Little Pony", "0483"),
    new Program("Команда «Анимо»", "My Little Pony", "0482"),
    new Program("Садовые секреты от Гийома", "My Little Pony", "0480"),
    new Program("Наука выживания", "My Little Pony", "0479"),
    new Program("Ошеломительный ремонт", "My Little Pony", "0478"),
    new Program("Эпоха лошади", "My Little Pony", "0477"),
    new Program("Океания", "My Little Pony", "0476"),
    new Program("Человек и львы: история одного сафари", "My Little Pony", "0474"),
    new Program("Древняя история Сибири", "My Little Pony", "0473"),
    new Program("Совенок Бубу и еë друзья", "My Little Pony", "0472"),
    new Program("Спасите питомца", "My Little Pony", "0471"),
    new Program("Как это работает", "My Little Pony", "0470"),
    new Program("Хмельное путешествие", "My Little Pony", "0469"),
    new Program("Столкновение непобедимых", "My Little Pony", "0468"),
    new Program("Космик и его друзья", "My Little Pony", "0467"),
    new Program("Пчелëнок Баззи и его друзья", "My Little Pony", "0466"),
    new Program("Откуда это взялось", "My Little Pony", "0465"),
    new Program("Открытый космос", "My Little Pony", "0464"),
    new Program("Гепард. Из охотника в жертву", "My Little Pony", "0463"),
    new Program("Вглубь вещей", "My Little Pony", "0462"),
    new Program("Будни химических элементов", "My Little Pony", "0461"),
    new Program("Короли кебаба", "My Little Pony", "0460"),
    new Program("Мощь", "My Little Pony", "0459"),
    new Program("Короли ювелирного дела", "My Little Pony", "0458"),
    new Program("Спасение животных Таиланда", "My Little Pony", "0457"),
    new Program("Миммит", "My Little Pony", "0456"),
    new Program("Страна гризли", "My Little Pony", "0455"),
    new Program("Белая волчица", "My Little Pony", "0454"),
    new Program("Жизнь на кону", "My Little Pony", "0453"),
    new Program("Детеныши Йеллоустона", "My Little Pony", "0452"),
    new Program("Никогда не повторяйте это дома", "My Little Pony", "0451"),
    new Program("Дикарь", "My Little Pony", "0450"),
    new Program("Малыши дикой природы", "My Little Pony", "0449"),
    new Program("Ультракары: механические монстры", "My Little Pony", "0448"),
    new Program("Детский сад для зверят", "My Little Pony", "0447"),
    new Program("Реновация по-английски", "My Little Pony", "0446"),
    new Program("Неотложка для животных", "My Little Pony", "0445"),
    new Program("Прогулка по Америкам", "My Little Pony", "0444"),
    new Program("Мафлики", "My Little Pony", "0443"),
    new Program("Я и моя собака", "My Little Pony", "0442"),
    new Program("Возрождение замка", "My Little Pony", "0441"),
    new Program("Рыбак-авантюрист", "My Little Pony", "0440"),
    new Program("Задумывались ли вы?", "My Little Pony", "0439"),
    new Program("Здесь стоит перекусить!", "My Little Pony", "0438"),
    new Program("Стражи будущего", "My Little Pony", "0437"),
    new Program("Мастера моды", "My Little Pony", "0436"),
    new Program("Просто о сложном", "My Little Pony", "0435"),
    new Program("Мастера дизайна", "My Little Pony", "0434"),
    new Program("Фермер-гурман", "My Little Pony", "0433"),
    new Program("Ремонт и другие неприятности", "My Little Pony", "0432"),
    new Program("Зеленая сила", "My Little Pony", "0431"),
    new Program("Друзья Аксель", "My Little Pony", "0430"),
    new Program("Стаи диких собак", "My Little Pony", "0429"),
    new Program("Уличная еда", "My Little Pony", "0428"),
    new Program("Предоставьте это Брайану", "My Little Pony", "0427"),
    new Program("Кулинарные приключения в Китае", "My Little Pony", "0426"),
    new Program("Потрясающие изобретения", "My Little Pony", "0425"),
    new Program("Люди дикого севера", "My Little Pony", "0424"),
    new Program("Охотники за домами", "My Little Pony", "0423"),
    new Program("Пожужжим", "My Little Pony", "0422"),
    new Program("Яя и Зук", "My Little Pony", "0421"),
    new Program("Защитники животных Финикса", "My Little Pony", "0420"),
    new Program("По кирпичику за раз", "My Little Pony", "0419"),
    new Program("Фриксики", "My Little Pony", "0418"),
    new Program("Грандиозные сооружения", "My Little Pony", "0417"),
    new Program("Зверята со всего света", "My Little Pony", "0416"),
    new Program("Волки на свободе", "My Little Pony", "0415"),
    new Program("Летающая радуга", "My Little Pony", "0414"),
    new Program("Сокрытые в дубах", "My Little Pony", "0413"),
    new Program("Будущее уже здесь", "My Little Pony", "0412"),
    new Program("Вкус ночной жизни", "My Little Pony", "0411"),
    new Program("Африканская ночь", "My Little Pony", "0410"),
    new Program("Элитные дома", "My Little Pony", "0409"),
    new Program("Обезьяны — удивительное семейство", "My Little Pony", "0408"),
    new Program("Приключения в дикой природе", "My Little Pony", "0407"),
    new Program("Малоизвестные факты из жизни пчёл", "My Little Pony", "0406"),
    new Program("Дом Брайана", "My Little Pony", "0405"),
    new Program("Трактор Ферги", "My Little Pony", "0404"),
    new Program("Ожившие мумии", "My Little Pony", "0403"),
    new Program("Природа простых вещей", "My Little Pony", "0402"),
    new Program("Мой мозг заставил меня сделать это", "My Little Pony", "0401"),
    new Program("Охотники на торнадо", "My Little Pony", "0400"),
    new Program("Животные дикого севера", "My Little Pony", "0398"),
    new Program("Тайны человеческого мозга", "My Little Pony", "0397"),
    new Program("Город белых медведей", "My Little Pony", "0396"),
    new Program("Зу-Му", "My Little Pony", "0395"),
    new Program("Планета инноваций", "My Little Pony", "0394"),
    new Program("Веселые эксперименты", "My Little Pony", "0393"),
    new Program("Экстремальные домашние питомцы", "My Little Pony", "0392"),
    new Program("Отважные зверята!", "My Little Pony", "0391"),
    new Program("Эти забавные зверята!", "My Little Pony", "0390"),
    new Program("Неизвестная Америка", "My Little Pony", "0389"),
    new Program("Приют для слонят", "My Little Pony", "0388"),
    new Program("Человек, который может не дышать", "My Little Pony", "0387"),
    new Program("Детеныши диких животных", "My Little Pony", "0386"),
    new Program("Мозг на прокачку", "My Little Pony", "0385"),
    new Program("Величайшие художники мира", "My Little Pony", "0384"),
    new Program("Ферма Микки", "My Little Pony", "0383"),
    new Program("Доки", "My Little Pony", "0382"),
    new Program("Невероятные приключения гурманов", "My Little Pony", "0381"),
    new Program("Возрождение тигра", "My Little Pony", "0380"),
    new Program("Король бабуинов", "My Little Pony", "0379"),
    new Program("Доверенный попугаев", "My Little Pony", "0378"),
    new Program("Возвращение белого льва", "My Little Pony", "0377"),
    new Program("Брат против брата", "My Little Pony", "0376"),
    new Program("Защитник буйволов", "My Little Pony", "0375"),
    new Program("Дом на продажу", "My Little Pony", "0374"),
    new Program("Смертельное лето", "My Little Pony", "0373"),
    new Program("Хомо Сапиенс: история одного вида", "My Little Pony", "0371"),
    new Program("Безумные изобретатели", "My Little Pony", "0370"),
    new Program("Львиный смотритель", "My Little Pony", "0368"),
    new Program("Моя собака - гений!", "My Little Pony", "0367"),
    new Program("Мячик Биби", "My Little Pony", "0366"),
    new Program("Робокары - Город Машинок", "My Little Pony", "0365"),
    new Program("Ферма Братьев Му", "My Little Pony", "0364"),
    new Program("Другсики", "My Little Pony", "0363"),
    new Program("Кулинарное путешествие по Австралии", "My Little Pony", "0362"),
    new Program("Лу познает мир", "My Little Pony", "0361"),
    new Program("Необычные питомцы", "My Little Pony", "0360"),
    new Program("Подводный мир Окаванго", "My Little Pony", "0359"),
    new Program("Тайная жизнь бобров", "My Little Pony", "0358"),
    new Program("Магия обычных вещей", "My Little Pony", "0357"),
    new Program("Бойцовский клуб жуков", "My Little Pony", "0356"),
    new Program("Детская вселенная", "My Little Pony", "0355"),
    new Program("Жизнь со львами", "My Little Pony", "0354"),
    new Program("Ожившие сказки", "My Little Pony", "0352"),
    new Program("Бруно и банановая команда", "My Little Pony", "0351"),
    new Program("Произведения автомобильного искусства", "My Little Pony", "0350"),
    new Program("За секунду до катастрофы", "My Little Pony", "0349"),
    new Program("Самые опасные животные", "My Little Pony", "0348"),
    new Program("Бетти-молния", "My Little Pony", "0347"),
    new Program("Повар государственной важности", "My Little Pony", "0346"),
    new Program("Мой адский котик", "My Little Pony", "0345"),
    new Program("Животные-рекордсмены", "My Little Pony", "0344"),
    new Program("Отчаянные домашние кошки", "My Little Pony", "0343"),
    new Program("На грани выживания с Лесом Страудом", "My Little Pony", "0342"),
    new Program("Роботы наступают", "My Little Pony", "0341"),
    new Program("Говорящие животные", "My Little Pony", "0340"),
    new Program("Кошки: 101 порода", "My Little Pony", "0338"),
    new Program("Искривление времени", "My Little Pony", "0337"),
    new Program("Звезды зоопарков мира", "My Little Pony", "0336"),
    new Program("Спорткары. Премиум-класс", "My Little Pony", "0335"),
    new Program("Профессия: заводчик собак", "My Little Pony", "0333"),
    new Program("Опасные встречи", "My Little Pony", "0332"),
    new Program("Сверхспособности в мире животных", "My Little Pony", "0331"),
    new Program("Удивительный мир Дона Полека", "My Little Pony", "0329"),
    new Program("Самые эпатажные рестораны мира", "My Little Pony", "0328"),
    new Program("Тайны древних цивилизаций", "My Little Pony", "0327"),
    new Program("На 80 поездах вокруг мира", "My Little Pony", "0326"),
    new Program("Дикая Африка", "My Little Pony", "0325"),
    new Program("Заряженные тачки", "My Little Pony", "0324"),
    new Program("Мир из окна поезда", "My Little Pony", "0323"),
    new Program("Зоошок", "My Little Pony", "0322"),
    new Program("Животные атакуют", "My Little Pony", "0321"),
    new Program("Добыча хищника", "My Little Pony", "0320"),
    new Program("Строительная зона", "My Little Pony", "0319"),
    new Program("Враги и соперники в дикой природе", "My Little Pony", "0318"),
    new Program("Вкусы города", "My Little Pony", "0317"),
    new Program("Секреты музеев", "My Little Pony", "0316"),
    new Program("Суровая планета", "My Little Pony", "0315"),
    new Program("Сады мира", "My Little Pony", "0314"),
    new Program("Зоомания", "My Little Pony", "0313"),
    new Program("Соседи по планете", "My Little Pony", "0312"),
    new Program("По морям, по океанам", "My Little Pony", "0311"),
    new Program("Живое оружие", "My Little Pony", "0310"),
    new Program("Остров пингвинов", "My Little Pony", "0309"),
    new Program("Африка. Опасная реальность", "My Little Pony", "0308"),
    new Program("Дикие кошки Трента Баркли", "My Little Pony", "0307"),
    new Program("Сурикаты: большая жизнь маленьких существ", "My Little Pony", "0305"),
    new Program("Город собак", "My Little Pony", "0304"),
    new Program("Осторожно, злая собака!", "My Little Pony", "0303"),
    new Program("Сто вопросов о животных", "My Little Pony", "0302"),
    new Program("Охота в Новом Свете", "My Little Pony", "0132"),
    new Program("Вокруг света на воздушном шаре", "My Little Pony", "0301"),
    new Program("Секреты собаковода", "My Little Pony", "0300"),
    new Program("Круизные лайнеры - рай в океане", "My Little Pony", "0299"),
    new Program("Тектоническая сага", "My Little Pony", "0298"),
    new Program("Портовые города мира", "My Little Pony", "0297"),
    new Program("Короли кухни", "My Little Pony", "0296"),
    new Program("Удивительные обитатели сада", "My Little Pony", "0295"),
    new Program("Золото: власть над миром", "My Little Pony", "0294"),
    new Program("От кутюр без купюр", "My Little Pony", "0293"),
    new Program("Успеть к Рождеству II", "My Little Pony", "0292"),
    new Program("Успеть к Рождеству I", "My Little Pony", "0291"),
    new Program("Толк в еде", "My Little Pony", "0290"),
    new Program("Волшебный мир насекомых", "My Little Pony", "0289"),
    new Program("В мире домашних животных", "My Little Pony", "0288"),
    new Program("Арктика: школа выживания", "My Little Pony", "0287"),
    new Program("Огород в большом городе", "My Little Pony", "0286"),
    new Program("Домашние драконы", "My Little Pony", "0285"),
    new Program("По следу зверя", "My Little Pony", "0284"),
    new Program("Дикими тропами", "My Little Pony", "0283"),
    new Program("Дай лапу!", "My Little Pony", "0282"),
    new Program("Царство зверей", "My Little Pony", "0281"),
    new Program("Турист по жизни", "My Little Pony", "0280"),
    new Program("Неожиданные эксперименты", "My Little Pony", "0279"),
    new Program("Кухня французского Средиземноморья", "My Little Pony", "0278"),
    new Program("Кухня французская", "My Little Pony", "0277"),
    new Program("Кухня парижская", "My Little Pony", "0276"),
    new Program("Секреты реставрации", "My Little Pony", "0275"),
    new Program("Работать как звери", "My Little Pony", "0230"),
    new Program("Встречи с призраками", "My Little Pony", "0274"),
    new Program("Щенки: секреты воспитания", "My Little Pony", "0273"),
    new Program("Соединяя континенты", "My Little Pony", "0272"),
    new Program("Бэби-бум в зоопарке", "My Little Pony", "0271"),
    new Program("Тайны цирка", "My Little Pony", "0270"),
    new Program("Кругосветка длиною в день", "My Little Pony", "0269"),
    new Program("Сталь и стиль", "My Little Pony", "0268"),
    new Program("Концептуальные автомобили", "My Little Pony", "0267"),
    new Program("Охотники на питонов", "My Little Pony", "0266"),
    new Program("Вся роскошь азиатских стран", "My Little Pony", "0265"),
    new Program("Райские сады", "My Little Pony", "0216"),
    new Program("Эволюция жизни на Земле", "My Little Pony", "0264"),
    new Program("Рожденные убивать", "My Little Pony", "0263"),
    new Program("Как это устроено", "My Little Pony", "0262"),
    new Program("Эти кошмарные насекомые", "My Little Pony", "0261"),
    new Program("Удивительные рассказы о природе", "My Little Pony", "0260"),
    new Program("Будни дикой природы", "My Little Pony", "0259"),
    new Program("Планета жизни", "My Little Pony", "0258"),
    new Program("Секреты садовода", "My Little Pony", "0257"),
    new Program("Породистый пёс", "My Little Pony", "0256"),
    new Program("Экстремальное поведение диких животных", "My Little Pony", "0255"),
    new Program("80 островов вокруг света", "My Little Pony", "0254"),
    new Program("Психология поведения животных", "My Little Pony", "0253"),
    new Program("Большая фотоохота Дага Гарднера", "My Little Pony", "0252"),
    new Program("Возвращение в дикую природу", "My Little Pony", "0251"),
    new Program("Цирковые животные", "My Little Pony", "0250"),
    new Program("Охотники за метеоритами", "My Little Pony", "0249"),
    new Program("Огород без хлопот", "My Little Pony", "0248"),
    new Program("В стиле люкс", "My Little Pony", "0247"),
    new Program("В западне", "My Little Pony", "0246"),
    new Program("Как работают машины", "My Little Pony", "0245"),
    new Program("Опасные приключения Остина Стивенса", "My Little Pony", "0244"),
    new Program("Невероятно, не так ли?", "My Little Pony", "0243"),
    new Program("Атлас животного мира", "My Little Pony", "0242"),
    new Program("Винная карта мира", "My Little Pony", "0241"),
    new Program("В плену рекламы", "My Little Pony", "0240"),
    new Program("Цветочный блюз: ботанические сады Северной Америки", "My Little Pony", "0239"),
    new Program("Технические шедевры", "My Little Pony", "0238"),
    new Program("Хит-парад интерьеров", "My Little Pony", "0237"),
    new Program("Новейшие технологии: фактор риска", "My Little Pony", "0236"),
    new Program("Переезд на тысячу тонн", "My Little Pony", "0235"),
    new Program("Авиакатастрофы: причины и следствия", "My Little Pony", "0234"),
    new Program("Зоопарк: истории в деталях", "My Little Pony", "0233"),
    new Program("Собачья работа", "My Little Pony", "0077"),
    new Program("Лучшие экологичные дома мира", "My Little Pony", "0232"),
    new Program("Собачья жизнь", "My Little Pony", "0231"),
    new Program("Великая книга природы", "My Little Pony", "0229"),
    new Program("Собачий патруль", "My Little Pony", "0228"),
    new Program("СКР - Служба кулинарной разведки", "My Little Pony", "0227"),
    new Program("Цветы как чудо", "My Little Pony", "0104"),
    new Program("Сигнал спасения – красный", "My Little Pony", "0187"),
    new Program("На старт! Внимание! Гав!", "My Little Pony", "0226"),
    new Program("Обратный отсчёт", "My Little Pony", "0225"),
    new Program("Линия поведения", "My Little Pony", "0224"),
    new Program("Жизнь чёрного континента - от карликов до гигантов", "My Little Pony", "0223"),
    new Program("Дикие сердцем", "My Little Pony", "0222"),
    new Program("Знаменитые галереи мира", "My Little Pony", "0221"),
    new Program("Из жизни животных", "My Little Pony", "0220"),
    new Program("Теория невероятности", "My Little Pony", "0218"),
    new Program("На страже природы", "My Little Pony", "0217"),
    new Program("Ресторация мира", "My Little Pony", "0215"),
    new Program("Хроники африканского заповедника", "My Little Pony", "0214"),
    new Program("Тигриный остров", "My Little Pony", "0213"),
    new Program("Маленькие питомцы", "My Little Pony", "0212"),
    new Program("Красивейшие острова мира", "My Little Pony", "0211"),
    new Program("Катастрофы - вехи эволюции", "My Little Pony", "0210"),
    new Program("Железные дороги мира", "My Little Pony", "0209"),
    new Program("Воспитание детенышей", "My Little Pony", "0208"),
    new Program("Редкий вид", "My Little Pony", "0207"),
    new Program("Шамвари: территория диких животных", "My Little Pony", "0206"),
    new Program("Эхо и другие слоны Амбосели", "My Little Pony", "0205"),
    new Program("Культурный шок", "My Little Pony", "0204"),
    new Program("На всех парах", "My Little Pony", "0203"),
    new Program("Право на жизнь", "My Little Pony", "0202"),
    new Program("Детство в дикой природе", "My Little Pony", "0201"),
    new Program("Скромное обаяние современных технологий", "My Little Pony", "0200"),
    new Program("Разрушители стереотипов", "My Little Pony", "0199"),
    new Program("Инструкция для коллекционера", "My Little Pony", "0198"),
    new Program("По следам морских сражений", "My Little Pony", "0197"),
    new Program("Лошади", "My Little Pony", "0196"),
    new Program("Нерассказанные истории о животных", "My Little Pony", "0195"),
    new Program("Практическое руководство экстремального туриста", "My Little Pony", "0194"),
    new Program("Дикая природа – взгляд с Востока", "My Little Pony", "0193"),
    new Program("Вода – линия жизни", "My Little Pony", "0192"),
    new Program("Непобедимый воин", "My Little Pony", "0191"),
    new Program("Разгадка египетских тайн", "My Little Pony", "0190"),
    new Program("Смертельная кухня", "My Little Pony", "0189"),
    new Program("Съедобная история искусств", "My Little Pony", "0188"),
    new Program("Живущие рядом с нами", "My Little Pony", "0186"),
    new Program("Энциклопедия выживания", "My Little Pony", "0185"),
    new Program("Живая природа: прямой репортаж", "My Little Pony", "0184"),
    new Program("Загадочная планета", "My Little Pony", "0183"),
    new Program("В погоне за драгоценными камнями", "My Little Pony", "0182"),
    new Program("Животные в мегаполисе", "My Little Pony", "0180"),
    new Program("Прикосновения дикой природы", "My Little Pony", "0179"),
    new Program("Опасные соседи", "My Little Pony", "0178"),
    new Program("Как это сделано: голливудская вечеринка", "My Little Pony", "0177"),
    new Program("Сущность зверя", "My Little Pony", "0176"),
    new Program("Обитатели глубин", "My Little Pony", "0175"),
    new Program("Фобия", "My Little Pony", "0174"),
    new Program("Жизнь зоопарка", "My Little Pony", "0173"),
    new Program("Твори, выдумывай, пробуй!", "My Little Pony", "0172"),
    new Program("Каскадеры: невидимые звезды", "My Little Pony", "0171"),
    new Program("Роль, изменившая мою жизнь", "My Little Pony", "0170"),
    new Program("Камера, мотор, животные", "My Little Pony", "0169"),
    new Program("Тайны музейных хранилищ", "My Little Pony", "0168"),
    new Program("Телеэнциклопедия: воспитание домашних животных", "My Little Pony", "0167"),
    new Program("Детки в клетке", "My Little Pony", "0166"),
    new Program("Путешествие на край света", "My Little Pony", "0164"),
    new Program("Вулканы мира", "My Little Pony", "0163"),
    new Program("Индустриальные музеи мира", "My Little Pony", "0162"),
    new Program("Жизнь по законам природы", "My Little Pony", "0161"),
    new Program("Живая энциклопедия", "My Little Pony", "0160"),
    new Program("Верхом вокруг света", "My Little Pony", "0159"),
    new Program("Экзотика городов Азии", "My Little Pony", "0158"),
    new Program("Головокружительная история американских горок", "My Little Pony", "0157"),
    new Program("Мир животных с Джеродом Миллером", "My Little Pony", "0156"),
    new Program("Вся правда о комиксах", "My Little Pony", "0155"),
    new Program("Дикая природа в объективе", "My Little Pony", "0154"),
    new Program("Отдых на пять звезд", "My Little Pony", "0153"),
    new Program("Америка: чудаки на самокатах", "My Little Pony", "0152"),
    new Program("Полоса прилива", "My Little Pony", "0151"),
    new Program("Океанариум", "My Little Pony", "0150"),
    new Program("Невидимые захватчики", "My Little Pony", "0149"),
    new Program("Игры животного разума", "My Little Pony", "0148"),
    new Program("О братьях наших меньших", "My Little Pony", "0147"),
    new Program("Пальчики оближешь", "My Little Pony", "0146"),
    new Program("Водный мир", "My Little Pony", "0145"),
    new Program("Тайны, что скрывает океан", "My Little Pony", "0144"),
    new Program("Улицы мира", "My Little Pony", "0143"),
    new Program("В глубь земли, в глубь времен", "My Little Pony", "0142"),
    new Program("Защитники животных", "My Little Pony", "0141"),
    new Program("Стрит-арт, или Искусство улиц", "My Little Pony", "0140"),
    new Program("Кулинарный экстрим", "My Little Pony", "0139"),
    new Program("Зеленая планета", "My Little Pony", "0138"),
    new Program("Выжить в дикой природе: африканский взгляд", "My Little Pony", "0137"),
    new Program("Секретная жизнь обыденных вещей", "My Little Pony", "0136"),
    new Program("Отдых повышенной опасности", "My Little Pony", "0135"),
    new Program("На глубине", "My Little Pony", "0134"),
    new Program("Секреты из жизни животных", "My Little Pony", "0133"),
    new Program("Толкование сновидений", "My Little Pony", "0131"),
    new Program("Мир вокруг нас", "My Little Pony", "0130"),
    new Program("Друзья животных", "My Little Pony", "0129"),
    new Program("Подводные сокровища", "My Little Pony", "0128"),
    new Program("Одержимые страстью", "My Little Pony", "0127"),
    new Program("Вертикальный мир", "My Little Pony", "0125"),
    new Program("Создание совершенства", "My Little Pony", "0124"),
    new Program("«Чистые» автомобили", "My Little Pony", "0123"),
    new Program("Тайны затонувших кораблей", "My Little Pony", "0121"),
    new Program("Пятое измерение", "My Little Pony", "0120"),
    new Program("Великие строения древности", "My Little Pony", "0119"),
    new Program("Современное Волшебство", "My Little Pony", "0118"),
    new Program("Опасность крупным планом", "My Little Pony", "0117"),
    new Program("Няньки дикой природы", "My Little Pony", "0116"),
    new Program("Предельная скорость", "My Little Pony", "0114"),
    new Program("Мистическая Азия", "My Little Pony", "0113"),
    new Program("Занимательная зоология", "My Little Pony", "0112"),
    new Program("История шутит", "My Little Pony", "0111"),
    new Program("Купаясь в роскоши", "My Little Pony", "0110"),
    new Program("Легенды животного мира", "My Little Pony", "0109"),
    new Program("Назад к Природе", "My Little Pony", "0108"),
    new Program("Тайны современной криминалистики", "My Little Pony", "0107"),
    new Program("Роскошные отели мира", "My Little Pony", "0106"),
    new Program("Экспедиция вокруг света: три в одном", "My Little Pony", "0105"),
    new Program("Роковые камни", "My Little Pony", "0103"),
    new Program("Каскадеры: искусство выжить", "My Little Pony", "0102"),
    new Program("Красивые и ужасные", "My Little Pony", "0101"),
    new Program("Самые нелепые изобретения", "My Little Pony", "0100"),
    new Program("Этот безумный мир", "My Little Pony", "0099"),
    new Program("Эти чудесные животные", "My Little Pony", "0098"),
    new Program("Экстремальный контакт", "My Little Pony", "0097"),
    new Program("Экстремальные ритуалы Океании", "My Little Pony", "0096"),
    new Program("Экватор", "My Little Pony", "0095"),
    new Program("Чудеса и другие удивительные истории", "My Little Pony", "0092"),
    new Program("Четвероногие: в кадре и за кадром", "My Little Pony", "0091"),
    new Program("Хит-парад дикой природы", "My Little Pony", "0090"),
    new Program("Хвостатые истории", "My Little Pony", "0089"),
    new Program("Фокус", "My Little Pony", "0088"),
    new Program("Улики древности", "My Little Pony", "0086"),
    new Program("Танки", "My Little Pony", "0085"),
    new Program("Такие странные профессии", "My Little Pony", "0084"),
    new Program("Супергерои", "My Little Pony", "0082"),
    new Program("Страсти по насекомым", "My Little Pony", "0081"),
    new Program("Странные жилища", "My Little Pony", "0080"),
    new Program("Стоять, полиция!", "My Little Pony", "0079"),
    new Program("Собаки от А до Я", "My Little Pony", "0076"),
    new Program("Секреты фильмов о дикой природе", "My Little Pony", "0075"),
    new Program("Секреты кино", "My Little Pony", "0074"),
    new Program("Свадьбы на миллион долларов", "My Little Pony", "0073"),
    new Program("Свадебные безумства", "My Little Pony", "0072"),
    new Program("Самые удивительные праздники мира", "My Little Pony", "0071"),
    new Program("Самые известные кладбища мира", "My Little Pony", "0070"),
    new Program("Режиссеры", "My Little Pony", "0068"),
    new Program("Пулемет", "My Little Pony", "0066"),
    new Program("Причудливые миры", "My Little Pony", "0065"),
    new Program("Практическая археология", "My Little Pony", "0064"),
    new Program("Потрясающие каскадерские трюки", "My Little Pony", "0063"),
    new Program("Покорители глубин", "My Little Pony", "0062"),
    new Program("Подводный калейдоскоп", "My Little Pony", "0060"),
    new Program("Паранормальное ТВ", "My Little Pony", "0059"),
    new Program("Папарацци: голливудская охота", "My Little Pony", "0058"),
    new Program("Очарование домашних питомцев", "My Little Pony", "0057"),
    new Program("Остаться в живых", "My Little Pony", "0056"),
    new Program("Опасность под водой", "My Little Pony", "0055"),
    new Program("НЛО – факты и фальсификации", "My Little Pony", "0054"),
    new Program("Нечеловеческие рекорды", "My Little Pony", "0053"),
    new Program("Неопознанные живые объекты", "My Little Pony", "0052"),
    new Program("Невероятные коллекции", "My Little Pony", "0051"),
    new Program("Наука по-голливудски", "My Little Pony", "0050"),
    new Program("Морские охотники", "My Little Pony", "0048"),
    new Program("Морские истории", "My Little Pony", "0047"),
    new Program("Мир боли", "My Little Pony", "0044"),
    new Program("Магия оружия", "My Little Pony", "0042"),
    new Program("Легенды", "My Little Pony", "0040"),
    new Program("Кунсткамера", "My Little Pony", "0039"),
    new Program("Коллекция «Экстремальный спорт»", "My Little Pony", "0038"),
    new Program("Катастрофы века", "My Little Pony", "0036"),
    new Program("Искусство ограбления - охота за шедеврами", "My Little Pony", "0035"),
    new Program("Иконы животного мира", "My Little Pony", "0034"),
    new Program("Изображая зверя", "My Little Pony", "0033"),
    new Program("Звериная работа", "My Little Pony", "0032"),
    new Program("Животный страх", "My Little Pony", "0030"),
    new Program("Животные на съемочной площадке", "My Little Pony", "0029"),
    new Program("Животные-каннибалы", "My Little Pony", "0028"),
    new Program("Животные как мы", "My Little Pony", "0027"),
    new Program("Животные-изобретатели", "My Little Pony", "0026"),
    new Program("Жестокие тайны прошлого", "My Little Pony", "0025"),
    new Program("Дневники НЛО", "My Little Pony", "0023"),
    new Program("Дикий молодняк", "My Little Pony", "0022"),
    new Program("Дикие звезды", "My Little Pony", "0021"),
    new Program("Дикая природа: неповторимые моменты", "My Little Pony", "0020"),
    new Program("Гость в актерской студии", "My Little Pony", "0019"),
    new Program("Городские легенды", "My Little Pony", "0018"),
    new Program("Голливудские пары", "My Little Pony", "0017"),
    new Program("Гении от природы", "My Little Pony", "0016"),
    new Program("В огне", "My Little Pony", "0015"),
    new Program("Властелины киноужаса", "My Little Pony", "0013"),
    new Program("Взрослые сказки о животных", "My Little Pony", "0012"),
    new Program("Весна интернешенл", "My Little Pony", "0010"),
    new Program("Великие иллюзии: история фокуса", "My Little Pony", "0009"),
    new Program("Близкие контакты", "My Little Pony", "0008"),
    new Program("Балбесы, или Одни дома навсегда", "My Little Pony", "0005"),
    new Program("Анималия – рассказы о животных", "My Little Pony", "0004"),
    new Program("Анатомия катастроф", "My Little Pony", "0003"),
    new Program("Автолегенды", "My Little Pony", "0001"),
    new Program("Гнев стихии", "My Little Pony", "0000"),
];