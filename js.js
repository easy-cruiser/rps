//let computerSelection=getComputerChoice();

function getComputerChoice () {
    let choice1="rock"
    let choice2="paper"
    let choice3="scissors"
    let finalChoice=Math.floor(Math.random()*3)+1;
    if (finalChoice===1) {
        return choice1;
        //console.log(choice1);
    } else if (finalChoice===2) {
        return choice2;
        //console.log(choice2);
    } else {
        return choice3;
        //console.log(choice3);
    }
}

function getPlayerChoice() {
    const choice=prompt("Input your selection (rock, paper or scissors):");
    const pChoice=choice.toLowerCase();
    return pChoice;
}
//let playerSelection=prompt("Input your selection (rock, paper or scissors):")
//console.log(playerSelection)

//let singleGame=playRound(playerSelection, computerSelection);
function playRound(playerSelection, computerSelection) {
    if (playerSelection==="rock" && computerSelection==="paper") {
        return ("Computer wins!");
    } if (playerSelection==="paper" && computerSelection==="rock") {
        return ("Player wins!");
    } if (playerSelection==="rock" && computerSelection==="scissors") {
        return ("Player wins!");
    } if (playerSelection==="scissors" && computerSelection==="rock") {
        return ("Computer wins!");
    } if (playerSelection==="scissors" && computerSelection==="paper") {
        return ("Player wins!");
    } if (playerSelection==="paper" && computerSelection==="scissors") {
        return ("Computer wins!");
    } if (playerSelection===computerSelection) {
        return ("No one wins.");
    }
}

function getAnother() {
    let answer=prompt("Do you wish another game (y=yes, n=no)?");
    if (answer===("y")) {
        alert("Good luck and have fun!");
        game();
    } else {
        console.log("You choose not to play anymore.");
        return
    }
}

function game() {
    console.log("Welcome!");
    let scoreC=0;
    let scoreP=0;
    for (let i=1; i<=5; i++) {
        const playerSelection=getPlayerChoice();
        const computerSelection=getComputerChoice();
        //console.log(computerSelection)
        console.log(playRound(playerSelection, computerSelection))
        console.log("---------------------------")
        
        if (playRound(playerSelection, computerSelection)=="Computer wins!") {
            scoreC++;
        } else if (playRound(playerSelection, computerSelection)=="Player wins!") {
            scoreP++;
        }
    }
    if (scoreC>scoreP) {
        console.log("Final win goes to Computer!");
        console.log("C: "+scoreC+" vs. P: "+scoreP);
    } else if (scoreC<scoreP) {
        console.log("Final win goes to Player!");
        console.log("P: "+scoreP+" vs. C: "+scoreC);
    } else {
        console.log("P: "+scoreP+" vs. C: "+scoreC);
        console.log("Computer and Player have same score!")
    }
    getAnother()
    //let answer=prompt("Do you wish another game (y=yes, n=no)?");
    //if (answer==="y") {
    //    game();
    //} else {
    //    return
    //}
}

game()