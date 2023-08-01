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
    console.log(capPlayerSelection, ComputerSelection);
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

console.log(playGame(getComputerChoice(),getComputerChoice()));