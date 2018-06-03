window.onload = function() {

    var wordOptions = ["apple", "pear", "plum", "banana", "strawberry"];
    var gameAnswer = wordOptions[Math.floor(Math.random() * wordOptions.length)];

    console.log("Word Guess: " + gameAnswer);

    // var gameAnswerArray = [];
    // for (var i = 0; i < gameAnswer.length; i++) {
    //     gameAnswerArray.push(gameAnswer.charAt(i));
    // }
    // console.log("Game Answer Array: " + gameAnswerArray);



    // var wrongGuessesDiv = document.getElementById('wrongGuesses');

    var userAnswerArray = [];
    var answerDiv = document.getElementById('answer');

    for (var i = 0; i < gameAnswer.length; i++) {
        userAnswerArray.push("_");
    }

    console.log("User Answer Array: " + userAnswerArray);


    
    // console.log("Blank Answer: " + blankAnswer);
    var displayString = userAnswerArray.join(" ");

    answerDiv.innerHTML = displayString;

    var correctAnswer = userAnswerArray.join("");

    var displayGuessesArray = [];

    document.onkeyup = function(event) {
        // document.querySelector("#game").innerHTML = "Your last guess was: " + userInput;
        // wrongGuessesDiv.innerHTML = displayGuessesArray;
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
            displayGuessesArray.push(" " + userInput);
            document.querySelector("#guesses").innerHTML = displayGuessesArray;
     
            for (var i = 0; i < gameAnswer.length; i++) {
                if (gameAnswer[i] === userInput)
                {
                    userAnswerArray[i] = userInput;
                }
            }
            
            console.log("User Answer Array: " + userAnswerArray);
            displayString = userAnswerArray.join(" ");
            answerDiv.innerHTML = displayString;
        }
        else{
            alert("Please enter a letter. Numbers, spaces, or symbols are not valid.");
        }
        
    };



}