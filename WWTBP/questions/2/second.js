const questionTwoAnswers = {
    'id-a': 'ecma2016',
    'id-b': 'ecma2017',
    'id-c': 'ecma2015',
    'id-d': 'ecma2013'
};

// The Constant variables
const answerTwoA = document.getElementById('question-two-id-a');
const answerTwoB = document.getElementById('question-two-id-b');
const answerTwoC = document.getElementById('question-two-id-c');
const answerTwoD = document.getElementById('question-two-id-d');
const showcash = document.getElementById('theCash');
const sideMoney = document.getElementById('secondSum');
const choiceA = document.querySelector('.choice-a');
const choiceB = document.querySelector('.choice-b');
const choiceC = document.querySelector('.choice-c');
const choiceD = document.querySelector('.choice-d');
const answerA = document.getElementById('answer-a')
const answerB = document.getElementById('answer-b')
const answerC = document.getElementById('answer-c')
const answerD = document.getElementById('answer-d')
const removetheAnswer = document.getElementById('removeAnswer');
let removedAnswer = true;




// The Event Listeners of the variables
answerTwoA.addEventListener('click', answerOne);
answerTwoB.addEventListener('click', answerTwo);
answerTwoC.addEventListener('click', answerThree);
answerTwoD.addEventListener('click', answerFour);
removetheAnswer.addEventListener('click', removeAnswer);


// All the  functions
function answerThree() {

    if (questionTwoAnswers["id-c"] === 'ecma2015') {
        answerTwoB.removeEventListener('click', answerTwo);
        answerTwoA.removeEventListener('click', answerOne);
        answerTwoD.removeEventListener('click', answerFour);
        answerTwoC.style.background = 'green';
        sideMoney.setAttribute('id', 'sidemoney');
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '200$';
    }



    setTimeout(function () {
        location.href = '../3/index.html';
    }, 2000);
};



function answerTwo() {

    if (questionTwoAnswers["id-b"] === 'ecma2017') {
        answerTwoB.removeEventListener('click', answerTwo);
        answerTwoA.removeEventListener('click', answerOne);
        answerTwoD.removeEventListener('click', answerFour);
        answerTwoC.removeEventListener('click', answerThree);
        answerTwoB.style.background = 'red';
        choiceB.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';

    }

    setTimeout(function () {
        tryAgain();
    }, 1500);


}

function answerOne() {
    if (questionTwoAnswers["id-a"] === 'ecma2016') {
        answerTwoB.removeEventListener('click', answerTwo);
        answerTwoA.removeEventListener('click', answerOne);
        answerTwoD.removeEventListener('click', answerFour);
        answerTwoC.removeEventListener('click', answerThree);
        answerTwoA.style.background = 'red';
        choiceA.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';

    }

    setTimeout(function () {
        tryAgain();
    }, 1500);
}


function answerFour() {
    if (questionTwoAnswers['id-d'] === 'ecma2013') {
        answerTwoB.removeEventListener('click', answerTwo);
        answerTwoA.removeEventListener('click', answerOne);
        answerTwoD.removeEventListener('click', answerFour);
        answerTwoC.removeEventListener('click', answerThree);
        answerTwoD.style.background = 'red';
        choiceD.style.color = 'white';
        showcash.setAttribute('id', 'showingMoney');
        showcash.innerHTML = '0$';

    }

    setTimeout(function () {
        tryAgain();
    }, 1500);
}

// // The Joker of Remove Answers
// function removeAnswer() {
//     answerB.textContent = '';
//     answerA.textContent = '';
//     answerTwoB.removeEventListener('click', answerTwo);
//     answerTwoA.removeEventListener('click', answerOne);
//     removetheAnswer.style.opacity = '0.5';
//     removetheAnswer.disabled = true;
// }

// Creating button of Trying Again
function tryAgain() {
    answerTwoB.removeEventListener('click', answerTwo);
    answerTwoA.removeEventListener('click', answerOne);
    answerTwoD.removeEventListener('click', answerFour);
    answerTwoC.removeEventListener('click', answerThree);
    let button = document.createElement('input');
    button.type = 'button';
    button.value = 'Try Again?';
    button.setAttribute('id', 'tryAgain');
    document.getElementById('tryAgainButton').appendChild(button);
    button.onclick = () => {
        location.href = '../1/index.html';


    }

}