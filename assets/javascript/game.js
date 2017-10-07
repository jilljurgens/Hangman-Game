//getElementById 



// This array holds the words we are going to choose from.
var words = ["bat", "ball", "swing", "pitcher", "homerun", "single", "double", "triple", "out", ];
// This function will pick our word
function chooseRandomWord (wordArray) {
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    //console.log(randomWord);
    return randomWord;

}
   
//This is to split out the word  like_ _ _ _
function blankOutWord(wordToBlank){
	var lettersInWord = [];
    for (var j = 0; j < wordToBlank.length; j++) { 
	lettersInWord.push("_");
	console.log(wordToBlank);
	}
	return lettersInWord;
}


var word = chooseRandomWord(words); 
var lettersInWord = word.split("");
var guessMatches = blankOutWord(word);
var misses = [];
var lives = [10];
var wins = 0;
var wordArray =[];
var blankOutWord = [];
var wordToBlank =[];


//turn on line 38 (and line 23 in the index to see what word you are guessing)
//document.getElementById("guessing").innerHTML = word;
document.getElementById("current").innerHTML = guessMatches.join(" "); 
document.getElementById("guessesleft").innerHTML = lives;
document.getElementById("wins").innerHTML = wins;


//this is to see if the key pressed matches letters inthe random word
document.onkeyup = function(event) {
     var key= event.key;
     console.log(key);
     var inWord = false;
	for (var i = 0; i < lettersInWord.length; i++) {
		if (key == lettersInWord[i]) {
			inWord = true;
			guessMatches[i] = lettersInWord[i];


//			word.push(guessMatches);


		}

	
	}

	if (inWord === false){
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
	//I can't figure out the 2 that I need to compare for a win. I've tried all of the below options, with no luck. Consider this psuedo code I guess. The one I left has you winning every time! Ugh
	//lettersInWord.length===randomWord.length
	//lettersInWord.length === word.length
	//word.length === guessMatches.length
	//lettersInWord.length === guessMatches.length
	//word === lettersInWord
	//word.length===randomWord.length
	//guessMatches.join(" ").length===lettersInWord.length


//	if (word.length === guessMatches.length){
//		wins ++;
//		document.getElementById("wins").innerHTML = wins;
//		resetGame();

//	}
}
function resetGame(){
	// I'm unable to get this function to populate a new random word. It should be in this function so I could call the function when a win/loss happens. 
		chooseRandomWord(wordArray);
		//blankOutWord();
		lives = 10;
		misses =[];
		//guessMatches =[];
		//blankOutWord(wordToBlank);
		//document.getElementById("guessing").innerHTML = word;
		document.getElementById("guessesleft").innerHTML = lives;
		document.getElementById("current").innerHTML = guessMatches.join(" "); 

};
//to update game stats
resetGame();







//check if users keypress is an actual letter

//check if key pressed has already been used

//add counter for number of wins
