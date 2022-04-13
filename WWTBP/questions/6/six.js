const questionSixAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerSixA = document.getElementById('question-six-id-a');
const AnswerSixB = document.getElementById('question-six-id-b');
const AnswerSixC = document.getElementById('question-six-id-c');
const AnswerSixD = document.getElementById('question-six-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('sixSum');
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


AnswerSixA.addEventListener('click', AnswerOne);
AnswerSixB.addEventListener('click', AnswerTwo);
AnswerSixC.addEventListener('click', answerThree);
AnswerSixD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionSixAnswers["id-a"] === 'A') {
        AnswerSixA.removeEventListener('click', AnswerOne);
        AnswerSixB.removeEventListener('click', AnswerTwo);
        AnswerSixC.removeEventListener('click', answerThree);
        AnswerSixD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerSixA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionSixAnswers["id-b"] === 'B') {
        AnswerSixB.removeEventListener('click', AnswerTwo);
        AnswerSixA.removeEventListener('click', AnswerOne);
        AnswerSixC.removeEventListener('click', answerThree);
        AnswerSixD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerSixB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questionSixAnswers["id-c"] === 'C') {
        AnswerSixA.removeEventListener('click', AnswerOne);
        AnswerSixB.removeEventListener('click', AnswerTwo);
        AnswerSixD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerSixC.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '2 000$';
    }
    
    setTimeout(function () {
        location.href = '../7/index.html';

    }, 2000);

}


function answerFour() {
    if (questionSixAnswers['id-d'] === 'D') {
        AnswerSixA.removeEventListener('click', AnswerOne);
        AnswerSixB.removeEventListener('click', AnswerTwo);
        AnswerSixC.removeEventListener('click', answerThree);
        AnswerSixD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerSixD.style.background = 'red';
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
    AnswerSixA.removeEventListener('click', AnswerOne);
    AnswerSixD.removeEventListener('click', answerFour);
    AnswerSixC.removeEventListener('click', answerThree);
    AnswerSixB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}