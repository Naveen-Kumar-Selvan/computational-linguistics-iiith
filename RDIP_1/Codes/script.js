var Snowball = require('snowball');
var stemmer = new Snowball('English');


// Corpuses

var corpus1 = ['A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.'];

var corpus2 = ['A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.'];

var corpus3 = ['A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.'];

// Dropdown List
function message() {
	count = 0;
	if (document.getElementById("list0").selected) {
		alert("Select a Corpus");
		document.getElementById("description").innerHTML = '';
		document.getElementById("description1").innerHTML = '';
	} else if (document.getElementById("list1").selected) {
		document.getElementById("description").innerHTML = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole.Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.';
		document.getElementById("description1").innerHTML = "Enter the correct number of tokens and types from the corpus";
		document.getElementById("table").style.visibility = "visible";
		document.getElementById("button").style.visibility = "visible";
	} else if (document.getElementById("list2").selected) {
		document.getElementById("description").innerHTML = 'A wolf carried off a lamb. The lamb said, " I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.';
		document.getElementById("description1").innerHTML = "Enter the correct number of tokens and types from the corpus";
		document.getElementById("table").style.visibility = "visible";
		document.getElementById("button").style.visibility = "visible";
	} else if (document.getElementById("list3").selected) {
		document.getElementById("description").innerHTML = 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.';
		document.getElementById("description1").innerHTML = "Enter the correct number of tokens and types from the corpus";
		document.getElementById("table").style.visibility = "visible";
		document.getElementById("button").style.visibility = "visible";
	} else {
		document.getElementById("description").innerHTML = "";
		document.getElementById("description1").innerHTML = "";
	}
}

//Submit Button
function submitButton() {
	if (document.getElementById("tokens").value == 169 && document.getElementById('types').value == 80) {
		document.getElementById('tokens').style.backgroundColor = 'green';
		document.getElementById('types').style.backgroundColor = 'green';
		document.getElementById('description2').style.color = "#008000";
		document.getElementById("description2").innerHTML = "Right Answer";
		document.getElementById("allButtons").innerHTML = "<input type='submit' value='Continue'  onclick='continueButton()'>";
	} else if (document.getElementById('tokens').value == 111) {
		if (document.getElementById('types').value == 65) {
			document.getElementById('tokens').style.backgroundColor = 'green';
			document.getElementById('types').style.backgroundColor = 'green';
			document.getElementById('description2').style.color = "#008000";
			document.getElementById("description2").innerHTML = "Right Answer";
			document.getElementById("allButtons").innerHTML = "<input type='submit' value='Continue'  onclick='continueButton()'>";
		}
	} else if (document.getElementById('tokens').value == 219) {
		if (document.getElementById('types').value == 95) {
			document.getElementById('tokens').style.backgroundColor = 'green';
			document.getElementById('types').style.backgroundColor = 'green';
			document.getElementById('description2').style.color = "#008000";
			document.getElementById("description2").innerHTML = "Right Answer";
			document.getElementById("allButtons").innerHTML = "<input type='submit' value='Continue'  onclick='continueButton()'>";
		}
	} else {
		document.getElementById('tokens').style.backgroundColor = 'red';
		document.getElementById('types').style.backgroundColor = 'red';
		document.getElementById('description2').style.color = "#FF0000";
		document.getElementById("description2").innerHTML = " Wrong Answer";
	}
}

function continueButton() {
	document.getElementById("nextchk").style.backgroundColor = ''
	document.getElementById("button").style.visibility = "hidden"
	document.getElementById("description3").innerHTML = "Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."
	document.getElementById("description4").innerHTML = "#new types:";
	document.getElementById("nextchk").style.visibility = "visible"
	document.getElementById("nextchk").style.backgroundColor = ""
	document.getElementById("description2").innerHTML = "";
	document.getElementById("allButtons").innerHTML = "<input type='submit'  value='Submit'  onclick='submitButton1()'>";
}

function submitButton1() {
	if (document.getElementById('nextchk').value == 73) {
		document.getElementById('nextchk').style.backgroundColor = 'green';
		document.getElementById('description6').style.color = "#008000";
		document.getElementById("description6").innerHTML = "Right Answer";
	} else if (document.getElementById('nextchk').value == 56) {
		document.getElementById('nextchk').style.backgroundColor = 'green';
		document.getElementById('description6').style.color = "#008000";
		document.getElementById("description6").innerHTML = "Right Answer";
	} else if (document.getElementById('nextchk').value == 84) {
		document.getElementById('nextchk').style.backgroundColor = 'green';
		document.getElementById('description6').style.color = "#008000";
		document.getElementById("description6").innerHTML = "Right Answer";
	} else {
		document.getElementById('nextchk').style.backgroundColor = 'red';
		document.getElementById('description6').style.color = "#FF0000";
		document.getElementById("description6").innerHTML = "Wrong Answer";
	}
}