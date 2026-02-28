//Declaring constants and a holder for the players choice
const playerRock = document.querySelector('#rock-img');
const playerScissors = document.querySelector('#scissors-img');
const playerPaper = document.querySelector('#paper-img');
let playerChoice = '';

//Getting the button
const playButton = document.querySelector('#play-button');
const computerChoices = ['rock', 'paper', 'scissors'];

//Adding event listeners for rock, paper, and scissors
playerRock.addEventListener('click', setRock);
playerScissors.addEventListener('click', setScissors);
playerPaper.addEventListener('click', setPaper);

//Function to clear rock, paper, scissors so that they dont have the selected border when a new option is chosen
function clearChoice(){
    playerRock.classList.remove('selected');
    playerScissors.classList.remove('selected');
    playerPaper.classList.remove('selected');
}

//sets the players choice to rock
function setRock(){
    clearChoice();

    playerChoice = 'rock';
    playerRock.classList.add('selected');
}

//sets the players choice to scissors
function setScissors(){
    clearChoice();

    playerChoice = 'scissors';
    playerScissors.classList.add('selected');
}

//sets the players choice to paper
function setPaper(){
    clearChoice();

    playerChoice = 'paper';
    playerPaper.classList.add('selected');
}

//event listener to see when the user starts the game
playButton.addEventListener('click', playGame);

function playGame(){
    //Get a random number for the computers throw
    const choiceNumber = Math.floor(Math.random()*3);
    const computerFinal = computerChoices[choiceNumber];

    //Changing the image for the computers throw and adding it to the selected class
    const computerImg = document.querySelector('#computer-img');

    computerImg.src = `Images/${computerFinal}.png`
    computerImg.classList.add('selected');

    //Changing the text to display what the user selected and what the computer selected
    const playerText = document.querySelector('#user-text');
    const computerText = document.querySelector('#computer-text');

    playerText.textContent = "Your throw: " + playerChoice;
    computerText.textContent = "Computers throw: " + computerFinal;
}