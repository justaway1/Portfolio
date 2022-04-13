const questionFiveAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerFiveA = document.getElementById('question-five-id-a');
const AnswerFiveB = document.getElementById('question-five-id-b');
const AnswerFiveC = document.getElementById('question-five-id-c');
const AnswerFiveD = document.getElementById('question-five-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('fifthSum');
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


AnswerFiveA.addEventListener('click', AnswerOne);
AnswerFiveB.addEventListener('click', AnswerTwo);
AnswerFiveC.addEventListener('click', answerThree);
AnswerFiveD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionFiveAnswers["id-a"] === 'A') {
        AnswerFiveA.removeEventListener('click', AnswerOne);
        AnswerFiveB.removeEventListener('click', AnswerTwo);
        AnswerFiveC.removeEventListener('click', answerThree);
        AnswerFiveD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFiveA.style.background = 'red';
        choiceA.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';
    }

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionFiveAnswers["id-b"] === 'B') {
        AnswerFiveB.removeEventListener('click', AnswerTwo);
        AnswerFiveA.removeEventListener('click', AnswerOne);
        AnswerFiveC.removeEventListener('click', answerThree);
        AnswerFiveD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFiveB.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';
        secureSum.innerHTML = 'First Savepoint.';

    }
    setTimeout(function () {
        location.href = '../6/index.html';

    }, 4000);

}

function answerThree() {
    if (questionFiveAnswers["id-c"] === 'C') {
        AnswerFiveA.removeEventListener('click', AnswerOne);
        AnswerFiveB.removeEventListener('click', AnswerTwo);
        AnswerFiveC.removeEventListener('click', answerThree);
        AnswerFiveD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFiveC.style.background = 'red';
        choiceC.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$'
    }

    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionFiveAnswers['id-d'] === 'D') {
        AnswerFiveA.removeEventListener('click', AnswerOne);
        AnswerFiveB.removeEventListener('click', AnswerTwo);
        AnswerFiveC.removeEventListener('click', answerThree);
        AnswerFiveD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFiveD.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';
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
    AnswerFiveA.removeEventListener('click', AnswerOne);
    AnswerFiveD.removeEventListener('click', answerFour);
    AnswerFiveC.removeEventListener('click', answerThree);
    AnswerFiveB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}