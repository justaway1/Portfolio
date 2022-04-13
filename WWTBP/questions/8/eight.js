const questioneightAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswereightA = document.getElementById('question-eight-id-a');
const AnswereightB = document.getElementById('question-eight-id-b');
const AnswereightC = document.getElementById('question-eight-id-c');
const AnswereightD = document.getElementById('question-eight-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('eightSum');
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


AnswereightA.addEventListener('click', AnswerOne);
AnswereightB.addEventListener('click', AnswerTwo);
AnswereightC.addEventListener('click', answerThree);
AnswereightD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questioneightAnswers["id-a"] === 'A') {
        AnswereightA.removeEventListener('click', AnswerOne);
        AnswereightB.removeEventListener('click', AnswerTwo);
        AnswereightC.removeEventListener('click', answerThree);
        AnswereightD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswereightA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questioneightAnswers["id-b"] === 'B') {
        AnswereightB.removeEventListener('click', AnswerTwo);
        AnswereightA.removeEventListener('click', AnswerOne);
        AnswereightC.removeEventListener('click', answerThree);
        AnswereightD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswereightB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questioneightAnswers["id-c"] === 'C') {
        AnswereightA.removeEventListener('click', AnswerOne);
        AnswereightB.removeEventListener('click', AnswerTwo);
        AnswereightD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswereightC.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '8 000$';
    }
    
    setTimeout(function () {
        location.href = '../9/index.html';

    }, 1500);

}


function answerFour() {
    if (questioneightAnswers['id-d'] === 'D') {
        AnswereightA.removeEventListener('click', AnswerOne);
        AnswereightB.removeEventListener('click', AnswerTwo);
        AnswereightC.removeEventListener('click', answerThree);
        AnswereightD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswereightD.style.background = 'red';
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
    AnswereightA.removeEventListener('click', AnswerOne);
    AnswereightD.removeEventListener('click', answerFour);
    AnswereightC.removeEventListener('click', answerThree);
    AnswereightB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}