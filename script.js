let humanScore = 0;
let computerScore = 0;

const playGame=(humanChoice)=>{

    if(humanScore===5 || computerScore === 5)
        {
            return
        } 
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

        // console.log(`Human : ${humanSelection}`)
        const resultShow = document.createElement("p")
        resultShow.innerHTML = `Your choice = ${humanSelection} <br>
        Computer's choice = ${computerSelection} <br>
        ${playRound(humanSelection, computerSelection)} <br>
        <strong>Score</strong><br>
        Human: ${humanScore} <br>
        Computer: ${computerScore}`;

         scoreBoard.appendChild(resultShow)
            scoreBoard.scrollTop = scoreBoard.scrollHeight;

        if(humanScore===5 || computerScore === 5)
        {
            const winner = document.createElement("span")
            winner.style.color ="green"
            winner.innerHTML = `${humanScore === 5 ? "Yeh ! you win" : "Ahh! Computer wins"}`
            scoreBoard.appendChild(winner)
            buttons.forEach((button)=>{
                button.disabled=true;
            })
        }

     
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const getHumanChoice = button.id
        playGame(getHumanChoice);         
    })
})


const scoreBoard = document.querySelector(".result")
