//Declaring constants and a holder for the players choice
const playerRock = document.querySelector('#rock-img');
const playerScissors = document.querySelector('#scissors-img');
const playerPaper = document.querySelector('#paper-img');
let playerChoice = '';

//Getting the button
const playButton = document.querySelector('#play-button');
const computerChoices = ['rock', 'paper', 'scissors'];
const computerImages = ['rock.PNG', 'paper.PNG', 'scissors.PNG'];

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

    const playerText = document.querySelector('#user-text');
    const computerText = document.querySelector('#computer-text');

    const computerImg = document.querySelector('#computer-img');

    const finalText = document.querySelector('#final-text');

    function changingImage(){
        computerImg.src = "Images/" + computerImages[Math.floor(Math.random() * 3)];
    }

    const interval = setInterval(changingImage, 100)
    
    function finalImage(){
        clearInterval(interval);

        computerImg.src = "Images/" + computerImages[choiceNumber];
        computerImg.classList.add('selected');

        computerText.textContent = "Computers throw: " + computerFinal;

        //Checking the players choice against the computers choice and displaying the appropriate response
        if (playerChoice == computerFinal){
            finalText.textContent = "Results: You tied!";
        }
        else if (playerChoice == 'rock'){
            if (computerFinal == 'paper'){
                finalText.textContent= "Results: You lose :(";
            }
            else {
                finalText.textContent = "Results: You win!";
            }
        }
        else if (playerChoice == 'paper'){
            if (computerFinal == 'scissors'){
                finalText.textContent = "Results: You lose :(";
            }
            else {
                finalText.textContent = "Results: You win!";
            }
        }
        else if (playerChoice == 'scissors'){
            if (computerFinal == 'rock'){
                finalText.textContent = "Results: You lose :(";
            }
            else {
                finalText.textContent = "Results: You win!";
            }
        }
    }

    setTimeout(finalImage, 3000);


    //Changing the text to display what the user selected
    playerText.textContent = "Your throw: " + playerChoice;



    playButton.textContent = "Play again!";

}