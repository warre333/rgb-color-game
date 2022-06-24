// Set necessary variables
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var easyButton = document.querySelector(".mode");

// start init function
init();

function init() {
  // Set the text color
	colorDisplay.textContent = pickedColor;
  // Setup the game
	setupSquares();
	setupMode();
	reset();
}

// Reset game
resetButton.addEventListener("click", function() {
	reset();
});

// Setup squares
function setupSquares() {
  // Loop over all squares
	for (var i = 0; i < squares.length; i++) {
    // Give them all there color
		squares[i].style.backgroundColor = colors[i];
    // Wait on click for all squares
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
      // See if the clicked color is the right color + display if it's correct or not
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

// Setup mode
function setupMode() {
  // Loop over all mode buttons (easy/hard)
	for(var i = 0; i < modeButtons.length; i++) {
    // Listen for click
		modeButtons[i].addEventListener("click", function() {
      // Remove selected and add for the selected mode
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected");
      // Set the right amount of squares
			if (this.textContent === "Easy") {
				numSquares = 3;
			}
			else {
				numSquares = 6;
			}
      
      // Reset game
			reset();
		});
	}
}

// Reset function
function reset() {
  // generate random colors
	colors = genRandomColors(numSquares);
	pickedColor = chooseColor();
  // Set texts
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
  
  // Loop over all squares and set the bg color
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) { 
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}

// Change all squares to the right color
function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

// Randomly generate the right color
function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Generate random color for all squares
function genRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
	return arr;
}

// Choose the color for the squares
function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}




