//getElementById 



// This array holds the words we are going to choose from.
var words = ["cat", "tree", "swing", "around", "dog"];
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
	return lettersInWord
}

//blankOutWord();
var word = chooseRandomWord(words); 
//var lettersInWord = blankOutWord(word);
var lettersInWord = word.split("");
var guessMatches = blankOutWord(word);
var misses = [];
var lives = [10];
var wins = [0];
//var x = ("_");
//var y = [];


// document.getElementById("current").innerHTML = guessMatches;
document.getElementById("guessing").innerHTML = word;
document.getElementById("current").innerHTML = guessMatches.join(" "); //why are these showing?
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

	if (!inWord) {
		misses.push(key);
		document.getElementById("guessedletters").innerHTML = misses.join(", ");
//		lives--; //added this line to update lives left
//		document.getElementById("guessesLeft").innerHTML = (lives);
	}
	document.getElementById("current").innerHTML = guessMatches.join(" "); 
}
//to update game stats
if (misses === 0){
	wins++
}
if (lettersInWord !== "any__"){
	wins++
}
if (misses === 0){

}
//now put this in a string.	


// append multiple values to the array
// arr.push("Salut", "Hey");

// display all values
// for (var i = 0; i < words.length; i++) {
// 	if (words.charAt(i) == key) {
// 		console.log(words);
// 	}
// }



//push users keypress to the html page in upper case
//check if users keypress is an actual letter

//check if key pressed has already been used

//update number of attempts left
//check if there are any__ left to guess in the word
//add counter for number of wins
