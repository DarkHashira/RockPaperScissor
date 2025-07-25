const getComputerChoice =()=>{
    let choice = Math.floor(Math.random()*3)

    switch (choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
        default:
            return "error"
    }
}

const getHumanChoice = () =>{
    let choice = prompt("Your turn")
    return choice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

const playRound=(humanChoice,computerChoice)=>{
    if(humanChoice === "rock"){
        switch (computerChoice) {
            case "paper":
                return "You loose paper beats rock"
            case "scissors":
                return "You win rock beats scissors"
            default:
                return "Oops Draw !"
        }
    }
    else if(humanChoice === "paper"){
        switch (computerChoice) {
            case "rock":
                return "You win paper beats rock"
            case "scissors":
                return "You loose scissors beats paper"
            default:
                return "Oops Draw !"
        }
    }
    else{
        switch (computerChoice) {
            case "rock":
                return "You loose rock beats scissors"
            case "paper":
                return "You win scissors beats paper"
            default:
                return "Oops Draw !"
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Human : ${humanSelection}`)
console.log(`Computer : ${computerSelection}`)
console.log(playRound(humanSelection,computerSelection))