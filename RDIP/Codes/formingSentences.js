var correctSentences = "";
var index = 0;

// English Sentences
var correctAnswers = [
	[
		'John ate an apple before afternoon',
		'before afternoon John ate an apple',
		'John before afternoon ate an apple'
	],
	[
		'some students like to study at night', //Changed this sentence because both sentences are't matching
		'at night some students like to study'
	],
	[
		'John and Mary went to church',
		'Mary and John went to church'
	],
	[
		'John went to church after eating',
		'after eating John went to church',
		'John after eating went to church'
	],
	[
		'did he go to market',
		'he did go to market'
	],
	[
		'the woman who called my sister sells cosmetics',
		'the woman who sells cosmetics called my sister',
		'my sister who sells cosmetics called the woman',
		'my sister who called the woman sells cosmetics'
	],
	[
		'John goes to the library and studies',
		'John studies and goes to the library'
	],
	[
		'John ate an apple so did she',
		'she ate an apple so did John'
	],
	[
		'the teacher returned the book after she noticed the error',
		'the teacher noticed the error after she returned the book',
		'after the teacher returned the book she noticed the error',
		'after the teacher noticed the error she returned the book',
		'she returned the book after the teacher noticed the error',
		'she noticed the error after the teacher returned the book',
		'after she returned the book the teacher noticed the error',
		'after she noticed the error the teacher returned the book'
	],
	[
		'I told her that I bought a book yesterday',
		'I told her yesterday that I bought a book',
		'yesterday I told her that I bought a book',
		'I bought a book that I told her yesterday',
		'I bought a book yesterday that I told her',
		'yesterday I bought a book that I told her'
	]
];

var collectionOfEnglishSentence = [
	'John ate an apple before afternoon',
	'some students like to study in the night',
	'John and Mary went to church',
	'John went to church after eating',
	'did he go to market',
	'the woman who called my sister sells cosmetics',
	'John goes to the library and studies',
	'John ate an apple so did she',
	'the teacher returned the book after she noticed the error',
	'I told her that I bought a book yesterday',
];

// Hindi sentences
var correctAnswers1 = [
	[
		'राम और श्याम बाजार गयें',
		'राम और श्याम गयें बाजार',
		'बाजार गयें राम और श्याम',
		'गयें बाजार राम और श्याम'
	],
	[
		'राम सोया और श्याम भी',
		'श्याम सोया और राम भी',
		'सोया श्याम और राम भी',
		'सोया राम और श्याम भी'
	],
	[
		'मैंने उसे बताया कि राम सो रहा है',
		'मैंने उसे बताया कि सो रहा है राम',
		'उसे मैंने बताया कि राम सो रहा है',
		'उसे मैंने बताया कि सो रहा है राम',
		'मैंने बताया उसे कि राम सो रहा है',
		'मैंने बताया उसे कि सो रहा है राम',
		'उसे बताया मैंने कि राम सो रहा है',
		'उसे बताया मैंने कि सो रहा है राम',
		'बताया मैंने उसे कि राम सो रहा है',
		'बताया मैंने उसे कि सो रहा है राम',
		'बताया उसे मैंने कि राम सो रहा है',
		'बताया उसे मैंने कि सो रहा है राम'
	],
	[
		'राम खाकर सोया',
		'खाकर राम सोया',
		'राम सोया खाकर',
		'खाकर सोया राम',
		'सोया राम खाकर',
		'सोया खाकर राम'
	],
	[
		'बिल्लियों को मारकर कुत्ता सो गया',
		'मारकर बिल्लियों को कुत्ता सो गया',
		'बिल्लियों को मारकर सो गया कुत्ता',
		'मारकर बिल्लियों को सो गया कुत्ता',
		'कुत्ता सो गया बिल्लियों को मारकर',
		'कुत्ता सो गया मारकर बिल्लियों को',
		'सो गया कुत्ता बिल्लियों को मारकर',
		'सो गया कुत्ता मारकर बिल्लियों को'
	],
	[
		'एक लाल किताब वहाँ है',
		'एक लाल किताब है वहाँ',
		'वहाँ है एक लाल किताब',
		'है वहाँ एक लाल किताब'
	],
	[
		'एक बड़ी सी किताब वहाँ है',
		'एक बड़ी सी किताब है वहाँ',
		'बड़ी सी एक किताब वहाँ है',
		'बड़ी सी एक किताब है वहाँ',
		'वहाँ है एक बड़ी सी किताब',
		'वहाँ है बड़ी सी एक किताब',
		'है वहाँ एक बड़ी सी किताब',
		'है वहाँ बड़ी सी एक किताब'
	]
];

var collectionOfHindiSentence = [
	'राम और श्याम बाजार गयें',
	'राम सोया और श्याम भी',
	'मैंने उसे बताया कि राम सो रहा है',
	'राम खाकर सोया',
	'बिल्लियों को मारकर कुत्ता सो गया',
	'एक लाल किताब वहाँ है',
	'एक बड़ी सी किताब वहाँ है'
];

// Dropdown List
function message() {
	document.getElementById("description2").innerHTML = '';
	document.getElementById("description3").innerHTML = '';
	document.getElementById("description3.1").innerHTML = '';
	document.getElementById("description4").innerHTML = '';
	document.getElementById("description5").innerHTML = '';
	document.getElementById("description6").innerHTML = '';
	document.getElementById("resetText").style.visibility = "hidden";
	document.getElementById("checkSentence").style.visibility = "hidden";
	document.getElementById("allButtons").style.visibility = "hidden";
	count = 0;
	if (document.getElementById("list0").selected) {
		alert("Select Language");
		document.getElementById("description").innerHTML = '';
		document.getElementById("description1").innerHTML = '';
	} else if (document.getElementById("list1").selected) {
		document.getElementById("description").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("description1").innerHTML = "(select the buttons in proper order)"
		index = Math.floor(Math.random() * collectionOfEnglishSentence.length);
		var english = collectionOfEnglishSentence[index];
		correctSentences = (correctAnswers[index]); // this array will have all the correctSentences.
		var body = document.getElementsByTagName("p")[3];
		separate = english.split(' ');
		for (initial = 0; initial < separate.length; initial++) {
			next = Math.floor(Math.random() * separate.length);
			english = separate[initial];
			separate[initial] = separate[next];
			separate[next] = english;
		}
		for (initial = 0; initial < separate.length; initial++) {
			var button = document.createElement("button");
			button.innerHTML = separate[initial];
			button.id = "button" + initial;
			body.appendChild(button);

			button.addEventListener("click", function () {
				document.getElementById("description3").innerHTML = "Formed Sentences" + " ";
				document.getElementById("description3.1").innerHTML = "(after selecting words):";
				this.style.visibility = "hidden";
				count = count + 1;
				console.log(count);
				if (count > 0) {
					document.getElementById("resetText").style.visibility = "visible";
				}
				if (count == separate.length) {
					document.getElementById("checkSentence").style.visibility = "visible";
				}
				var gettingData = document.getElementById("description4").innerHTML.replace(/\s+$/, '');
				data = gettingData.split(" ");
				document.getElementById("description4").innerHTML = gettingData + " " + this.innerHTML;
			});
		}
	} else if (document.getElementById("list2").selected) {
		document.getElementById("description").innerHTML = "Form a sentence (Declarative or Interrogative or any other type) from the given words";
		document.getElementById("description1").innerHTML = "(select the buttons in proper order)"
		index = Math.floor(Math.random() * collectionOfHindiSentence.length);
		var hindi = collectionOfHindiSentence[index];
		//console.log("hindi", hindi);
		correctSentences = (correctAnswers1[index]); // this array will have all the correctSentences.
		var body = document.getElementsByTagName("p")[3];
		separate = hindi.split(' ');

		for (initial = 0; initial < separate.length; initial++) {
			next = Math.floor(Math.random() * separate.length);
			hindi = separate[initial];
			separate[initial] = separate[next];
			separate[next] = hindi;
		}
		for (initial = 0; initial < separate.length; initial++) {
			var button = document.createElement("button");
			button.innerHTML = separate[initial];
			button.id = "button" + initial;
			body.appendChild(button);

			button.addEventListener("click", function () {
				document.getElementById("description3").innerHTML = "Formed Sentences" + " ";
				document.getElementById("description3.1").innerHTML = "(after selecting words):";
				this.style.visibility = "hidden";
				count = count + 1;
				if (count > 0) {
					document.getElementById("resetText").style.visibility = "visible";
				}
				if (count == separate.length) {
					document.getElementById("checkSentence").style.visibility = "visible";
				}
				var gettingData = document.getElementById("description4").innerHTML.replace(/\s+$/, '');
				data = gettingData.split(" ");
				document.getElementById("description4").innerHTML = gettingData + " " + this.innerHTML;
			});
		}
	} else {
		document.getElementById("description").innerHTML = "";
		document.getElementById("description1").innerHTML = "";
		document.getElementById("description2").innerHTML = '';
	}
}

// Reset Function
function ResetText() {
	console.log("reset called");
	count = 0;
	for (i = 0; i < separate.length || i < separate.length; i++) {
		console.log("button" + i, document.getElementById('button' + i).style.visibility);
		if (document.getElementById('button' + i).style.visibility == "hidden") {
			document.getElementById('button' + i).style.display = "inline";
			document.getElementById('button' + i).style.visibility = "visible";
			document.getElementById('description3').innerHTML = "";
			document.getElementById('description3.1').innerHTML = "";
			document.getElementById('resetText').style.visibility = "hidden";
			document.getElementById('checkSentence').style.visibility = "hidden";
			document.getElementById('description5').innerHTML = "";
			document.getElementById('allButtons').innerHTML = "";
			document.getElementById('description6').innerHTML = "";
		}
	}
	document.getElementById('description4').innerHTML = " ";
}

// Check the Sentence Function
function CheckSentence() {
	var s1Parts = document.getElementById("description4").innerHTML.split(' ');
	for (let j = 0; j < correctSentences.length; j++) {
		var s2Parts = correctSentences[j].split(' ');
		var score = 0;
		for (var i = 0; i < s1Parts.length; i++) {
			if (s1Parts[i + 1] === s2Parts[i])
				score++;
		}
		if (score === s1Parts.length) {
			break; // breaking when 2 sentences match.
		}
	}

	if (score === s1Parts.length) {
		document.getElementById('description5').innerHTML = "Right answer!!!";
		document.getElementById('description5').style.color = "#008000";
		document.getElementById('description5').style.visibility = 'visible';
	} else {
		document.getElementById('description5').innerHTML = "Wrong answer!!!";
		document.getElementById('description5').style.color = "#FF0000";
		document.getElementById('description5').style.visibility = 'visible';
		document.getElementById('allButtons').style.visibility = "visible";
		document.getElementById("allButtons").innerHTML = "<input type='submit' value='Get Correct Sentence'  onclick='getAnswers()'>";
	}
}

// Get Correct Sentence and Get Answers Function
function getAnswers() {

	document.getElementById("allButtons").innerHTML = "";
	document.getElementById("description6").style.visibility = "visible";
	console.log("1", correctSentences, correctSentences[2], correctSentences.length)
	var answerContainer = document.getElementById('description6') // creating a conatiner that has all correct answers listed one by one.
	for (let i = 0; i < correctSentences.length; i++) {
		answerContainer.appendChild(document.createTextNode(i + 1 + "." + " " + correctSentences[i]));
		answerContainer.appendChild(document.createElement("br"));
	}
	document.getElementById("allButtons").innerHTML = "<input type='submit'  value='Hide the correct Sentence'  onclick='hideSentences()'>";
}

//Hide button function 
function hideSentences() {
	var answers = collectionOfEnglishSentence[index];
	document.getElementById("description6").style.visibility = "hidden";
	document.getElementById("description6").innerHTML = "";
	document.getElementById("allButtons").innerHTML = "<input type='submit'  value='Get Answers'  onclick='getAnswers()'>";
}