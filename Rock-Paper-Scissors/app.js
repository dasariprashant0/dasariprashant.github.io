const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const ResultDisplay = document.getElementById('result');

const PossibleChoices = document.querySelectorAll('button');
let UserChoice
let computerChoice
let result

PossibleChoices.forEach(PossibleChoices => PossibleChoices.addEventListener('click', (e) => {
    UserChoice = e.target.id
    UserChoiceDisplay.innerHTML = UserChoice
    GenerateComputerChoice()
    getResult()
}));

function GenerateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if(randomNumber === 3) {
        computerChoice = 'scissors'
    }
    ComputerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === UserChoice) {
        result = "Its a Draw!"
    }
    if (computerChoice === 'rock' && UserChoice === 'paper') {
        result = "You Win!"
    }
    if (computerChoice === 'rock' && UserChoice === 'scissors') {
        result = "You Lose!"
    }
    if (computerChoice === 'paper' && UserChoice === 'scissors') {
        result = "You Win!"
    }
    if (computerChoice === 'paper' && UserChoice === 'rock') {
        result = "You Lose!"
    }
    if (computerChoice === 'scissors' && UserChoice === 'paper') {
        result = "You Lose!"
    }
    ResultDisplay.innerHTML = result;
}