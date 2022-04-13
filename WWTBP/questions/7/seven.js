const questionsevenAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswersevenA = document.getElementById('question-seven-id-a');
const AnswersevenB = document.getElementById('question-seven-id-b');
const AnswersevenC = document.getElementById('question-seven-id-c');
const AnswersevenD = document.getElementById('question-seven-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('sevenSum');
const choiceA = document.querySelector('.choice-a');
const choiceB = document.querySelector('.choice-b');
const choiceC = document.querySelector('.choice-c');
const choiceD = document.querySelector('.choice-d');
const answerA = document.getElementById('answer-a')
const answerB = document.getElementById('answer-b')
const answerC = document.getElementById('answer-c')
const answerD = document.getElementById('answer-d')
const removetheAnswer = document.getElementById('removeAnswer');
const tryagain = document.getElementById('tryAgainButton')


AnswersevenA.addEventListener('click', AnswerOne);
AnswersevenB.addEventListener('click', AnswerTwo);
AnswersevenC.addEventListener('click', answerThree);
AnswersevenD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionsevenAnswers["id-a"] === 'A') {
        AnswersevenA.removeEventListener('click', AnswerOne);
        AnswersevenB.removeEventListener('click', AnswerTwo);
        AnswersevenC.removeEventListener('click', answerThree);
        AnswersevenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswersevenA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionsevenAnswers["id-b"] === 'B') {
        AnswersevenB.removeEventListener('click', AnswerTwo);
        AnswersevenA.removeEventListener('click', AnswerOne);
        AnswersevenC.removeEventListener('click', answerThree);
        AnswersevenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswersevenB.style.background = 'green';
        choiceB.style.color = 'white';
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '4 000$';

    }
    setTimeout(function () {
        location.href = '../8/index.html';

    }, 2000);
    
}

function answerThree() {
    if (questionsevenAnswers["id-c"] === 'C') {
        AnswersevenA.removeEventListener('click', AnswerOne);
        AnswersevenB.removeEventListener('click', AnswerTwo);
        AnswersevenD.removeEventListener('click', answerFour);
        AnswersevenC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswersevenC.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionsevenAnswers['id-d'] === 'D') {
        AnswersevenA.removeEventListener('click', AnswerOne);
        AnswersevenB.removeEventListener('click', AnswerTwo);
        AnswersevenC.removeEventListener('click', answerThree);
        AnswersevenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswersevenD.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';
    }

    setTimeout(function () {
        tryAgain();
    }, 1500)

}

// function removeAnswer() {
//     removetheAnswer.disabled = true;
//     answerB.textContent = '';
//     answerD.textContent = '';
//     AnswerOneB.removeEventListener('click', AnswerOne);
//     AnswerOneD.removeEventListener('click', answerFour);
//     removetheAnswer.style.opacity = '0.5';
// }

// The Try Again Button

function tryAgain() {
    AnswersevenA.removeEventListener('click', AnswerOne);
    AnswersevenD.removeEventListener('click', answerFour);
    AnswersevenC.removeEventListener('click', answerThree);
    AnswersevenB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}