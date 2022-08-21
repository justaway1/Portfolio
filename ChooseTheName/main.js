
//Imports
import { namesA } from "./names.js"
import { namesB } from "./names.js"
import { namesC } from "./names.js"
import { namesD } from "./names.js"
import { namesE } from "./names.js"
import { namesF } from "./names.js"
import { namesG } from "./names.js"
import { namesH } from "./names.js"
import { namesI } from "./names.js"
import { namesJ } from "./names.js"
import { namesK } from "./names.js"
import { namesL } from "./names.js"
import { namesM } from "./names.js"


const button = document.getElementById('search-name');
const mainText = document.getElementById('show-names');
const inputNames = document.getElementById('input-name');

//EVENT Listener
button.addEventListener('click', generateNames);

function checkCondition() {
    if (inputNames.value.length > 1) {
        alert('Please use only 1 letter!');
        return;
    }
    if (inputNames.value === '') {
        alert('We need 1 letter!');
        return;
    }
}

//Function for the names
function generateNames() {

    for (let i = 0; i < namesA.length; i++) {
    }
    if (inputNames.value === 'A' || inputNames.value === 'a') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesA[Math.floor(Math.random() * namesA.length)];
    }
    if (inputNames.value === 'B' || inputNames.value === 'b') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesB[Math.floor(Math.random() * namesB.length)];
    }
    if (inputNames.value === 'C' || inputNames.value === 'c') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesC[Math.floor(Math.random() * namesC.length)];
    }
    if (inputNames.value === 'D' || inputNames.value === 'd') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesD[Math.floor(Math.random() * namesD.length)];
    }
    if (inputNames.value === 'E' || inputNames.value === 'e') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesE[Math.floor(Math.random() * namesE.length)];
    }
    if (inputNames.value === "F" || inputNames.value === "f") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesF[Math.floor(Math.random() * namesF.length)]
    }
    if (inputNames.value === "G" || inputNames.value === "g") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesG[Math.floor(Math.random() * namesG.length)]
    }
    if (inputNames.value === "H" || inputNames.value === "h") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesH[Math.floor(Math.random() * namesH.length)]
    }
    if (inputNames.value === "I" || inputNames.value === "i") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesI[Math.floor(Math.random() * namesI.length)]
    }
    if (inputNames.value === "J" || inputNames.value === "j") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesJ[Math.floor(Math.random() * namesJ.length)]
    }
    if (inputNames.value === "K" || inputNames.value === "k") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesK[Math.floor(Math.random() * namesK.length)]
    }
    if (inputNames.value === "L" || inputNames.value === "l") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesL[Math.floor(Math.random() * namesL.length)]
    }
    if (inputNames.value === "M" || inputNames.value === "m") {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesM[Math.floor(Math.random() * namesM.length)]
    }
    checkCondition();
}




