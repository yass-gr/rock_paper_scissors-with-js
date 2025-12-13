


/* score declarations */
  let humanScore = 0;
  let computerScore = 0;




/*computer's choice*/
function getComputerChoice(){
    let randomNum = Math.random();
    if (randomNum < 0.333333333){
        return "Paper";
    } else if (randomNum < 0.666666666){
        return "Scissors";
    }else {
        return "Rock";
    }
}



/* playing a single round logic*/      
function playRound(computerChoice,humanChoice) {
   
    if (computerChoice === humanChoice) {
        return `tie! you both chose ${computerChoice}`
    }else if (computerChoice === "Rock" && humanChoice === "Paper") { 
        humanScore += 1
        return `you win! ${humanChoice} beats ${computerChoice}`
    }else if (computerChoice === "Rock" && humanChoice === "Scissors") { 
        computerScore += 1
        return `you lose! ${computerChoice} beats ${humanChoice}`
    }else if (computerChoice === "Paper" && humanChoice === "Scissors") { 
        humanScore += 1
        return `you win! ${humanChoice} beats ${computerChoice}`
    }else if (computerChoice === "Paper" && humanChoice === "Rock") { 
        computerScore += 1
        return `you lose! ${computerChoice} beats ${humanChoice}`
    }else if (computerChoice === "Scissors" && humanChoice === "Rock") { 
        humanScore += 1
        return `you win! ${humanChoice} beats ${computerChoice}`
    }else if (computerChoice === "Scissors" && humanChoice === "Paper") { 
        computerScore += 1
        return `you lose! ${computerChoice} beats ${humanChoice}`
    }
       
}



 //displaying the buttons
    const humanChoices = document.querySelector(".human-choices")
    const rock = document.createElement("button")
    rock.textContent = "Rock"
    const paper = document.createElement("button")
    paper.textContent = "Paper"
    const scissors = document.createElement("button")
    scissors.textContent = "Scissors"
    humanChoices.appendChild(rock)
    humanChoices.appendChild(scissors)
    humanChoices.appendChild(paper)

//event listner for when user choses a move to trigger the round
    let hMove = ""
    humanChoices.addEventListener("click", function(e){
        hMove = e.target.textContent
        let gameResult = playRound(getComputerChoice(),hMove)
        display = document.querySelector(".current-game")
        display.textContent = gameResult
        let scoreDisplayH = document.querySelector(".spn1")
        let scoreDisplayC = document.querySelector(".spn2")
        scoreDisplayH.textContent =  humanScore
        scoreDisplayC.textContent = computerScore
        let aiMove = getComputerChoice()
        let moveH = document.querySelector(".spn3")
        let moveC = document.querySelector(".spn4")
        moveH.textContent = hMove
        moveC.textContent = aiMove
    })
//event listner for when user presses restet button
     const reset = document.querySelector("#reset")
     reset.addEventListener("click", function() {
     humanScore = 0;
     computerScore = 0;
     let scoreDisplayH = document.querySelector(".spn1")
    let scoreDisplayC = document.querySelector(".spn2")
    scoreDisplayH.textContent =  humanScore
    scoreDisplayC.textContent =  computerScore
    })

    
    
    
  


  
      



 

