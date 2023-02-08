const firstDiv = document.querySelector(".aboutme");
const secendDiv = document.querySelector(".experience");
const thirdDiv = document.querySelector(".skills");
const fourdDiv = document.querySelector(".latter");
const main = document.querySelector(".main");
const arrow = document.querySelector(".main i");
const one = document.querySelector(".one");
const oneText = document.querySelector(".one p");

function hide(){
    firstDiv.style.transition = "height 0.5s, font-size 0.25s, opacity 0.5s";
    firstDiv.style.height = "0";
    firstDiv.style.fontSize = "0";
    firstDiv.style.opacity = "0";
    secendDiv.style.transition = "height 0.5s, font-size 0.25s, opacity 0.5s";
    secendDiv.style.height = "0";
    secendDiv.style.fontSize = "0";
    secendDiv.style.opacity = "0";
    thirdDiv.style.transition = "height 0.5s, font-size 0.25s, opacity 0.5s";
    thirdDiv.style.height = "0";
    thirdDiv.style.fontSize = "0"
    thirdDiv.style.opacity = "0";
    fourdDiv.style.transition = "height 0.5s, font-size 0.25s, opacity 0.5s";
    fourdDiv.style.height = "0";
    fourdDiv.style.fontSize = "0";
    fourdDiv.style.opacity = "0";
    setTimeout(()=>{
        firstDiv.style.border = "0"
        secendDiv.style.border = "0"
        thirdDiv.style.border = "0"
        fourdDiv.style.border = "0"
        firstDiv.style.width = "0"
        secendDiv.style.width = "0"
        thirdDiv.style.width = "0"
        fourdDiv.style.width = "0"
    }, 499)
    }

function arrowShow() {
    arrow.style.transition = "opacity 0.5s, color 0.5s";
    arrow.style.opacity = "1";
    arrow.style.color = "white";
    arrow.style.fontSize = "48px";
    arrow.style.marginTop = "20px";
    arrow.style.marginLeft = "30px";
    arrow.style.opacity = "1";
}

function arrowHide() {
    arrow.style.transition = "opacity 0.5s";
    arrow.style.opacity = "0";
    arrow.style.color = "#5C11BC";
    one.style.transition = "opacity 0.5s";
    one.style.opacity = "0";
    oneText.style.transition = "opacity 0.5s";
    oneText.style.opacity = "0";
    setTimeout(()=>{
        firstDiv.style.border = "5px solid #5C11BC";
        secendDiv.style.border = "5px solid #5C11BC";
        thirdDiv.style.border = "5px solid #5C11BC";
        fourdDiv.style.border = "5px solid #5C11BC";
        firstDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s, opacity 0.5s";
        secendDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s, opacity 0.5s";
        thirdDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s, opacity 0.5s";
        fourdDiv.style.transition = "height 0.5s, font-size 0.25s, background 1s, opacity 0.5s";
        firstDiv.style.height = "280px";
        firstDiv.style.width = "530px";
        firstDiv.style.fontSize = "48px";
        firstDiv.style.opacity = "1";
        secendDiv.style.height = "280px";
        secendDiv.style.width = "530px";
        secendDiv.style.fontSize = "48px";
        secendDiv.style.opacity = "1";
        thirdDiv.style.height = "280px";
        thirdDiv.style.width = "530px";
        thirdDiv.style.fontSize = "48px";
        thirdDiv.style.opacity = "1";
        fourdDiv.style.height = "280px";
        fourdDiv.style.width = "530px";
        fourdDiv.style.fontSize = "48px";
        fourdDiv.style.opacity = "1";
        main.style.justifyContent = "center";
        arrow.style.marginTop = "0";
        arrow.style.marginLeft = "0";
    },500)
}

function aboutme() {
    hide();
    one.style.transition = "font-size 0.5s";
    oneText.style.transition = "font-size 0.5s";
    setTimeout(()=>{
        arrowShow();
        one.style.width = "1090px";
        one.style.height = "532px";
        one.style.padding = "0 20px";
        one.style.fontSize = "48px";
        oneText.style.fontSize = "36px";
        oneText.style.opacity = "1";
        one.style.opacity = "1";
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