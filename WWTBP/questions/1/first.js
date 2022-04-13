const questionOneAnswers = {
    'id-a': '120',
    'id-b': '12',
    'id-c': '30',
    'id-d': '72'
};


const AnswerOneA = document.getElementById('question-one-id-a');
const AnswerOneB = document.getElementById('question-one-id-b');
const AnswerOneC = document.getElementById('question-one-id-c');
const AnswerOneD = document.getElementById('question-one-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('firstSum');
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
const removedAnswer = true;





AnswerOneA.addEventListener('click', AnswerOne);
AnswerOneB.addEventListener('click', AnswerTwo);
AnswerOneC.addEventListener('click', answerThree);
AnswerOneD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionOneAnswers["id-a"] === '120') {
        AnswerOneB.removeEventListener('click', AnswerTwo);
        AnswerOneC.removeEventListener('click', answerThree);
        AnswerOneD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerOneA.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '100$';
    }
    

    setTimeout(function () {
        location.href = '../2/index.html';
    }, 2000);
};



function AnswerTwo() {

    if (questionOneAnswers["id-b"] === '12') {
        AnswerOneB.removeEventListener('click', AnswerTwo);
        AnswerOneA.removeEventListener('click', AnswerOne);
        AnswerOneC.removeEventListener('click', answerThree);
        AnswerOneD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerOneB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questionOneAnswers["id-c"] === '30') {
        AnswerOneA.removeEventListener('click', AnswerOne);
        AnswerOneB.removeEventListener('click', AnswerTwo);
        AnswerOneC.removeEventListener('click', answerThree);
        AnswerOneD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerOneC.style.background = 'red';
        choiceC.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$'
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionOneAnswers['id-d'] === '72') {
        AnswerOneA.removeEventListener('click', AnswerOne);
        AnswerOneB.removeEventListener('click', AnswerTwo);
        AnswerOneC.removeEventListener('click', answerThree);
        AnswerOneD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerOneD.style.background = 'red';
        choiceD.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';
    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
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
    AnswerOneA.removeEventListener('click', AnswerOne);
    AnswerOneD.removeEventListener('click', answerFour);
    AnswerOneC.removeEventListener('click', answerThree);
    AnswerOneB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = 'index.html';


    }

}