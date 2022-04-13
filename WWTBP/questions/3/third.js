const questionThreeAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswerThreeA = document.getElementById('question-three-id-a');
const AnswerThreeB = document.getElementById('question-three-id-b');
const AnswerThreeC = document.getElementById('question-three-id-c');
const AnswerThreeD = document.getElementById('question-three-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('thirdSum');
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


AnswerThreeA.addEventListener('click', AnswerOne);
AnswerThreeB.addEventListener('click', AnswerTwo);
AnswerThreeC.addEventListener('click', answerThree);
AnswerThreeD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionThreeAnswers["id-a"] === 'A') {
        AnswerThreeA.removeEventListener('click', AnswerOne);
        AnswerThreeB.removeEventListener('click', AnswerTwo);
        AnswerThreeC.removeEventListener('click', answerThree);
        AnswerThreeD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerThreeA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionThreeAnswers["id-b"] === 'B') {
        AnswerThreeB.removeEventListener('click', AnswerTwo);
        AnswerThreeA.removeEventListener('click', AnswerOne);
        AnswerThreeC.removeEventListener('click', answerThree);
        AnswerThreeD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerThreeB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questionThreeAnswers["id-c"] === 'C') {
        AnswerThreeA.removeEventListener('click', AnswerOne);
        AnswerThreeB.removeEventListener('click', AnswerTwo);
        AnswerThreeC.removeEventListener('click', answerThree);
        AnswerThreeD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerThreeC.style.background = 'red';
        choiceC.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$'
    }
    
    setTimeout(function () {
        tryAgain();

    }, 1500);

}


function answerFour() {
    if (questionThreeAnswers['id-d'] === 'D') {
        AnswerThreeA.removeEventListener('click', AnswerOne);
        AnswerThreeB.removeEventListener('click', AnswerTwo);
        AnswerThreeC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswerThreeD.style.background = 'green';
        showcash.setAttribute('id', 'showingMoney');
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.innerHTML = '300$';
    }

    setTimeout(function () {
        location.href = '../4/index.html';
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
    AnswerThreeA.removeEventListener('click', AnswerOne);
    AnswerThreeD.removeEventListener('click', answerFour);
    AnswerThreeC.removeEventListener('click', answerThree);
    AnswerThreeB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}