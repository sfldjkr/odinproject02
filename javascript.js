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
game();

