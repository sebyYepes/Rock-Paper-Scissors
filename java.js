function getComputerChoice() {
    const num = Math.floor(Math.random() * 3); 
    if(num === 0){
        return "rock";
    } else if(num === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function determineWinner(player, opponent) {
    if(player === opponent){
        return "It's a tie. Play again!";
    }
    if(player === "rock"){
        return (opponent === "scissors") ? "You win!" : "You lose!";
    }
    if(player === "paper"){
        return (opponent === "rock") ? "You win!" : "You lose!";
    }
    if(player === "scissors"){
        return (opponent === "paper") ? "You win!" : "You lose!";
    }
}

const btns = document.querySelectorAll("button");
const resultDiv = document.querySelector("#result")

btns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        let playerSelection = event.target.textContent.toLowerCase();
        let opponent = getComputerChoice();
        resultDiv.innerHTML = `
        <p>You chose: ${playerSelection}</p>
        <p>Computer chose: ${opponent}</p>
        <p>${determineWinner(playerSelection, opponent)}</p>
    `;
    });
});