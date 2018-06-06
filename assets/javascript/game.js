var wins = 0;
var losses = 0;
var wordOptions = ["tuvok", "janeway", "seven", "chakotay", "neelix", "doctor", "kes", "torres", "paris"];

//all audio files, including a title audio and all answers' audio files
var titleAudio = new Audio('assets/audio/main-title-short.mp3');
var chakotayAudio = new Audio('assets/audio/chakotay.mp3');
var doctorAudio = new Audio('assets/audio/doctor.mp3');
var janewayAudio = new Audio('assets/audio/janeway.mp3');
var kesAudio = new Audio('assets/audio/kes.mp3');
var neelixAudio = new Audio('assets/audio/neelix.mp3');
var parisAudio = new Audio('assets/audio/paris.mp3');
var sevenAudio = new Audio('assets/audio/seven.wav');
var torresAudio = new Audio('assets/audio/torres.mp3');
var tuvokAudio = new Audio('assets/audio/tuvok.mp3');

function game() {

    //wordOptions is our word array, gameAnswer chooses a word randomly from wordOptions
    var gameAnswer = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    var remainingLetters = gameAnswer.length;

    //remaining guesses, an array for the game answer, 
    //the array to display the current status of the user's guesses
    //boolean to prevent a decrement when guessing the same letter or repeated letter
    var remainingGuesses = 5;
    var gameAnswerArray = [];
    var displayGuessesArray = [];
    var isCorrectOrRepeated;

    //all divs needed to update the game
    var clueDiv = document.getElementById('clue');
    var winsDiv = document.getElementById('wins');
    var answerDiv = document.getElementById('answer');
    var photoDiv = document.getElementById('answerPhoto');
    var guessesDiv = document.getElementById('guesses');
    var remainingDiv = document.getElementById('remaining');

	//this for loop initializes the blank spaces for every letter of the word
	for (var i = 0; i < gameAnswer.length; i++) {
		gameAnswerArray.push("_");
	}
	//this string is the progress of the answer being completed
    var displayString = gameAnswerArray.join(" ");
    
	//defining all the divs with the inital and updated values
	clueDiv.innerHTML = "<h3>Theme: Characters</h3>";
	winsDiv.innerHTML = "<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>";
	answerDiv.innerHTML = "<h3>Word: " + displayString + "</h3>";
	guessesDiv.innerHTML = "<h3>Letters Already Guessed: " + (displayGuessesArray.join(" ")) + "</h3>";
	remainingDiv.innerHTML = "<h3>Number of Guesses Remaining: " + remainingGuesses + "</h3>";
    
    //user inputs a letter
    document.onkeyup = function(event) {
		isCorrectOrRepeated = false;
		var userInput = event.key;
        userInput = userInput.toLowerCase();
        
        //this statement only accepts letters, no special chars
		if (userInput === 'a' || userInput === 'b' || userInput === 'c' || userInput === 'd' || userInput === 'e' || userInput === 'f' || userInput === 'g' || userInput === 'h' || userInput === 'i' || userInput === 'j' || userInput === 'k' || userInput === 'l' || userInput === 'm' || userInput === 'n' || userInput === 'o' || userInput === 'p' || userInput === 'q' || userInput === 'r' || userInput === 's' || userInput === 't' || userInput === 'u' || userInput === 'v' || userInput === 'w' || userInput === 'x' || userInput === 'y' || userInput === 'z') {
			if (displayGuessesArray.toString().includes((userInput.toUpperCase()))) {
				isCorrectOrRepeated = true;
			} else {
				displayGuessesArray.push(" " + userInput.toUpperCase());
				guessesDiv.innerHTML = "<h3>Letters Already Guessed: " + (displayGuessesArray.join(" ")) + "</h3>";
			}
			for (var i = 0; i < gameAnswer.length; i++) {
				if (gameAnswer[i] === userInput) {
					gameAnswerArray[i] = userInput;
					displayString = gameAnswerArray.join(" ");
					answerDiv.innerHTML = "<h3>Word: " + displayString + "</h3>";
					remainingLetters--;
					isCorrectOrRepeated = true;
				}
			}
			if (gameAnswer === gameAnswerArray.join("")) {
				wins++;
				winsDiv.innerHTML = "<h3>Wins: " + wins + "</h3>" + "<h3>Losses: " + losses + "</h3>";
				switch (gameAnswer) {
					case "tuvok":
						photoDiv.innerHTML = "<img src='assets/images/tuvok.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Tuvok</h2>";
						tuvokAudio.play();
						break;
					case "janeway":
						photoDiv.innerHTML = "<img src='assets/images/janeway.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Janeway</h2>";
						janewayAudio.play();
						break;
					case "seven":
						photoDiv.innerHTML = "<img src='assets/images/seven.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Seven</h2>";
						sevenAudio.play();
						break;
					case "chakotay":
						photoDiv.innerHTML = "<img src='assets/images/chakotay.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Chakotay</h2>";
						chakotayAudio.play();
						break;
					case "neelix":
						photoDiv.innerHTML = "<img src='assets/images/neelix.jpg' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Neelix</h2>";
						neelixAudio.play();
						break;
					case "doctor":
						photoDiv.innerHTML = "<img src='assets/images/doctor.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Doctor</h2>";
						doctorAudio.play();
						break;
					case "kes":
						photoDiv.innerHTML = "<img src='assets/images/kes.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Kes</h2>";
						kesAudio.play();
						break;
					case "torres":
						photoDiv.innerHTML = "<img src='assets/images/torres.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Torres</h2>";
						torresAudio.play();
						break;
					case "paris":
						photoDiv.innerHTML = "<img src='assets/images/paris.gif' class='rounded mx-auto d-block' class='img-fluid' style='width: 280px; height: 280px'>" + "<h2>Paris</h2>";
						parisAudio.play();
						break;
				}
				remainingGuesses = 5;
				// $('#winModal').modal('show');

				game();
			}
			if (isCorrectOrRepeated) {
				remainingDiv.innerHTML = "<h3>Number of Guesses Remaining: " + remainingGuesses + "</h3>";
			} else {
				remainingGuesses--;
				remainingDiv.innerHTML = "<h3>Number of Guesses Remaining: " + remainingGuesses + "</h3>";
			}
			if (remainingGuesses <= 0) {
				// $('#loseModal').modal('show');
				losses++;
				game();
			}
		}
		else{
			
		    // $('#letterModal').modal('show');
		}        
	};
}