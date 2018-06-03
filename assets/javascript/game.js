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
        // console.log("Checking if in string: " + correctAnswer.toLowerCase().indexOf(userInput));

        var userInput = event.key;
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
    };



}