
function playGame() { // create a function where will store our code
    let humanScore = 0; // declare veriables for storing our score
    let computerScore = 0;
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    function getComputerChoice() { // create a function for getting computer`s answer 
        const randomNumber = Math.floor(Math.random() * 3); // use random method multiply to 3 and round numbers
    
        if (randomNumber === 0) {
            return 'Rock';
        } else if (randomNumber === 1) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }
    
    function getHumanChoice() { // create a function for getting humen`s` answer 
        let choice = (prompt('Type your choice : Rock, Paper, Scissors')); //use prompt method
        let choice1 = choice.toLowerCase() // make it case-intensitive
        
    
        if (choice1 === 'rock') { // first condition
            return 'Rock';
         } else if (choice1 === 'paper') { //second 
            return'Paper' ;
         } else if (choice1 === 'scissors') {  // third
            return'Scissors';
         } else {
            return 'Invalid input';
         }
    
    }

    function playRound(humanChoice, computerChoice) { // a function for one play round
        if (humanChoice === computerChoice) { //if answers will be identicate
           console.log('It is a tie!')
       
        } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || // if human`s answer will be more
            (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock')) {
               console.log('Human wins!'); 
               return 'Human';
           } else if (humanChoice === 'Invalid input') {
            console.log('Invalid input from human, no change score.');
            return;
           } else { // if computer`s answer will be more
               console.log('Computer wins!');
               return 'Computer';
           }
       } 
       for (let i = 0; i < 5; i++) { //  create a loop for 5 rounds
        let humanChoice = getHumanChoice(); // keep human`s answer in a varible
        let computerChoice = getComputerChoice(); // keep human`s answer in a varible

        let roundWinner = playRound(humanChoice, computerChoice); // keep one play ruond in a varible
        if (roundWinner === 'Human') { // if human wins humanScore increases
            humanScore++
        } else if (roundWinner === 'Computer') { //if computer wins computerScore increases
            computerScore++;
        }

        console.log(`Score after round ${i + 1} - Human: ${humanScore}, Computer: ${computerScore}`);
       } // shown scrore after each round
    }
    playGame(); // call a function



