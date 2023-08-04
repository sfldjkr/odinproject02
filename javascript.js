let choices = ['Rock', 'Paper', 'Scissors'];

let getComputerChoice = () => {
    computerNum = Math.floor(Math.random() * 3);
    return choices[computerNum];
}

let playGame = (playerSelection, ComputerSelection) => {
    let answer;
    let capPlayerSelection = playerSelection.toLowerCase();
    let firstLetter = capPlayerSelection.charAt(0).toUpperCase();
    capPlayerSelection = capPlayerSelection.slice(1);
    capPlayerSelection = firstLetter.concat(capPlayerSelection);
    // first if both the computer and human chooses similar answer
    if (capPlayerSelection === ComputerSelection) {
        return answer = `It's A Tie. Both You And Computer Choose ${playerSelection || ComputerSelection}`;
    }
    // else both answer are diffrent and we have three conditions for that
    else if (capPlayerSelection != ComputerSelection) {
        // if the user has chooses rock
        if (capPlayerSelection == 'Rock') {
            // computer either choosed paper or scissors
            if (ComputerSelection == 'Scissors') {
                // player won
                return answer = `You Won.Rock Beats Scissors`;
            }
            else {
                // computer choose paper in which we lost and no need for else if
                return answer = `You Lost.Paper Beats Rock`;
            }
        }
        // if the user choosed paper
        else if (capPlayerSelection == 'Paper') {
            // computer either choosed Rock or scissors
            if (ComputerSelection == 'Rock') {
                // player won
                return answer = `You Won.Paper Beats Rock`;
            }
            else {
                // computer choose scissors in which we lost and no need for else if
                return answer = `You Lost.Scissors Beats Paper`;
            }
        }

        // user chooses Scissors
        else if (capPlayerSelection == 'Scissors') {
            // computer either choosed Rock or Paper
            if (ComputerSelection == 'Rock') {
                // player won
                return answer = `You Lost.Rock Beats Scissors`;
            }
            else {
                // computer choose paper in which we won
                return answer = `You Won.Scissors Beats Paper`;
            }
        }

        // else user put in some invalid or spelling mistakes
        else {
            return answer = `Invalid input or spelling mistake your choices are ${choices[0]}, ${choices[1]}, ${choices[2]}`
        }
        



    }
}

let game = () => {
    let userScore = 0;
    let compScore = 0;
    // 1 will mean we won the game 
    // -1 will mean comp won the game
    // o will mean it's a tier
    // Run a loop 5 times and change the scores

    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Choose Your weapon");
        let compChoice = getComputerChoice();
        let answer = playGame(userChoice,compChoice);
        if (answer === "You Won.Rock Beats Scissors" | answer === "You Won.Paper Beats Rock" | answer === "You Won.Scissors Beats Paper") {
            userScore += 1;

        }
        else if (answer === "You Lost.Paper Beats Rock" | answer === "You Lost.Scissors Beats Paper" | answer === "You Lost.Rock Beats Scissors") {
            compScore += 1;

        }
        console.log(answer);
    }
    // we get the winner  
    console.log(`Your Score: ${userScore}`);
    console.log(`Comp Score: ${compScore}`);
    if (userScore > compScore) {
        console.log('Congrats You Won Against Computer')
    } else {
        console.log('!!Sad Emoji!! Computer Won The Game')
    }

};
let usersScore = 0;
let computerScore = 0;

let playAnGame = (e) => {
    let userChoosed = e.target.dataset.choice;
    let compChoosed = getComputerChoice();
    let answer = playGame(userChoosed,compChoosed);

    let userScoreBoard = document.querySelector('.scorehuman');
    let compScoreBoard = document.querySelector('.scorecomp');

    const gif = document.querySelector('#gif');
    const body = document.querySelector('body');
    const hOne = document.querySelector('h1');
    
    if (answer === "You Won.Rock Beats Scissors" | answer === "You Won.Paper Beats Rock" | answer === "You Won.Scissors Beats Paper") {
        usersScore += 1;
        hOne.style.color = 'green';
        gif.innerHTML = `<img  style="border-radius:0%;" src="https://media.tenor.com/jnh4LaTmuFMAAAAC/spider-man-dance-memes.gif">`;

    }
    else if (answer === "You Lost.Paper Beats Rock" | answer === "You Lost.Scissors Beats Paper" | answer === "You Lost.Rock Beats Scissors") {
        computerScore += 1;
        hOne.style.color = 'red';
        gif.innerHTML = `<img  style="border-radius:0%;"src="https://media.tenor.com/GIbER2Fy3UUAAAAC/spiderman-sad-spiderman.gif">`;


    }
    console.log(answer, usersScore,computerScore);
    userScoreBoard.innerHTML = `Human Score: ${usersScore}`;
    compScoreBoard.innerHTML = `Comp Score: ${computerScore}`;
    let h1 = document.querySelector('h1');
    h1.innerHTML = `${answer}`;
    if (usersScore > 4) {
        document.write(`<h1 style="text-align:center; margin-top: 100px;">you have won the game by ${usersScore - computerScore} points</h1>`);
    }
    if (computerScore > 4) {
        document.write(`<h1 style="text-align:center; margin-top: 100px;>You have lost to computer by ${computerScore - usersScore} points</h1>`);
    }
    h1.innerHTML = `${answer}`;

};

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playAnGame));

// feaeture to add

// 
// For now, remove the logic that plays exactly five rounds.

// Create three buttons, one for each selection. Add an event listener to the buttons that call your 
// playRound function with the correct playerSelection every time a button is clicked. 
// (you can keep the console.logs for this step)

// Add a div for displaying results and change all of your console.logs into DOM methods.
// Display the running score, and announce a winner of the game once one player reaches 5 points.
// You will likely have to refactor (rework/rewrite) your original code to make it work for this. 
// That’s OK! Reworking old code is an important part of a programmer’s life.

// 

