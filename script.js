/*
  Name: Katie Williams
  Date: 03.01.26
  CSC 372-01

  This is the script.js page for my rock, paper, scissors website. It includes declarations for all of my constants, event listeners
  for each user choice (rock, paper, or scissors) and the play and reset score buttons. It also includes functions to play the game 
  by getting the users choice and randomly selected something for the computer to choose, then displaying the result and score.
*/

//Declaring constants and a holder for the players choice
const playerRock = document.querySelector('#rock-img');
const playerScissors = document.querySelector('#scissors-img');
const playerPaper = document.querySelector('#paper-img');
let playerChoice = '';

//For keeping track of the users wins, losses, and ties.
let wins = 0;
let loses = 0;
let ties = 0;

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

//Function for the main part of the program to play the game.
/* It will make sure the user selected an option, decide a random throw for the computer, cycle through images until the computer
decides on a final throw, display the image for the computers throw, reset the previous throws text and result, decide the result 
based on the users throw vs the computers throw and display the result, and update the users wins, losses, and ties. Finally, it
will change the button to say play again instead of play.
*/
function playGame(){

    //Making sure the user has actually selected something, and displaying a message if they haven't
    if (playerChoice == ''){
        alert('Please choose an option!');
    }
    else {


    //Get a random number for the computers throw
    const choiceNumber = Math.floor(Math.random()*3);
    const computerFinal = computerChoices[choiceNumber];

    //Getting the text areas for the user and the computer
    const playerText = document.querySelector('#user-text');
    const computerText = document.querySelector('#computer-text');

    //Getting the image for the computers throw
    const computerImg = document.querySelector('#computer-img');

    //Getting the text area for the final result
    const finalText = document.querySelector('#final-text');

    //Getting the text area to display the wins, losses, and ties
    const winsText = document.querySelector('#wins-text');
    const lossText = document.querySelector('#loss-text');
    const tieText = document.querySelector('#tie-text');

    //Resetting the results text and the computers throw text
    finalText.textContent = 'Results: ';
    computerText.textContent = 'Computers throw: ';

    //Cycles between images randomly while the computer is "thinking" of what to throw
    function changingImage(){
        computerImg.src = "Images/" + computerImages[Math.floor(Math.random() * 3)];
    }

    //Shuffling the images every 500 ms
    const interval = setInterval(changingImage, 500)
    
    function finalImage(){
        clearInterval(interval);

        //Displaying the final image and adding it to the selected class to display a border
        computerImg.src = "Images/" + computerImages[choiceNumber];
        computerImg.classList.add('selected');

        //Putting the computers throw in the appropriate text location
        computerText.textContent = "Computers throw: " + computerFinal;

        //Checking the players choice against the computers choice and displaying the appropriate response, also updating the wins,
        //losses, and ties.
        if (playerChoice == computerFinal){
            finalText.textContent = "Results: You tied!";
            ties = 1 + ties;

            tieText.textContent = 'Ties: ' + ties;
        }
        else if (playerChoice == 'rock'){
            if (computerFinal == 'paper'){
                finalText.textContent= "Results: You lose :(";
                loses = 1 + loses;

                lossText.textContent = "Losses: " + loses;
            }
            else {
                finalText.textContent = "Results: You win!";
                wins = 1 + wins;

                winsText.textContent = "Wins: " + wins;
            }
        }
        else if (playerChoice == 'paper'){
            if (computerFinal == 'scissors'){
                finalText.textContent = "Results: You lose :(";
                loses = 1 + loses;

                lossText.textContent = "Losses: " + loses;
            }
            else {
                finalText.textContent = "Results: You win!";
                wins = 1 + wins;

                winsText.textContent = "Wins: " + wins;
            }
        }
        else if (playerChoice == 'scissors'){
            if (computerFinal == 'rock'){
                finalText.textContent = "Results: You lose :(";
                loses = 1 + loses;

                lossText.textContent = "Losses: " + loses;
            }
            else {
                finalText.textContent = "Results: You win!";
                wins = 1 + wins;

                winsText.textContent = "Wins: " + wins;
            }
        }
    }

    //Displays the final image after 3 seconds
    setTimeout(finalImage, 3000);

    //Changing the text to display what the user selected
    playerText.textContent = "Your throw: " + playerChoice;

    //Changing the button to say play again instead of play
    playButton.textContent = "Play again!";

    //Getting the reset button for the score and adding an event listener for when its clicked
    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', resetScore);

    //Resetting all of the scores back to zero
    function resetScore(){
        winsText.textContent = "Wins: 0";
        wins = 0;

        lossText.textContent = "Losses: 0";
        loses = 0;

        tieText.textContent = "Ties: 0";
        ties = 0;
    }

    }
}