//gameEnd.js
//stops the timer when the game ends
let timerEnd = false;

function gameOver(winner) {
	textSize(70);
	textStyle(BOLDITALIC);
	if (twoPlayer) {
		if (winner === 'player') {
			timerEnd = true;
			text("Player 1 Wins!", 745, 230);
		} else if (winner === 'enemy') {
			timerEnd = true;
			fill(85, 23, 85);
			text("Player 2 Wins!", 745, 230);
		} else if (winner === 'tie') {
			timerEnd = true;
			fill(0);
			text("It is a tie!", 745, 230);
		}
	} else {
		if (winner === 'player') {
			timerEnd = true;
			text("Player Wins!", 745, 230);
		} else if (winner === 'enemy') {
			timerEnd = true;
			fill(85, 23, 85);
			text("Enemy Wins!", 745, 230);
		} else if (winner === 'tie') {
			timerEnd = true;
			fill(0);
			text("It is a tie!", 745, 230);
		}
	}
	if (timerEnd) {
		backToMenu();
	}
}//gameOver

function backToMenu() {
	//button animation when hovering
	if (mouseX >= 630 && mouseX <= 880 && mouseY >= 305 && mouseY <= 365) {
		hovering[7] = true;
		cursor('pointer');
	} else {
		cursor('default');
		hovering[7] = false;
	}
	if (hovering[7]) {
		fill(0);
	} else {
		fill(37);
	}
	//normal button
	stroke(0);
	rect(630, 305, 250, 60, 10);
	fill(255);
	textSize(30);
	text("BACK TO MENU", 753, 335);
}//instructions