
var css = document.querySelector("h3");
var color1 = Random(color1);
var color2 = Random(color2);
console.log(color1);
console.log(color2);
//var color1 = document.querySelector(".color1");
//var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function Random(color) {
	var rand = Math.floor(Math.random()*10000);
	//console.log(rand);
	//console.log(document.getElementById(".color"))
	return document.getElementsByClassName(".color").innerHTML = rand;
	//console.log(color1);
	//console.log(color2);
}
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";



	css.textContent = body.style.background + ";";
}

color1[0].addEventListener("input", setGradient);

scolor2[0].addEventListener("input", setGradient);


/*var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
	 "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
*/
