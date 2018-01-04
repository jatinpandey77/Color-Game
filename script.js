var number = 6;
var color = []
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

// INITIALIZE THE GAME
function init(){
	setupButtons();
	setupSquares();
	reset();
}

// SETUP MODE
function setupButtons(){
	for(var i = 0; i < modeButton.length; i++){
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("select");
			modeButton[1].classList.remove("select");
			this.classList.add("select");
			this.textContent === "Easy" ? number = 3: number = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				msgDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColor(clickedColor);
				h1.style.background = clickedColor;
			} 
			else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}

function reset(){
	color = generate(number);
	pickedColor = pick();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	msg.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(color[i]){
			squares[i].style.display = "block"
			squares[i].style.background = color[i];
		} 
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})


function changeColor(pcolor)
{
	for(var i = 0; i < squares.length;i++)
	{
		squares[i].style.backgroundColor = pcolor;
	}
}

// 	Pick Color 
function pick(){
	return color[Math.floor(Math.random() * number)];
}
//	Generate Random Colors array
function generate(num) {
	var a = [];
	for (var i = 0; i < num; i++) {
		a.push(randomColor());	
	}
	return a;
}
//	Generate a random RGB Color
function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

