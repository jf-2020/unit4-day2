/* exercises_102.js - this prgm will solve the problems associated with
					  unit 4 day 2's exercises.
   jf - 5/7 
*/

// problem 1 - print all the integers between 2 given integers, inclusive
function printNumbers1(startNum, endNum) {
	for (let i = startNum; i <= endNum; i++) {
		console.log(i);
	}
}

function printNumbers2(startNum, endNum) {
	let i = startNum;
	while (i <= endNum) {
		console.log(i);
		i++;
	}
}

// problem 2 - print a square of a given size using asterisks
function printSquare(size) {
	let s = "", i = 0, j = 0;
	for (let i = 0; i < size; i++) {
		s = s + "*";
	}
	for (j; j < size; j++) {
		console.log(j + ": " + s);
	}
}

// problem 3 - print a box wiht a given height and width, empty interior
function printBox(width, height) {
	let s = "", spaces = "", count = 0;
	for (let row = 0; row < height; row++) {
		if ((row == 0) || (row == height - 1)) {
			for (let column = 0; column < width; column++) {
				s += "*";
			}
			console.log(count + ": " + s);
			s = "";
		} else {
			s = "*";
			for (let column = 1; column < width - 1; column++) {
				spaces += " ";
			}
			s += spaces + "*";
			console.log(count + ": " + s);
			s = "", spaces = "";
		}
	count++;
	}
}

// problem 4 - print a banner that is the lenght of the given text
function printBanner(bannerText) {
	let i = 0, j = 0, count = 0; s = "";
	for (; j < 3; j++) {
		if (j != 1) {
			for (i = 0; i < bannerText.length + 4; i++) {
				s += "*";
			}
			console.log(count + ": " + s);
		} else {
			s = "* " + bannerText + " *";
			console.log(count + ": " + s);
		}
		s = "";
		count++;
	}
}

// problem 5 - given an integer, gather all factors of said number into
//			   an array
function factors(num) {
	let factors = [];
	for (let potentialFactor = 1; potentialFactor <= num; potentialFactor++) {
		if (num % potentialFactor == 0) {
			console.log("adding factor: " + potentialFactor);
			factors.push(potentialFactor);
		}
	}
	return factors;
}

// problem 6 - apply the ceaser cipher to a given string
function cipher(plainText, shift) {
	let cipherText = "", isCapital = false;
	for (let i = 0; i < plainText.length; i++) {
		// ignore spaces
		if (plainText[i] != " ") {
			// get ascii val of char
			let asciiVal = plainText.charCodeAt(i);
			// asjust to the appropriate basis
			if (asciiVal <= 90) {
				isCapital = true;
				asciiVal -= 65;
			} else {
				asciiVal -= 97;
			}
			// apply shift, taking into account length of alphabet
			let shiftVal = (asciiVal + shift) % 26;
			// convert back to char
			if (isCapital) {
				shiftVal += 65;
			} else {
				shiftVal += 97;
			}
			let ceaseredChar = String.fromCharCode(shiftVal);
			// add to ciphered text
			cipherText += ceaseredChar;
			// reinitialize capital boolean
			isCapital = false;
		} else {
			// add space
			cipherText += " ";
		}
	}
	return cipherText;
}

// problem 7 - decipher a given cipher text via a reverse substitution
//			   cipher
function decipher(cipherText, offset) {
	// simply call cipher on the distance of the offset from 26
	return cipher(cipherText, 26 - offset);
}

// problem 8 - performs the leet speak translation on a given string
function leetspeak(text) {
	let translatableChars = ['A', 'E', 'G', 'L', 'O', 'S', 'T'];
	let translatedChars = [4, 3, 6, 1, 0, 5, 7];
	let translatedText = '';
	let translated = false;
	for (let i = 0; i < text.length; i++) {
		for (let j = 0; j < translatableChars.length; j++) {
			if (text[i].toLowerCase() == translatableChars[j].toLowerCase()) {
				translatedText += translatedChars[j];
				translated = true;	
			}
		}
		if (!translated) {
			translatedText += text[i];
			translated = false;	
		}		
	}
	return translatedText;
}

// problem 9 - given a string, extend any presence of a long vowel to 
//			   a length of three. assume that there exists only one
//			   such vowel in the string and that it exists within the
//			   middle of it (i.e. not at the beginning or end)
function longLongVowels(string) {
	// assume string non-empty
	let result = string[0];
	// loop thru 2nd to last - 1 letter
	for (let i = 1; i < string.length-1; i++) {
		// look ahead to see if the chars aren't repeated
		if (string[i] != string[i+1]) {
			// if not, then add current char to str
			result += string[i];
		} else {
			// otherwise, repeated so add three copies of curr char
			result += string[i] + string[i] + string[i];
			// bump up the count an extra 1 to avoid the repeated char
			i++;
		}
	}
	// add in last char
	result += string[string.length-1];
	return result;
}

// problem 10 - sum the numbers from a given array
function sumNumbers(arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		result += arr[i];
	}
	return result;
}

// problem 11 - given an array of integers, return an array containing
//				only the nonnegative integers in said array
function positiveNumbers(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= 0) {
			result.push(arr[i]);
		}
	}
	return result;
}

// main function for running the overall problem code
function main() {
	// problem 1
	// (a)
	const startNum = 1, endNum = 10;
	console.log("Calling printNumbers1(" + startNum + ", " + endNum + ")");
	printNumbers1(startNum, endNum);
	// (b)
	console.log("\nCalling printNumbers2(" + startNum + ", " + endNum + ")");
	printNumbers2(startNum, endNum);

	// problem 2
	const size = 5;
	console.log("\nCalling printSquare(" + size + ")");
	printSquare(size);

	// problem 3
	const height = 4, width = 6;
	console.log("\nCalling printBox(" + width + ", " + height + ")");
	printBox(width, height);
	const height1 = 10, width1 = 10;
	console.log("\nCalling printBox(" + width1 + ", " + height1 + ")");
	printBox(width1, height1);

	// problem 4
	const bannerText = "Welcome to DigitalCrafts";
	console.log("\nCalling printBanner(" + bannerText + ")");
	printBanner(bannerText);

	// problem 5
	const testFactors = [1, 10, 100, 1235236];
	for (let i = 0; i < testFactors.length; i++) {
		console.log("\nCalling factors(" + testFactors[i] + ")");
		console.log(factors(testFactors[i]));
	}

	// problem 6
	const plainText = "Genius without education is like silver in the mine";
	const offset = 13;
	console.log("\nCalling cipher(" + plainText + ", " + offset + ")");
	console.log(cipher(plainText, offset));

	// problem 7
	const cipherText = "Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar"
	const offset1 = 13;
	console.log("\nCalling decipher(" + cipherText + ", " + offset1 + ")");
	console.log(decipher(cipherText, offset1));

	// testing problem 6 in conjunction with problem 7
	const testString = "hello world";
	// get cipher text for ROT3 cipher
	console.log("\nCalling cipher(" + testString + ", " + 3 + ")");
	const ciphertxt = cipher(testString, 3);
	console.log("cipher text: " + ciphertxt);
	// now attempt to decipher it
	console.log("\nCalling decipher(" + ciphertxt + ", " + 3 + ")");
	const decipheredtxt = decipher(ciphertxt, 3);
	console.log("deciphered text: " + decipheredtxt);

	// problem 8
	const testLeetString = 'Leet';
	console.log("\nCalling leetspeak(" + testLeetString + ")");
	console.log(leetspeak(testLeetString));

	// problem 9
	const testsForLongVowels = ['Good', 'Cheese', 'Man'];
	for (let i = 0; i < testsForLongVowels.length; i++) {
		let test = testsForLongVowels[i];
		console.log("\nCalling longLongVowels(" + test + ")");
		console.log(longLongVowels(test));
	}

	// problem 10
	const testArray = [1, 4, 8];
	console.log("\nCalling sumNumbers(" + testArray + ")");
	console.log(sumNumbers(testArray));

	// problem 11
	const testArraysForPositives = [ [1, -3, 5, -3, 0],
									 [1, 2, 3],
									 [-1, -2, -3]
									]
	for (let i = 0; i < testArraysForPositives.length; i++) {
		let testArr = testArraysForPositives[i];
		console.log("\nCalling positiveNumbers(" + testArr + ")");
		console.log(positiveNumbers(testArr));
	}
}

main();