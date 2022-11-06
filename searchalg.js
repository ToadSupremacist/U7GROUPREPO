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

const progArray = [new Program("Абоба", "Aboba", 1), 
new Program("Амогус", "Amogus", 2), 
new Program("Буба", "Buba", 3),
new Program("Вупсень", "Vupsen", 4),
new Program("Пупсень", "Pupsen", 5),
new Program("Обезьянка", "Monke", 6),
new Program("Уточка", "Duckie", 7),
new Program("Собачка", "Doggo", 8),
new Program("Котик", "Kitty", 9),
new Program("Мой маленький пони", "My little pony", 10)]

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
            validResults.push(el.ruName + " | " + el.engName);
            console.log(validResults);
        }
    }
    for (el of validResults) {
        if (progsInMenu.includes(el) == false){
            searchmenu_links[i].innerHTML = el;
            progsInMenu.push(el);
            console.log(progsInMenu);
            i++;
        }else if (progsInMenu.includes(el)&&el.includes(keysPressed)==false){
            progsInMenu.pop(el);
        }
    }
}

searchinput.addEventListener("input", addProgs);


