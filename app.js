var numOfSquares=6;
var colors=[];
var squares=document.querySelectorAll(".square");
var displayColor=document.getElementById("displayColor");
var pickedColor=pickColor();
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var messageDisplay=document.getElementById("message");
var modeButtons=document.querySelectorAll(".mode");

init();

//inital function
function init(){
	colors=changeColor(numOfSquares);
//change mode
   setupModes();
//setup squares
   setupSquares();
}

function setupModes(){
	for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	resetButton.classList.remove("selected");
	this.classList.add("selected");
	this.textContent==="Easy"? numOfSquares=3: numOfSquares=6;
	reset();
});
}
}

function setupSquares(){
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor=this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct!";
			h1.style.backgroundColor=pickedColor;
			colorChange(pickedColor);
			resetButton.textContent="Play Again?";

		}else{
			this.style.backgroundColor="black";
			messageDisplay.textContent="Try again!";
		}
	});
}
}

//reset color
function reset(){
	colors=changeColor(numOfSquares);
	pickedColor=pickColor();
	displayColor.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
	}
}
	h1.style.backgroundColor="steelblue";
	messageDisplay.textContent="";
	resetButton.textContent="New Colors";

}

//resetButton to reset all colors
resetButton.addEventListener("click", function(){
	resetButton.classList.add("selected");
	reset();
});


//guess correct, all color change to correct color
function colorChange(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
//random pick target color
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
//generate random 6 colors
function changeColor(num){
	var arr=[];
	for(var i=0;i<num;i++)
	arr.push(randomColor());
	return arr;
}
//generate one random color
function randomColor(){
	var r=Math.floor(Math.random()*256); //0-255
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";

}