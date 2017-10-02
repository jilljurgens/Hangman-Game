//getElementById 



// This array holds the words we are going to choose from.
var words = ["cat", "tree", "swing", "around", "dog"];
// This function will pick our word
function chooseRandomWord (wordArray) {
    var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    console.log(randomWord);
    return randomWord;
   
}
var word = chooseRandomWord(words); 
var lettersInWord = word.split("");
var guessMatches = [];
var misses = [];




document.getElementById("guessing").innerHTML = word;

// for (var i = randomWord.length; i = lettersInWord; i++) {
// 	guessMatches.push[i];
// }

//this is good!
document.onkeyup = function(event) {
     var key= event.key;
     console.log(key);
     var inWord = false;
	for (var i = 0; i < lettersInWord.length; i++) {
		if (key == word[i]) {
			inWord = true;
			guessMatches[i] = word[i];

		}

	
	}
	if (inWord) {
		misses.push(key);
		document.getElementById("guessedletters").innerHTML = (key);
	}
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

//generate _ _ on the screen for the lenght of word


