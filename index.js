console.log("Javascript is connected!");

// Pseudocode

// Rps console application 

// So firstly we need humanScore and computer score variable to decide the winner for particular round or tie

let humanScore = 0;
let botScore = 0;

// we need input for human/user choice
function playerChoice(){
    let choice = prompt(`Rock Paper Scissors shoot !
        Please choose from Rock Paper or Scissors`);

    return choice.toLowerCase().trim();
}
// we need randomized computer choice which bot will randomly return based on how we code it
// we can use 3 already availble choice as array and access it by generatin random Index

function botChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}
// we need to play a round by passing values from computer choice and user choice to the play a round function 
// in rock paper scissors there are 3 possibilities either player will won, lose or round will be tied
// so player win in conditon like when player chose paper and if computer chose rock or p chose s computer chose paper and p chose rock and computer chose scissors

function playRound(humanChoice, computerChoice){
    if( (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")){
            humanScore++;
            console.log(`Player won the round!!
                Player: ${humanChoice} ---- Bot: ${computerChoice}
                Player: ${humanScore} ---- Bot: ${botScore}`);
    }else if( (humanChoice === "rock" && computerChoice === "paper") ||
              (humanChoice === "paper" && computerChoice === "scissors") || 
              (humanChoice === "scissors" && computerChoice === "rock")){
                botScore++;
                console.log(`Alas player lost the round!!
                Player: ${humanChoice} ---- Bot: ${computerChoice}
                Player: ${humanScore} ---- Bot: ${botScore}`);
    }else {
        botScore++;
        humanScore++;
        console.log(`Round got Tied!!
        Player: ${humanChoice} ---- Bot: ${computerChoice}
        Player: ${humanScore} ---- Bot: ${botScore}`);
    }
}



// Then depending on how many round we want to play we can make it work well now we want best of 5 so we'll play for 5 rounds 
// to play for 5 rounds we can call playRound again and again for 5 rounds using loop and then can check for winner based on score after 5 rounds
// and we'll also want new choices for each round played in the game

function playGame(){
    for(let i = 1; i <= 5; i++){
        let yourChoice = playerChoice();
        let AiChoice = botChoice();

        playRound(yourChoice, AiChoice);
    }
}

function winner(){
    playGame();

    if(humanScore > botScore){
        console.log(`Hurrah!! You won the game!!
            FINAL SCORE:Player: ${humanScore} ---- AI: ${botScore}`);
    }else if(humanScore < botScore){
        console.log(`Alas!! You lost the game!!
            FINAL SCORE:Player: ${humanScore} ---- AI: ${botScore}`);
    }else {
        console.log(`game is Tied!!
            FINAL SCORE:Player: ${humanScore} ---- AI: ${botScore}`);
    }
}

winner();