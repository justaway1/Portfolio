const questionthirteenAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerthirteenA = document.getElementById('question-thirteen-id-a');
const AnswerthirteenB = document.getElementById('question-thirteen-id-b');
const AnswerthirteenC = document.getElementById('question-thirteen-id-c');
const AnswerthirteenD = document.getElementById('question-thirteen-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('thirteenSum');
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


AnswerthirteenA.addEventListener('click', AnswerOne);
AnswerthirteenB.addEventListener('click', AnswerTwo);
AnswerthirteenC.addEventListener('click', answerThree);
AnswerthirteenD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionthirteenAnswers["id-a"] === 'A') {
        AnswerthirteenA.removeEventListener('click', AnswerOne);
        AnswerthirteenB.removeEventListener('click', AnswerTwo);
        AnswerthirteenC.removeEventListener('click', answerThree);
        AnswerthirteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerthirteenA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionthirteenAnswers["id-b"] === 'B') {
        AnswerthirteenB.removeEventListener('click', AnswerTwo);
        AnswerthirteenA.removeEventListener('click', AnswerOne);
        AnswerthirteenC.removeEventListener('click', answerThree);
        AnswerthirteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerthirteenB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questionthirteenAnswers["id-c"] === 'C') {
        AnswerthirteenA.removeEventListener('click', AnswerOne);
        AnswerthirteenB.removeEventListener('click', AnswerTwo);
        AnswerthirteenD.removeEventListener('click', answerFour);
        AnswerthirteenC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerthirteenC.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionthirteenAnswers['id-d'] === 'D') {
        AnswerthirteenA.removeEventListener('click', AnswerOne);
        AnswerthirteenB.removeEventListener('click', AnswerTwo);
        AnswerthirteenC.removeEventListener('click', answerThree);
        AnswerthirteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerthirteenD.style.background = 'green';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '250 000$';
    }

    setTimeout(function () {
        location.href = '../14/index.html';
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
    AnswerthirteenA.removeEventListener('click', AnswerOne);
    AnswerthirteenD.removeEventListener('click', answerFour);
    AnswerthirteenC.removeEventListener('click', answerThree);
    AnswerthirteenB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}