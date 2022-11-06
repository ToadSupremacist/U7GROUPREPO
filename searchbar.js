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

function hideSearch(event) {
    srchmenu.classList.add("searchmenu--closed")
    for (el of srchmenu_items) {
        el.setAttribute("tabindex", -1)
    }
};

// down/up arrows focus on elements of menu
let count = 0;
let child = srchmenu.firstElementChild;

form.addEventListener("keydown", (event) => {
    if (event.code == "ArrowDown") {
        count += 1;
        event.preventDefault();
        child.nextElementSibling.focus({preventScroll:true});
        child = child.nextElementSibling;
    }else if (event.code == "ArrowDown" && count == 4){
        event.preventDefault();
        child = srchmenu.firstElementChild;
        srchmenu.firstElementChild.focus({preventScroll:true});
        count = 0;
    }else if (event.code == "ArrowUp") {
        count -= 1;
        event.preventDefault();
        child.previousElementSibling.focus({preventScroll:true});
        child = child.previousElementSibling;
    }else if (event.code == "ArrowUp" && count == 0) {
        event.preventDefault();
        child = srchmenu.lastElementChild;
        srchmenu.lastElementChild.focus({preventScroll:true});
        count = 4;
    }
});

main_area.addEventListener("click", hideSearch);
srchinput.addEventListener("input", showSearch);
