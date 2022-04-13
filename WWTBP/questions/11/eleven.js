const questionelevenAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerelevenA = document.getElementById('question-eleven-id-a');
const AnswerelevenB = document.getElementById('question-eleven-id-b');
const AnswerelevenC = document.getElementById('question-eleven-id-c');
const AnswerelevenD = document.getElementById('question-eleven-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('elevenSum');
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


AnswerelevenA.addEventListener('click', AnswerOne);
AnswerelevenB.addEventListener('click', AnswerTwo);
AnswerelevenC.addEventListener('click', answerThree);
AnswerelevenD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionelevenAnswers["id-a"] === 'A') {
        AnswerelevenA.removeEventListener('click', AnswerOne);
        AnswerelevenB.removeEventListener('click', AnswerTwo);
        AnswerelevenC.removeEventListener('click', answerThree);
        AnswerelevenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerelevenA.style.background = 'green';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '64 000$';
    }
    

    setTimeout(function () {
        location.href = '../12/index.html';

    }, 2000);
};



function AnswerTwo() {

    if (questionelevenAnswers["id-b"] === 'B') {
        AnswerelevenB.removeEventListener('click', AnswerTwo);
        AnswerelevenA.removeEventListener('click', AnswerOne);
        AnswerelevenC.removeEventListener('click', answerThree);
        AnswerelevenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerelevenB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questionelevenAnswers["id-c"] === 'C') {
        AnswerelevenA.removeEventListener('click', AnswerOne);
        AnswerelevenB.removeEventListener('click', AnswerTwo);
        AnswerelevenD.removeEventListener('click', answerFour);
        AnswerelevenC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerelevenC.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionelevenAnswers['id-d'] === 'D') {
        AnswerelevenA.removeEventListener('click', AnswerOne);
        AnswerelevenB.removeEventListener('click', AnswerTwo);
        AnswerelevenC.removeEventListener('click', answerThree);
        AnswerelevenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerelevenD.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
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
    AnswerelevenA.removeEventListener('click', AnswerOne);
    AnswerelevenD.removeEventListener('click', answerFour);
    AnswerelevenC.removeEventListener('click', answerThree);
    AnswerelevenB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}