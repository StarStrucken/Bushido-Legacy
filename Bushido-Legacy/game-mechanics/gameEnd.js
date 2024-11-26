//gameEnd.js

//stops the timer when the game ends
let timerEnd = false;

function gameOver(winner){
	textSize(70);
	textStyle(BOLDITALIC);
	if(winner === 'player'){
		timerEnd = true;
		text("Player Wins!",745,310);
	} else if (winner === 'enemy'){
		timerEnd = true;
		fill(85,23,85);
		text("Enemy Wins!",745,310);
	} else if (winner === 'tie'){
		timerEnd = true;
		fill(0);
		text("It is a tie!",745,310);
	}
}//gameOver