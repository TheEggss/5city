const content = document.querySelectorAll(".content");
const textOne = document.querySelector(".textOne");
const textTwo = document.querySelector(".textTwo");
const textThree = document.querySelector(".textThree");
const textFour = document.querySelector(".textFour");
const arrow = document.querySelectorAll("i");
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

function showOne() {
    content[0].classList.toggle("hideContent");
    content[1].classList.toggle("hideContent");
    content[2].classList.toggle("hideContent");
    content[3].classList.toggle("hideContent");
    content[0].style.width = "530px";
    content[1].style.width = "530px";
    content[2].style.width = "530px";
    content[3].style.width = "530px";
    arrow[0].classList.toggle("showArrow");
    arrow[0].classList.toggle("hideArrow");
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
}

function showTwo() {
    content[0].classList.toggle("hideContent");
    content[1].classList.toggle("hideContent");
    content[2].classList.toggle("hideContent");
    content[3].classList.toggle("hideContent");
    content[0].style.width = "530px";
    content[1].style.width = "530px";
    content[2].style.width = "530px";
    content[3].style.width = "530px";
    arrow[1].classList.toggle("showArrow");
    arrow[1].classList.toggle("hideArrow");
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
}

function showThree() {
    content[0].classList.toggle("hideContent");
    content[1].classList.toggle("hideContent");
    content[2].classList.toggle("hideContent");
    content[3].classList.toggle("hideContent");
    content[0].style.width = "530px";
    content[1].style.width = "530px";
    content[2].style.width = "530px";
    content[3].style.width = "530px";
    arrow[2].classList.toggle("showArrow");
    arrow[2].classList.toggle("hideArrow");
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
}

function showFour() {
    content[0].classList.toggle("hideContent");
    content[1].classList.toggle("hideContent");
    content[2].classList.toggle("hideContent");
    content[3].classList.toggle("hideContent");
    content[0].style.width = "530px";
    content[1].style.width = "530px";
    content[2].style.width = "530px";
    content[3].style.width = "530px";
    arrow[3].classList.toggle("showArrow");
    arrow[3].classList.toggle("hideArrow");
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
        arrow[0].classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function contentTwo() {
    hide();
    setTimeout(()=> {
        textTwo.classList.toggle("textTwo");
        textTwo.classList.toggle("showContentOne");
        arrow[1].classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function contentThree() {
    hide();
    setTimeout(()=> {
        textThree.classList.toggle("textThree");
        textThree.classList.toggle("showContentOne");
        arrow[2].classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function contentFour() {
    hide();
    setTimeout(()=> {
        textFour.classList.toggle("textFour");
        textFour.classList.toggle("showContentOne");
        arrow[3].classList.toggle("showArrow");
        main.style.justifyContent = "flex-start";
    }, 500)
}

function arrowHideOne() {
    textOne.classList.toggle("showContentOne");
    textOne.classList.toggle("hideText");
    arrow[0].classList.toggle("hideArrow");
    setTimeout(()=> {
    textOne.classList.toggle("hideText")
    textOne.classList.toggle("textOne");
    main.style.justifyContent = "center";
    showOne();
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
    }, 500)
}

function arrowHideTwo() {
    textTwo.classList.toggle("showContentOne");
    textTwo.classList.toggle("hideText");
    arrow[1].classList.toggle("hideArrow");
    setTimeout(()=> {
    textTwo.classList.toggle("hideText")
    textTwo.classList.toggle("textTwo");
    main.style.justifyContent = "center";
    showTwo();
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
    }, 500)
}

function arrowHideThree() {
    textThree.classList.toggle("showContentOne");
    textThree.classList.toggle("hideText");
    arrow[2].classList.toggle("hideArrow");
    setTimeout(()=> {
    textThree.classList.toggle("hideText")
    textThree.classList.toggle("textThree");
    main.style.justifyContent = "center";
    showThree();
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
    }, 500)
}

function arrowHideFour() {
    textFour.classList.toggle("showContentOne");
    textFour.classList.toggle("hideText");
    arrow[3].classList.toggle("hideArrow");
    setTimeout(()=> {
    textFour.classList.toggle("hideText")
    textFour.classList.toggle("textFour");
    main.style.justifyContent = "center";
    showFour();
    content[0].classList.toggle("showContent");
    content[1].classList.toggle("showContent");
    content[2].classList.toggle("showContent");
    content[3].classList.toggle("showContent");
    }, 500)
}