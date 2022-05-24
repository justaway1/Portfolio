

//THE GLOBAL VARIABLES

let namesA = ["Ava", "Amelia",
    'Abigail', 'Avery',
    'Aria', 'Aubrey',
    'Addison', 'Audrey',
    'Aurora', 'Anna',
    'Aaliyah', 'Allison',
    'Adeline', 'Alexa',
    'Autumn', 'Aubree',
    'Arianna', 'Adalynn',
    'Annabelle', 'Alexandra',
    'Ashley', 'Athena',
    'Andrea', 'Alyssa',
    'Adalyn', 'Arya',
    'Ariel', 'Alexis',
    'Aliyah', 'Arabella',
    'Anastasia', 'Amy',
    'Amaya', 'Adaline',
    'Alaina', 'Alina',
    'Angelina', 'Adelyn',
    'Amara', 'Ana',
    'Alana', 'Adriana',
    'Alayna', 'Ayla',
    'Angela', 'Alivia',
    'Alexandria', 'Amiyah',
    'Amina', 'Adelaide',
    'Aniyah', 'Ariella',
    'Annie', 'Adelynn',
    'Alessandra', 'Amira',
    'Arielle', 'Ada',
    'Ariah', 'Aspen',
    'Allie', 'Amanda',
    'Angel', 'Ainsley',
    'Alicia', 'Alondra',
    'Adrianna', 'Addilyn',
    'Alison', 'Annalise',
    'Averie', 'Amber',
    'Alexia', 'Anaya',
    'Amari', 'Ariyah',
    'Aylin', 'Alani',
    'Abby', 'April',
    'Aviana', 'Annabella',
    'Ashlyn', 'Avianna',
    'Allyson', 'Alejandra',
    'Adelina', 'Ashlynn',
    'Aleah', 'Alayah',
    'Angelica', 'Alanna',
    'Addyson', 'Aleena',
    'Aisha', 'Aubrie',
    'Anne', 'Azalea'];

let namesB = [
    'Benjamin', 'Brayden',
    'Bryson', 'Bennett',
    'Brooks', 'Braxton',
    'Bentley', 'Beau',
    'Brandon', 'Brody',
    'Blake', 'Bryce',
    'Bella', 'Brooklyn',
    'Brielle', 'Brianna',
    'Bailey', 'Blakely',
    'Brynlee', 'Brooke',
    'Blake', 'Brooklynn'];
let namesC = [
    'Charlotte', 'Camila',
    'Chloe', 'Claire',
    'Caroline', 'Cora',
    'Clara', 'Charlie',
    'Cecilia', 'Callie',
    'Catalina', 'Catherine',
    'Carter', 'Christopher',
    'Charles', 'Caleb',
    'Christian', 'Colton',
    'Cameron', 'Connor',
    'Cooper', 'Carson',
    'Chase', 'Cole'];
let namesD = [
    'Daniel', 'David',
    'Dylan', 'Dominic',
    'Declan', 'Damian',
    'Diego', 'Dean',
    'Dawson', 'Daxton',
    'Delilah', 'Daisy',
    'Diana', 'Daniela',
    'Dakota', 'Delaney',
    'Destiny', 'Daleyza']
let namesE = ['Eleonora'];
// let alphabets = ['A', 'B', 'C', 'D', 'E', 'F'];
const button = document.getElementById('search-name');
const mainText = document.getElementById('show-names');
const inputNames = document.getElementById('input-name');

//EVENT Listener
button.addEventListener('click', generateNames);

function checkCondition() {
    if (inputNames.value.length > 1) {
        alert('Please use only 1 letter!');
        inputNames.value = '';
        mainText.innerHTML = '';
        return;
    }
    if (inputNames.value === '') {
        mainText.innerHTML = 'We need 1 letter!'
        setTimeout(function () {
            mainText.innerHTML = '';
        }, 1500)
        return;
    }
}

//Function for the names
function generateNames() {

    // let nameTypes = Object.keys(allNames);
    // let rndNumber = randomNameGenerator(nameTypes);
    // let rndName = nameTypes[rndNumber];
    // let rndNameNumber = randomNameGenerator(allNames[rndName]);
    // let rndNameAnswer = allNames[rndName][rndNameNumber];


    for (let i = 0; i < namesA.length; i++) {
        // if (inputNames.value === alphabets.find((word) => word === inputNames.value)) {
        //     mainText.setAttribute('id', 'showNames');
        //     mainText.innerHTML = namesA[Math.floor(Math.random() * namesA.length)]
    }
    if (inputNames.value === 'A' || inputNames.value === 'a') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesA[Math.floor(Math.random() * namesA.length)];
    }
    if (inputNames.value === 'B' || inputNames.value === 'b') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesB[Math.floor(Math.random() * namesB.length)];
    }
    if (inputNames.value === 'C' || inputNames.value === 'c') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesC[Math.floor(Math.random() * namesC.length)];
    }
    if (inputNames.value === 'D' || inputNames.value === 'd') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesD[Math.floor(Math.random() * namesD.length)];
    }
    if (inputNames.value === 'E' || inputNames.value === 'e') {
        mainText.setAttribute('id', 'showNames');
        mainText.innerHTML = namesE[Math.floor(Math.random() * namesE.length)];
    }
    checkCondition();
}







//Function That check conditions!


// function randomNameGenerator(object) {
//     return [Math.floor(Math.random() * object.length)]
// }


// console.log(generateNames());

// const randomAnswers = {
//     goodAnswers: ['yes', 'Absolutely', 'certainly', "I'm sure", 'HELL YES'],
//     maybes: ['maybe', 'probably', 'perhaps', "honestly man, i really don't know this one"],
//     badAnswers: ['LOL NO', 'no way man', 'maybe', "forget it", 'HELL no', 'Are you serious?']
// };

// function randomNumber(subject) {
//     return [Math.floor(Math.random() * subject.length)];
// }

// const types = Object.keys(randomAnswers); // Types става = goodAnswers, maybes, badAnswers
// console.log(types);
// const randomTypeNumber = randomNumber(types); //Random number from 0 - 3 from goodAnswers, maybes, badAnshwers
// console.log(randomTypeNumber);
// const randomType = types[randomTypeNumber];
// console.log(randomType)
// const randomAnswerNumber = randomNumber(randomAnswers[randomType]);
// console.log(randomAnswerNumber);
// const randomAnswer = randomAnswers[randomType][randomAnswerNumber];
// console.log(randomAnswer);

// console.log({ randomAnswer });


