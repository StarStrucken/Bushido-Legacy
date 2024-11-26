//healthbar.js

//global array that changes the size of the health bars
//[0] is player, [1] is enemy
let healthBarChange = [100,100];

function gotHit(character, damage){
	//character health and their health bar reduces in size
	if(player.health > 0 && enemy.health > 0) {
		if(character === 'player') {
			player.health -= damage;
			player.healthChanged = true;
			print(character + " has " + player.health + " health left.");
			healthBarChange[0] -= damage*4;
		} else if (character === 'enemy'){
			enemy.health -= damage;
			enemy.healthChanged = true;
			print(character + " has " + enemy.health + " health left.");
			healthBarChange[1] -= damage*4;
		}
	}
}//gotHit

function healthBar(){
	stroke(0);
	strokeWeight(5);
	//background for health bars
	fill(120,33,33);
	rect(330,80,400,40,15);
	fill(85,23,85);
	rect(770,80,400,40,15);
	//player bar size is relative to healthBarChange
	if(player.health > 0){
		fill(195,60,42);
		rect(430-healthBarChange[0],80,300+healthBarChange[0],40,15);
	}
	//enemy bar size is relative to healthBarChange
	if(enemy.health > 0){
		fill(136,29,134);
		rect(770,80,300+healthBarChange[1],40,15);
	}
	//sends parameter to gameEnd function determining who wins when health is run out
	if (enemy.health <= 0) {
		gameOver('player');
	} else if (player.health <= 0) {
		gameOver('enemy');
	}
}//healthBar