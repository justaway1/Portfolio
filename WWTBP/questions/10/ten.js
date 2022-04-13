const questiontenAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswertenA = document.getElementById('question-ten-id-a');
const AnswertenB = document.getElementById('question-ten-id-b');
const AnswertenC = document.getElementById('question-ten-id-c');
const AnswertenD = document.getElementById('question-ten-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('tenSum');
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


AnswertenA.addEventListener('click', AnswerOne);
AnswertenB.addEventListener('click', AnswerTwo);
AnswertenC.addEventListener('click', answerThree);
AnswertenD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questiontenAnswers["id-a"] === 'A') {
        AnswertenA.removeEventListener('click', AnswerOne);
        AnswertenB.removeEventListener('click', AnswerTwo);
        AnswertenC.removeEventListener('click', answerThree);
        AnswertenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertenA.style.background = 'red';
        choiceA.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';
    }

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questiontenAnswers["id-b"] === 'B') {
        AnswertenB.removeEventListener('click', AnswerTwo);
        AnswertenA.removeEventListener('click', AnswerOne);
        AnswertenC.removeEventListener('click', answerThree);
        AnswertenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertenB.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);

}

function answerThree() {
    if (questiontenAnswers["id-c"] === 'C') {
        AnswertenA.removeEventListener('click', AnswerOne);
        AnswertenB.removeEventListener('click', AnswerTwo);
        AnswertenC.removeEventListener('click', answerThree);
        AnswertenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertenC.style.background = 'green';
        choiceC.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '32 000$'
        secureSum.innerHTML = 'Second Savepoint.';  
    }

    setTimeout(function () {
        location.href = '../11/index.html';

    }, 4000);

}


function answerFour() {
    if (questiontenAnswers['id-d'] === 'D') {
        AnswertenA.removeEventListener('click', AnswerOne);
        AnswertenB.removeEventListener('click', AnswerTwo);
        AnswertenC.removeEventListener('click', answerThree);
        AnswertenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertenD.style.background = 'red';
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
    AnswertenA.removeEventListener('click', AnswerOne);
    AnswertenD.removeEventListener('click', answerFour);
    AnswertenC.removeEventListener('click', answerThree);
    AnswertenB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}