const btnClick = document.getElementById('random-button-1');
const lives = document.getElementById('showLives');
const winner = document.getElementById('winningNumbers');
// The Event Listeners
btnClick.addEventListener('click', generateNumber);
btnClick.addEventListener('click', generateLives);
// btnClick.addEventListener('click', createButton);


// function createButton(){
//     let button = document.createElement('input');
//     button.type = 'button';
//     button.value = 'Try Again'
//     button.classList.add('reseter');
//     button.onclick = reloadPage;

// }

function reloadPage() {
    window.location.reload();
}

// Function for the random Number
function generateNumber() {
    // let tryAgain = createButton();
    let randomNumber = Math.floor(Math.random() * 21);
    document.getElementById('results').innerHTML = randomNumber;
    if (randomNumber === 5 || randomNumber === 15) {
        winner.innerHTML = `Congratulation!<br/>You won with ${randomNumber}`;
        btnClick.disabled = true;
        btnClick.style.opacity = 0.5;
        results.style.display = 'none';
        // document.getElementById('tryAgain').innerHTML = tryAgain;
    }
}

// Function for the showing lives
let live = 6;
function generateLives() {
    live--;
    lives.innerHTML = `${live} LIVES !`;
    lives.style.background = 'limegreen';
    lives.style.color = 'white';

    if (live === 1) {
        lives.innerHTML = `${live} LIFE !!! `;
    }

    if (live === 0) {
        lives.innerHTML = `Game Over`;
        btnClick.disabled = true;
        lives.style.color = 'white';
        lives.style.background = 'red'
        btnClick.style.opacity = 0.5;
        document.getElementById('results').style.display = 'none';
    }

};