const srchmenu = document.querySelector(".searchmenu")
const srchinput = document.querySelector(".search__input")
const srchmenu_items = srchmenu.querySelectorAll(".searchmenu_item")
const main_area = document.querySelector(".main")

const itemsArray = Array.from(srchmenu_items)

function showSearch() {
    srchmenu.classList.remove("searchmenu--closed")
    for (let i = 0; itemsArray.length; i++) {
        itemsArray[i].setAttribute("tabindex", i)
    }
}

function hideSearch() {
    srchmenu.classList.add("searchmenu--closed")
    for (let i = 0; itemsArray.length; i++) {
        itemsArray[i].setAttribute("tabindex", -1)
    }
}

main_area.addEventListener("click", hideSearch)
srchinput.addEventListener("input", showSearch)
