const firstDiv = document.querySelector(".aboutme");
const secendDiv = document.querySelector(".experience");
const thirdDiv = document.querySelector(".skills");
const fourdDiv = document.querySelector(".latter");
const main = document.querySelector(".main");
const arrow = document.querySelector(".main i");
const one = document.querySelector(".one");
const oneText = document.querySelector(".one p");

function hide(){
    firstDiv.style.transition = "height 0.5s, font-size 0.25s";
    firstDiv.style.height = "0";
    firstDiv.style.fontSize = "0";
    secendDiv.style.transition = "height 0.5s, font-size 0.25s";
    secendDiv.style.height = "0";
    secendDiv.style.fontSize = "0";
    thirdDiv.style.transition = "height 0.5s, font-size 0.25s";
    thirdDiv.style.height = "0";
    thirdDiv.style.fontSize = "0"
    fourdDiv.style.transition = "height 0.5s, font-size 0.25s";
    fourdDiv.style.height = "0";
    fourdDiv.style.fontSize = "0";
    setTimeout(()=>{
        firstDiv.style.border = "0"
        secendDiv.style.border = "0"
        thirdDiv.style.border = "0"
        fourdDiv.style.border = "0"
    }, 499)
    }

function arrowShow() {
    arrow.style.transition = "font-size 0.5s";
    arrow.style.fontSize = "48px";
    arrow.style.marginTop = "20px";
    arrow.style.marginLeft = "30px";
    arrow.style.display = "block";
}

function arrowHide() {
    arrow.style.transition = "font-size 0.5s";
    arrow.style.fontSize = "0";
    one.style.transition = "font-size 0.5s";
    one.style.fontSize = "0";
    oneText.style.transition = "font-size 0.5s";
    oneText.style.fontSize = "0";
    setTimeout(()=>{
        one.style.display = "none";
        firstDiv.style.border = "5px solid #5C11BC";
        secendDiv.style.border = "5px solid #5C11BC";
        thirdDiv.style.border = "5px solid #5C11BC";
        fourdDiv.style.border = "5px solid #5C11BC";
        firstDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s";
        secendDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s";
        thirdDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s";
        fourdDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s";
        firstDiv.style.height = "280px";
        firstDiv.style.fontSize = "48px";
        secendDiv.style.height = "280px";
        secendDiv.style.fontSize = "48px";
        thirdDiv.style.height = "280px";
        thirdDiv.style.fontSize = "48px";
        fourdDiv.style.height = "280px";
        fourdDiv.style.fontSize = "48px";
        main.style.justifyContent = "center";
        arrow.style.marginTop = "0";
        arrow.style.marginLeft = "0";
    },500)
}

function aboutme() {
    hide();
    //one.style.transition = "font-size 0.5s";
    //oneText.style.transition = "font-size 0.5s";
    setTimeout(()=>{
        arrowShow();
        //one.style.transition = "width 0.5s, height 0.5s, padding 0.5s, font-size 0.5s";
        one.style.width = "1090px";
        one.style.height = "532px";
        one.style.padding = "0 20px";
        one.style.fontSize = "48px";
        one.style.display = "block";
        oneText.style.fontSize = "36px";
        main.style.justifyContent = "flex-start";
    },500)
}

function experience() {
    hide();
    arrowShow();
}

function skills() {
    hide();
    arrowShow();
}

function latter() {
    hide();
    arrowShow();
}