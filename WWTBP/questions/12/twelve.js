const questiontwelveAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswertwelveA = document.getElementById('question-twelve-id-a');
const AnswertwelveB = document.getElementById('question-twelve-id-b');
const AnswertwelveC = document.getElementById('question-twelve-id-c');
const AnswertwelveD = document.getElementById('question-twelve-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('twelveSum');
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


AnswertwelveA.addEventListener('click', AnswerOne);
AnswertwelveB.addEventListener('click', AnswerTwo);
AnswertwelveC.addEventListener('click', answerThree);
AnswertwelveD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questiontwelveAnswers["id-a"] === 'A') {
        AnswertwelveA.removeEventListener('click', AnswerOne);
        AnswertwelveB.removeEventListener('click', AnswerTwo);
        AnswertwelveC.removeEventListener('click', answerThree);
        AnswertwelveD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertwelveA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questiontwelveAnswers["id-b"] === 'B') {
        AnswertwelveB.removeEventListener('click', AnswerTwo);
        AnswertwelveA.removeEventListener('click', AnswerOne);
        AnswertwelveC.removeEventListener('click', answerThree);
        AnswertwelveD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertwelveB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questiontwelveAnswers["id-c"] === 'C') {
        AnswertwelveA.removeEventListener('click', AnswerOne);
        AnswertwelveB.removeEventListener('click', AnswerTwo);
        AnswertwelveD.removeEventListener('click', answerFour);
        AnswertwelveC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertwelveC.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questiontwelveAnswers['id-d'] === 'D') {
        AnswertwelveA.removeEventListener('click', AnswerOne);
        AnswertwelveB.removeEventListener('click', AnswerTwo);
        AnswertwelveC.removeEventListener('click', answerThree);
        AnswertwelveD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswertwelveD.style.background = 'green';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '125 000$';
    }

    setTimeout(function () {
        location.href = '../13/index.html';
    }, 2000)

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
    AnswertwelveA.removeEventListener('click', AnswerOne);
    AnswertwelveD.removeEventListener('click', answerFour);
    AnswertwelveC.removeEventListener('click', answerThree);
    AnswertwelveB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}