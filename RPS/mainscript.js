//Const variables

const result = document.getElementById('result-win');
const resultWithWhat = document.getElementById('result-withWhat')
const humanWeapon = document.getElementById('human-weapon');
const cpuWeapon = document.getElementById('cpu-weapon');
const humanScore = document.getElementById('human-score');
const cpuScore = document.getElementById('cpu-score');



//Main Logic functions

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
rock.addEventListener('click', handleRock);
paper.addEventListener('click', handlePaper);
scissor.addEventListener('click', handleScissor);

//CPU RNG Generator from 1 to 3
function computerChoice() {
    return Math.floor(1 + Math.random() * 3)
}

let playerScore = 0;
let computerScore = 0;


//ROCK EVENT HANDLER
function handleRock(e, cpuChoice) {
    cpuChoice = computerChoice();


    if (e.target === rock) {
        humanWeapon.innerHTML = "<img src='./images/rock.png'>"
        humanWeapon.classList.add('selectedImage');

    }
    if (cpuChoice === 1) {
        cpuWeapon.innerHTML = "<img src='./images/rock.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `It's a Tie`
        resultWithWhat.innerHTML = `Rock with Rock`

    } if (cpuChoice === 2) {
        cpuWeapon.innerHTML = "<img src='./images/paper.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `You Lost!`
        resultWithWhat.innerHTML = `Paper beats Rock!`
        computerScore++;
        cpuScore.innerHTML = `Computer Score: ${computerScore}`;

    } if (cpuChoice === 3) {
        cpuWeapon.innerHTML = "<img src='./images/scissor.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `You Won!`
        playerScore++;
        resultWithWhat.innerHTML = `Rock beats Scissors!`
        humanScore.innerHTML = `Human Score: ${playerScore}`;

    }
}

//PAPER EVENT HANDLER
function handlePaper(e, cpuChoice) {
    cpuChoice = computerChoice();

    if (e.target === paper) {
        humanWeapon.innerHTML = "<img src='./images/paper.png'>"
        humanWeapon.classList.add('selectedImage')

    } if (cpuChoice === 1) {
        cpuWeapon.innerHTML = "<img src='./images/rock.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `You Won!`
        playerScore++;
        resultWithWhat.innerHTML = `Paper beats Rock!`
        humanScore.innerHTML = `Human Score: ${playerScore}`

    } else if (cpuChoice === 2) {
        cpuWeapon.innerHTML = "<img src='./images/paper.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `It's a Tie!`
        resultWithWhat.innerHTML = `Paper with Paper!`

    } else if (cpuChoice === 3) {
        cpuWeapon.innerHTML = "<img src='./images/scissor.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `You Lost!`
        computerScore++
        resultWithWhat.innerHTML = `Scissors beats Paper!`
        cpuScore.innerHTML = `Computer Score: ${computerScore}`
    }

}

//SCISSOR EVENT HANDLER
function handleScissor(e, cpuChoice) {
    cpuChoice = computerChoice();

    if (e.target === scissor) {
        humanWeapon.innerHTML = "<img src='./images/scissor.png'>"
        humanWeapon.classList.add('selectedImage')

    } if (cpuChoice === 1) {
        cpuWeapon.innerHTML = "<img src='./images/rock.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `You Lost!`
        computerScore++
        resultWithWhat.innerHTML = `Rock beats Scissors!`
        cpuScore.innerHTML = `Computer Score: ${computerScore}`

    } else if (cpuChoice === 2) {
        cpuWeapon.innerHTML = "<img src='./images/paper.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `You Won!`
        playerScore++;
        resultWithWhat.innerHTML = `Scissors beats Paper!`
        humanScore.innerHTML = `Human Score: ${playerScore}`

    } else if (cpuChoice === 3) {
        cpuWeapon.innerHTML = "<img src='./images/scissor.png'>"
        cpuWeapon.classList.add('selectedImage');
        result.innerHTML = `It's a Tie!`
        resultWithWhat.innerHTML = `Scissors with Scissors!`
    }
}



