const questionfifteenAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerFifteenA = document.getElementById('question-fifteen-id-a');
const AnswerFifteenB = document.getElementById('question-fifteen-id-b');
const AnswerFifteenC = document.getElementById('question-fifteen-id-c');
const AnswerFifteenD = document.getElementById('question-fifteen-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('fifteenSum');
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
const secureSum = document.getElementById('firstSecureSum');


AnswerFifteenA.addEventListener('click', AnswerOne);
AnswerFifteenB.addEventListener('click', AnswerTwo);
AnswerFifteenC.addEventListener('click', answerThree);
AnswerFifteenD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionfifteenAnswers["id-a"] === 'A') {
        AnswerFifteenA.removeEventListener('click', AnswerOne);
        AnswerFifteenB.removeEventListener('click', AnswerTwo);
        AnswerFifteenC.removeEventListener('click', answerThree);
        AnswerFifteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFifteenA.style.background = 'purple';
        choiceA.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        answerA.style.color = 'white';
        showcash.innerHTML = 'Thank you for playing!';
    }

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionfifteenAnswers["id-b"] === 'B') {
        AnswerFifteenB.removeEventListener('click', AnswerTwo);
        AnswerFifteenA.removeEventListener('click', AnswerOne);
        AnswerFifteenC.removeEventListener('click', answerThree);
        AnswerFifteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFifteenB.style.background = 'orange';
        showcash.setAttribute('id', 'showingMoney');
        answerB.style.color = 'white';
        showcash.innerHTML = 'Thank you for playing!';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);

}

function answerThree() {
    if (questionfifteenAnswers["id-c"] === 'C') {
        AnswerFifteenA.removeEventListener('click', AnswerOne);
        AnswerFifteenB.removeEventListener('click', AnswerTwo);
        AnswerFifteenC.removeEventListener('click', answerThree);
        AnswerFifteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFifteenC.style.background = 'blue';
        choiceC.style.color = 'white';
        answerC.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = 'Thank you for playing!';
    }

    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionfifteenAnswers['id-d'] === 'D') {
        AnswerFifteenA.removeEventListener('click', AnswerOne);
        AnswerFifteenB.removeEventListener('click', AnswerTwo);
        AnswerFifteenC.removeEventListener('click', answerThree);
        AnswerFifteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFifteenD.style.background = 'green';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '1 000 000$';
        secureSum.innerHTML = 'Congratulation for winning the big Prize!';
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
    AnswerFifteenA.removeEventListener('click', AnswerOne);
    AnswerFifteenD.removeEventListener('click', answerFour);
    AnswerFifteenC.removeEventListener('click', answerThree);
    AnswerFifteenB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}