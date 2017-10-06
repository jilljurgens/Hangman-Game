//getElementById 



// This array holds the words we are going to choose from.
var words = ["bat", "ball", "swing", "pitcher", "homerun", "single", "double", "triple", "out", ];
// This function will pick our word
function chooseRandomWord (wordArray) {
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(randomWord);
    return randomWord;

}
   
//This is to split out the word  like_ _ _ _
function blankOutWord(wordToBlank){
	var lettersInWord = [];
    for (var j = 0; j < wordToBlank.length; j++) { // this doesn't work
	lettersInWord.push("_");
	console.log(wordToBlank);
	}
	return lettersInWord;
}

//blankOutWord();
var word = chooseRandomWord(words); 
//var lettersInWord = blankOutWord(word);
var lettersInWord = word.split("");
var guessMatches = blankOutWord(word);
var misses = [];
var lives = [10];
var wins = [0];


// document.getElementById("current").innerHTML = guessMatches;
document.getElementById("guessing").innerHTML = word;
document.getElementById("current").innerHTML = guessMatches.join(" "); 
document.getElementById("guessesleft").innerHTML = lives;
// for (var i = randomWord.length; i = lettersInWord; i++) {
// 	guessMatches.push[i];
// }

//this is to see if the key pressed matches letters inthe random word
document.onkeyup = function(event) {
     var key= event.key;
     console.log(key);
     var inWord = false;
	for (var i = 0; i < lettersInWord.length; i++) {
		if (key == lettersInWord[i]) {
			inWord = true;
			guessMatches[i] = lettersInWord[i];


//			word.push(guessMatches);//how do I add to array each time? Just leaving 1 letter


		}

	
	}

	if (!inWord){
		misses.push(key);
		document.getElementById("guessedletters").innerHTML = misses.join(", ").toUpperCase();
		lives--; 
		document.getElementById("guessesleft").innerHTML = lives;
		//added this line to update lives left
//		document.getElementById("guessesLeft").innerHTML = (lives);
	


}
	document.getElementById("current").innerHTML = guessMatches.join(" ").toUpperCase(); 

	if (lives ===0){
		//chooseRandomWord(word);
		//blankOutWord();
		alert("Out of guesses! New word");
		resetGame();

	} 
}
function resetGame(){
		chooseRandomWord();
		lives = 10;
		misses = [];
		blankOutWord();
		document.getElementById("guessing").innerHTML = word;
		document.getElementById("guessesleft").innerHTML = lives;
		document.getElementById("current").innerHTML = guessMatches.join(" "); 
}
//to update game stats




// if (misses === 0){
// 	wins++
// }
// if (lettersInWord !== "any__"){
// 	wins++
// }
// if (misses === 0){

// }



//check if users keypress is an actual letter

//check if key pressed has already been used

//update number of attempts left

//add counter for number of wins
