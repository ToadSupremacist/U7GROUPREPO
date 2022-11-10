const srchmenu = document.querySelector(".searchmenu");
const srchinput = document.querySelector(".search__input");
// const srchmenu_items = srchmenu.querySelectorAll(".searchmenu_item");
const srchmenu_links = srchmenu.querySelectorAll(".searchmenu_link");
const main_area = document.querySelector(".main");
const form = document.querySelector(".search");


main_area.addEventListener("click", hideSearch);
srchinput.addEventListener("input", showSearch);

function showSearch() {
    let i = 1
    srchmenu.classList.remove("searchmenu--closed")
    for (el of srchmenu_links) {
        el.setAttribute("tabindex", i)
        i++
    }
};

function hideSearch() {
    srchmenu.classList.add("searchmenu--closed")
    for (el of srchmenu_links) {
        el.setAttribute("tabindex", -1)
    }
};

// down/up arrows focus on elements of menu
let count = 0;
let child = srchmenu_links[count];

form.addEventListener("keydown", (event) => {
    if (event.code == "ArrowDown") {
        event.preventDefault();
        child.focus({preventScroll:true});
        // child = child.nextElementSibling;
        count += 1;
    }else if (event.code == "ArrowDown" && count == 4){
        event.preventDefault();
        // child = srchmenu.firstElementChild;
        child.focus({preventScroll:true});
        count = 0;
    }else if (event.code == "ArrowUp") {
        count -= 1;
        event.preventDefault();
        // child = child.previousElementSibling;
        child.focus({preventScroll:true});
    }else if (event.code == "ArrowUp" && count == 0) {
        event.preventDefault();
        // child = srchmenu.lastElementChild;
        child.focus({preventScroll:true});
        count = 4;
    }
});

