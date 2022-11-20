/*To keep track of the scores - this has to be above all functions
so all functions can have access to it*/
const totalScores = {computerScore: 0, playerScore:0}

//Function for getting computer choice
  function getComputerChoice() {
    const rpsChoices = ['rock','paper','scissors']
    const randomNum = Math.floor(Math.random()*3)
    // Math.floor should remove all decimal places & round it
    return rpsChoices[randomNum]
  }

//Function for getting results
  function getResult(playerChoice, computerChoice) {
    //Variables
    let score;

    // All conditions when it draws, set `score` to 0
    if (playerChoice == computerChoice){
      score = 0
    }

    //All conditions when human wins
    else if (playerChoice == 'rock' && computerChoice == 'scissors') {
      score = 1
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock') {
      score = 1
    }
    else if (playerChoice == 'scissors' && computerChoice == 'paper') {
      score = 1
    }

    //All situations when human loses (set score to -1)
    /*You can also type out else if statements for
    when human loses but setting the score to -1 will be
    quicker as score is 1 for wins & 0 for draws*/
    else {
      score = -1
    }

    //Return score
    return score
  }

//Function for showing results
  function showResult(score, playerChoice, computerChoice) {
    const resultDiv = document.getElementById('result')
    const scoresDiv = document.getElementById('scores')
    const userScoreDiv = document.getElementById('userScore')

    if(score == -1){
      resultDiv.innerText = "Sorry you lose, try again!"
    }
    else if (score == 0) {
      resultDiv.innerText = "It's a tie!"
    }
    else {
      resultDiv.innerText = "Yaaaay you won!"
    }

    scoresDiv.innerText = `You chose ${playerChoice} vs Computer chose ${computerChoice}`
  }

//Function for calculating who wins & displays it on the screen
  function onClickRPS(playerChoice){
    console.log({playerChoice}) //This shows the player's choice in the console log
    const computerChoice = getComputerChoice()
    console.log({computerChoice}) //This shows the computer's choice in the console log
    const score = getResult(playerChoice, computerChoice)
    totalScores['playerScore'] += score
    console.log({score}) //This shows the score in the console log
    console.log(totalScores)
    showResult(score, playerChoice, computerChoice) //Shows result on the screen
  }

//Function for playing the gameOverButton
  function playGame() {
    const rpsButton = document.querySelectorAll('.rpsButton')
    rpsButton[0].onclick = () => console.log(rpsButton[0].value)

    rpsButton.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

  }


  playGame()
