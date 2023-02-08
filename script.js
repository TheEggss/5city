const content = document.querySelectorAll(".content");
const textOne = document.querySelector(".textOne");
const textTwo = document.querySelector(".textTwo");
const textThree = document.querySelector(".textThree");
const textFour = document.querySelector(".textFour");
const arrow = document.querySelector("i");
const main = document.querySelector(".main")

function hide() {
    content[0].classList.toggle("hideContent");
    content[1].classList.toggle("hideContent");
    content[2].classList.toggle("hideContent");
    content[3].classList.toggle("hideContent");
    setTimeout(()=> {
        content[0].style.width = "0";
        content[1].style.width = "0";
        content[2].style.width = "0";
        content[3].style.width = "0";
    }, 500)
}

function show() {
    content[0].classList.toggle("hideContent");
    content[1].classList.toggle("hideContent");
    content[2].classList.toggle("hideContent");
    content[3].classList.toggle("hideContent");
    content[0].style.width = "530px";
    content[1].style.width = "530px";
    content[2].style.width = "530px";
    content[3].style.width = "530px";
    arrow.classList.toggle("showArrow");
    arrow.classList.toggle("hideArrow");
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
}

function contentOne() {
    hide();
    setTimeout(()=> {
        textOne.classList.toggle("textOne");
        textOne.classList.toggle("showContentOne");
        arrow.classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function contentTwo() {
    hide();
    setTimeout(()=> {
        textTwo.classList.toggle("textTwo");
        textTwo.classList.toggle("showContentOne");
        arrow.classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function contentThree() {
    hide();
    setTimeout(()=> {
        textThree.classList.toggle("textThree");
        textThree.classList.toggle("showContentOne");
        arrow.classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function contentFour() {
    hide();
    setTimeout(()=> {
        textFour.classList.toggle("textFour");
        textFour.classList.toggle("showContentOne");
        arrow.classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function arrowHide() {
    textOne.classList.toggle("showContentOne");
    textOne.classList.toggle("hideText");
    arrow.classList.toggle("hideArrow");
    setTimeout(()=> {
    textOne.classList.toggle("hideText")
    textOne.classList.toggle("textOne");
    main.style.justifyContent = "center";
    show();
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
    }, 500)
}