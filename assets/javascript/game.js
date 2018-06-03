var wins = 0;
var wordOptions = ["apple", "pear", "plum", "banana", "strawberry"];


function game() {
    //wordOptions is our word array. gameAnswer chooses a word randomly from wordOptions.
    var gameAnswer = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    var remainingLetters = gameAnswer.length;

    //
    var winsDiv = document.getElementById('wins');

    //
    var gameAnswerArray = [];
    var answerDiv = document.getElementById('answer');
    
    //
    var displayGuessesArray = [];
    var guessesDiv = document.getElementById('guesses');

    //
    var isCorrectOrRepeated;
    var remainingGuesses = 5;
    var remainingDiv = document.getElementById('remaining');

    //this for loop initializes the blank spaces for every letter of the word
    for (var i = 0; i < gameAnswer.length; i++) {
        gameAnswerArray.push("_");
    }
    //
    var displayString = gameAnswerArray.join(" ");
    //
    winsDiv.innerHTML = "<p>Wins: " + wins + "</p>";
    answerDiv.innerHTML = "<p>Word: </p>" + displayString;
    guessesDiv.innerHTML = "<p>Letters Already Guessed:</p>" + (displayGuessesArray.join(" "));
    remainingDiv.innerHTML = "<p>Number of Guesses Remaining:</p>" + remainingGuesses; 

    document.onkeyup = function(event) {

        isCorrectOrRepeated = false;
        //
        var userInput = event.key;
        userInput = userInput.toLowerCase();

        if (userInput === 'a' || userInput === 'b' || userInput === 'c' || 
        userInput === 'd' || userInput === 'e' || userInput === 'f' || 
        userInput === 'g' || userInput === 'h' || userInput === 'i' || 
        userInput === 'j' || userInput === 'k' || userInput === 'l' ||
        userInput === 'm' || userInput === 'n' || userInput === 'o' ||
        userInput === 'p' || userInput === 'q' || userInput === 'r' ||
        userInput === 's' || userInput === 't' || userInput === 'u' ||
        userInput === 'v' || userInput === 'w' || userInput === 'x' ||
        userInput === 'y' || userInput === 'z'){
                        
            if (displayGuessesArray.toString().includes((userInput.toUpperCase()))){

            alert("You have already guessed '" + userInput + ".' Try a different letter.");
            isCorrectOrRepeated = true;           

            }
            else {
                displayGuessesArray.push(" " + userInput.toUpperCase());
                guessesDiv.innerHTML = "<p>Letters Already Guessed:</p>" + (displayGuessesArray.join(" "));
            }
            
            for (var i = 0; i < gameAnswer.length; i++) {
                if (gameAnswer[i] === userInput)
                {
                    gameAnswerArray[i] = userInput;
                    displayString = gameAnswerArray.join(" ");
                    answerDiv.innerHTML = "<p>Word: </p>" + displayString;
    
                    remainingLetters--;
                    isCorrectOrRepeated = true;      
                }
            }

            if (gameAnswer === gameAnswerArray.join(""))
            {
                wins++;
                winsDiv.innerHTML = "<p>Wins: " + wins + "</p>";
                alert("You win!");
                remainingGuesses = 5;
                game();
            }

            if (isCorrectOrRepeated){
                remainingDiv.innerHTML = "<p>Number of Guesses Remaining:</p>" + remainingGuesses; 
            }
            else {
                remainingGuesses--;
                remainingDiv.innerHTML = "<p>Number of Guesses Remaining:</p>" + remainingGuesses; 
            }

            if (remainingGuesses <= 0){
                alert("You lose!");
                game();
            }   
        }
        else{
            alert("Please enter a letter. Numbers, spaces, or symbols are not valid.");
        }        
    };

}