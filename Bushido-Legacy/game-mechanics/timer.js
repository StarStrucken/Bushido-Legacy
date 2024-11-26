//timer.js

//90 seconds
let timer = 90; 

function roundTimer(){
	//center square
	fill(255);
	square(710,60,80,10);
	//reduces timer every second (basically)
	if(timer > 0 && !timerEnd && fightDisplay){
		timer -= 0.012;
	}
	//text of timer in square
	fill(0);
	textSize(20);
	textStyle(BOLD);
	noStroke();
	textAlign(CENTER,CENTER);
	text(Math.round(timer),750,100);

	//sends parameter to gameEnd function determining who wins when 			timer is over
	if(timer <= 0){
		if(player.health > enemy.health){
			//player wins on more health
			gameOver('player');
		} else if (player.health < enemy.health) {
			//enemy wins on more health
			gameOver('enemy');
		} else if (player.health === enemy.health){
			//tie
			gameOver('tie');
		}
	}
}//roundTimer