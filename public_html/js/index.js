var words = ["LOADING", "LOVE","SUNRISERS","TRUST", "FRIENDS", "HUNT", "INSANITY", "CM PUNK", "DEVIL", "BROTHER", "WAKE UP", "GTS", "CYBRIX", "CYBRID", "HOME","DOWNLOAD","LIFE","DOPE","HIGH","MOVIES","SERIES","GAMES","MORE"];

window.addEventListener("load", function() {
		var randoms = window.document.getElementsByClassName("randoms");
		for (i = 0; i < randoms.length; i++)
				changeWord(randoms[i]);
}, false);

function changeWord(a) {
		a.style.opacity = '0.1';
		a.innerHTML = words[getRandomInt(0, words.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord(a);
		}, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

	var myVar;

	function myFunction() {
	    myVar = setTimeout(showPage, 5000);
	}

	function showPage() {
	  document.getElementById("contain").style.display = "none";
	  document.getElementById("myDiv").style.display = "block";
}
