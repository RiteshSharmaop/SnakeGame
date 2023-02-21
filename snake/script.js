let snake = document.getElementById("snake");
let food = document.getElementById("food");
let score = document.getElementById("score-value");
let gameOver = document.getElementById("game-over");

let positionX = 0;
let positionY = 0;
let foodX = 0;
let foodY = 0;
let scoreValue = 0;

function generateFood() {
	foodX = Math.floor(Math.random() * 30) * 20;
	foodY = Math.floor(Math.random() * 30) * 20;
	food.style.top = foodY + "px";
	food.style.left = foodX + "px";
}

function updateScore() {
	scoreValue += 10;
	score.innerHTML = "Score: " + scoreValue;
}

function checkCollision() {
	if (positionX < 0 || positionX > 690 || positionY < 0 || positionY > 550) {
		gameOver.style.display = "block";
		return true;
	}

	if (positionX === foodX && positionY === foodY) {
		generateFood();
		updateScore();
	}

	return false;
}

generateFood();

document.addEventListener("keydown", function(event) {
	if (event.code === "KeyA") {
		positionX -= 20;
	} else if (event.code === "KeyD") {
		positionX += 20;
	} else if (event.code === "KeyW") {
		positionY -= 20;
	} else if (event.code === "KeyS") {
		positionY += 20;
	}

	snake.style.top = positionY + "px";
	snake.style.left = positionX + "px";

	if (checkCollision()) {
		document.removeEventListener("keydown", arguments.callee);
	}
});
