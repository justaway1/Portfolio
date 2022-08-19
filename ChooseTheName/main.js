
//Imports
import { namesA } from "./names.js"
import { namesB } from "./names.js"
import { namesC } from "./names.js"
import { namesD } from "./names.js"
import { namesE } from "./names.js"
import { namesF } from "./names.js"
import { namesG } from "./names.js"
import { namesH } from "./names.js"


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
    checkCondition();
}




