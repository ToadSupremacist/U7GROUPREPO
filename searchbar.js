const srchmenu = document.querySelector(".searchmenu");
const srchinput = document.querySelector(".search__input");
const srchmenu_items = srchmenu.querySelectorAll(".searchmenu_item");
const main_area = document.querySelector(".main");
const form = document.querySelector(".search");



function showSearch() {
    let i = 1
    srchmenu.classList.remove("searchmenu--closed")
    for (el of srchmenu_items) {
        el.setAttribute("tabindex", i)
        i++
    }
};

function hideSearch() {
    srchmenu.classList.add("searchmenu--closed")
    for (el of srchmenu_items) {
        el.setAttribute("tabindex", -1)
    }
};

let i = 0;

form.addEventListener("keydown", (event) => {
    if (event.code == "ArrowDown") {
        event.preventDefault()
        srchmenu_items[i].focus({preventScroll:true})
        i += 1
    }
});

form.addEventListener("keydown", (event) => {
    if (event.code == "ArrowUp") {
        event.preventDefault()
        srchmenu_items[i-1].focus({preventScroll:true})
        i -= 1
    }
});

main_area.addEventListener("click", hideSearch);
srchinput.addEventListener("input", showSearch);


