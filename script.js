let humanScore = 0;
let computerScore = 0;

const playGame=(humanChoice)=>{

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

    const playRound=(humanChoice,computerChoice)=>{
        if(humanChoice === "rock"){
            switch (computerChoice) {
                case "paper":
                    computerScore ++;
                    return "You loose paper beats rock"
                case "scissors":
                    humanScore++
                    return "You win rock beats scissors"
                default:
                    return "Oops Draw !"
            }
        }
        else if(humanChoice === "paper"){
            switch (computerChoice) {
                case "rock":
                    humanScore++
                    return "You win paper beats rock"
                case "scissors":
                    computerScore++
                    return "You loose scissors beats paper"
                default:
                    return "Oops Draw !"
            }
        }
        else{
            switch (computerChoice) {
                case "rock":
                    computerScore++
                    return "You loose rock beats scissors"
                case "paper":
                    humanScore++
                    return "You win scissors beats paper"
                default:
                    return "Oops Draw !"
            }
        }
    }
        const humanSelection = humanChoice
        const computerSelection = getComputerChoice();

        console.log(`Human : ${humanSelection}`)
        console.log(`Computer : ${computerSelection}`)
        console.log(playRound(humanSelection,computerSelection))
        console.log(`Score
            Human: ${humanScore} Computer: ${computerScore}`)
        if (humanScore > computerScore)
    {
        console.log("Winner is Human")
    }
    else if(computerScore> humanScore)
    {
        console.log("Computer wins")
    }
    else{
        console.log("Its a draw")
    }
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const getHumanChoice = button.id
        playGame(getHumanChoice);         
    })
})

