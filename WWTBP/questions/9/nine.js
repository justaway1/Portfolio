const questionnineAnswers = {
    'id-a': 'A',
    'id-b': 'B',
    'id-c': 'C',
    'id-d': 'D'
};


const AnswernineA = document.getElementById('question-nine-id-a');
const AnswernineB = document.getElementById('question-nine-id-b');
const AnswernineC = document.getElementById('question-nine-id-c');
const AnswernineD = document.getElementById('question-nine-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('nineSum');
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


AnswernineA.addEventListener('click', AnswerOne);
AnswernineB.addEventListener('click', AnswerTwo);
AnswernineC.addEventListener('click', answerThree);
AnswernineD.addEventListener('click', answerFour);
// removetheAnswer.addEventListener('click', removeAnswer);

function AnswerOne() {

    if (questionnineAnswers["id-a"] === 'A') {
        AnswernineA.removeEventListener('click', AnswerOne);
        AnswernineB.removeEventListener('click', AnswerTwo);
        AnswernineC.removeEventListener('click', answerThree);
        AnswernineD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswernineA.style.background = 'red';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';
    }
    

    setTimeout(function () {
        tryAgain();

    }, 1500);
};



function AnswerTwo() {

    if (questionnineAnswers["id-b"] === 'B') {
        AnswernineB.removeEventListener('click', AnswerTwo);
        AnswernineA.removeEventListener('click', AnswerOne);
        AnswernineC.removeEventListener('click', answerThree);
        AnswernineD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswernineB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '1000$';

    }
    setTimeout(function () {
        tryAgain();

    }, 1500);
    
}

function answerThree() {
    if (questionnineAnswers["id-c"] === 'C') {
        AnswernineA.removeEventListener('click', AnswerOne);
        AnswernineB.removeEventListener('click', AnswerTwo);
        AnswernineD.removeEventListener('click', answerFour);
        AnswernineC.removeEventListener('click', answerThree);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswernineC.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '16 000$';
    }
    
    setTimeout(function () {
        location.href = '../10/index.html';

    }, 1000);

}


function answerFour() {
    if (questionnineAnswers['id-d'] === 'D') {
        AnswernineA.removeEventListener('click', AnswerOne);
        AnswernineB.removeEventListener('click', AnswerTwo);
        AnswernineC.removeEventListener('click', answerThree);
        AnswernineD.removeEventListener('click', answerFour);
        // removetheAnswer.removeEventListener('click', removeAnswer);
        AnswernineD.style.background = 'red';
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
    AnswernineA.removeEventListener('click', AnswerOne);
    AnswernineD.removeEventListener('click', answerFour);
    AnswernineC.removeEventListener('click', answerThree);
    AnswernineB.removeEventListener('click', AnswerOne);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}