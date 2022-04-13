const questionFourAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerFourA = document.getElementById('question-four-id-a');
const AnswerFourB = document.getElementById('question-four-id-b');
const AnswerFourC = document.getElementById('question-four-id-c');
const AnswerFourD = document.getElementById('question-four-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('fourthSum');
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


AnswerFourA.addEventListener('click', AnswerOne);
AnswerFourB.addEventListener('click', AnswerTwo);
AnswerFourC.addEventListener('click', answerThree);
AnswerFourD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionFourAnswers["id-a"] === 'A') {
        AnswerFourA.removeEventListener('click', AnswerOne);
        AnswerFourB.removeEventListener('click', AnswerTwo);
        AnswerFourC.removeEventListener('click', answerThree);
        AnswerFourD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFourA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionFourAnswers["id-b"] === 'B') {
        AnswerFourB.removeEventListener('click', AnswerTwo);
        AnswerFourA.removeEventListener('click', AnswerOne);
        AnswerFourC.removeEventListener('click', answerThree);
        AnswerFourD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFourB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questionFourAnswers["id-c"] === 'C') {
        AnswerFourA.removeEventListener('click', AnswerOne);
        AnswerFourB.removeEventListener('click', AnswerTwo);
        AnswerFourC.removeEventListener('click', answerThree);
        AnswerFourD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFourC.style.background = 'red';
        choiceC.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$'
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionFourAnswers['id-d'] === 'D') {
        AnswerFourA.removeEventListener('click', AnswerOne);
        AnswerFourB.removeEventListener('click', AnswerTwo);
        AnswerFourC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerFourD.style.background = 'green';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '400$';
    }

    setTimeout(function () {
        location.href = '../5/index.html';
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
    AnswerFourA.removeEventListener('click', AnswerOne);
    AnswerFourD.removeEventListener('click', answerFour);
    AnswerFourC.removeEventListener('click', answerThree);
    AnswerFourB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}