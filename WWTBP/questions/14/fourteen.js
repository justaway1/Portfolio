const questionfourteenAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerfourteenA = document.getElementById('question-fourteen-id-a');
const AnswerfourteenB = document.getElementById('question-fourteen-id-b');
const AnswerfourteenC = document.getElementById('question-fourteen-id-c');
const AnswerfourteenD = document.getElementById('question-fourteen-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('fourteenSum');
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


AnswerfourteenA.addEventListener('click', AnswerOne);
AnswerfourteenB.addEventListener('click', AnswerTwo);
AnswerfourteenC.addEventListener('click', answerThree);
AnswerfourteenD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionfourteenAnswers["id-a"] === 'A') {
        AnswerfourteenA.removeEventListener('click', AnswerOne);
        AnswerfourteenB.removeEventListener('click', AnswerTwo);
        AnswerfourteenC.removeEventListener('click', answerThree);
        AnswerfourteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerfourteenA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionfourteenAnswers["id-b"] === 'B') {
        AnswerfourteenB.removeEventListener('click', AnswerTwo);
        AnswerfourteenA.removeEventListener('click', AnswerOne);
        AnswerfourteenC.removeEventListener('click', answerThree);
        AnswerfourteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerfourteenB.style.background = 'green';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '500 000$';

    }
    setTimeout(function () {
        location.href = '../15/index.html';

    }, 1500);
    
}

function answerThree() {
    if (questionfourteenAnswers["id-c"] === 'C') {
        AnswerfourteenA.removeEventListener('click', AnswerOne);
        AnswerfourteenB.removeEventListener('click', AnswerTwo);
        AnswerfourteenD.removeEventListener('click', answerFour);
        AnswerfourteenC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerfourteenC.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '32 000$';
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionfourteenAnswers['id-d'] === 'D') {
        AnswerfourteenA.removeEventListener('click', AnswerOne);
        AnswerfourteenB.removeEventListener('click', AnswerTwo);
        AnswerfourteenC.removeEventListener('click', answerThree);
        AnswerfourteenD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerfourteenD.style.background = 'red';
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
    AnswerfourteenA.removeEventListener('click', AnswerOne);
    AnswerfourteenD.removeEventListener('click', answerFour);
    AnswerfourteenC.removeEventListener('click', answerThree);
    AnswerfourteenB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}