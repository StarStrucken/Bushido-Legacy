//fight.js
//run music once
let fightMusic = false;
let fightDisplay = false;

function fight() {
	//background setup
	setting(1);
	stroke(0);
	strokeWeight(8);
	fill(255);
	textFont('Electrolize');
	textSize(70);
	textStyle(BOLDITALIC);
	//fire animation for background
	background(fire);
	if (!fightDisplay) {
		text("FIGHT!", 745, 310);
		setTimeout(() => fightDisplay = true, 4000)
	}
	//character loop of both player and enemy
	player.loop();
	enemy.loop();
	//healthbar of player and enemy
	healthBar();
	//game music
	if (!fightMusic) {
		playMusic(1);
		fightMusic = true;
	}
	//timer for the game
	roundTimer();
	//gameEnd when a character wins or ties
	gameOver();
	//depending on the gamemode, the fight is either against a computer ai or someone else
	if (twoPlayer) {
		multiplayer();
	} else {
		AI();
	}
	//no movement until the game starts
	if (fightDisplay && !timerEnd) {
		//changes position of the player left and right, as well as crouch
		if (keyIsDown(68) && player.lastKey === 'd' && player.allowCrouch) {
			player.speed.x = 5;
		} else if (keyIsDown(65) && player.lastKey === 'a' && player.allowCrouch) {
			player.speed.x = -5;
		} else if (keyIsDown(83) && player.speed.y === 0) {
			if (player.speed.x === 0) {
				player.position.y = 491;
				player.height = 85;
				player.allowCrouch = false;
			}
		} else if (!keyIsDown(83) && player.speed.y === 0) {
			player.position.y = 426;
			player.height = 150;
			player.speed.x = 0;
			player.allowCrouch = true;
		}
		//player jump
		if (player.speed.y === 0 && !player.allowJump && player.allowCrouch) {
			player.allowJump = true;
		}
		//player attack collision
		if (player.isAttackingHigh && rectCollide(player.highAttackBox, enemy)) {
			gotHit('enemy', 5);
			player.isAttackingHigh = false;
		} else if (player.isAttackingLow && rectCollide(player.lowAttackBox, enemy)) {
			gotHit('enemy', 5);
			player.isAttackingLow = false;
		}
		//enemy attack collision
		if (enemy.isAttackingHigh && rectCollide(enemy.highAttackBox, player)) {
			//ai hits for more than in multiplayer
			if (twoPlayer) {
				gotHit('player', 5);
			} else {
				gotHit('player', 10);
			}
			enemy.isAttackingHigh = false;
		} else if (enemy.isAttackingLow && rectCollide(enemy.lowAttackBox, player)) {
			//ai hits for more than in multiplayer
			if (twoPlayer) {
				gotHit('player', 5);
			} else {
				gotHit('player', 10);
			}
			enemy.isAttackingLow = false;
		}
		//when the game ends, no movement
	} else {
		player.speed.x = 0;
		player.speed.y = 0;
		player.position.y = 426;
		enemy.speed.x = 0;
		enemy.speed.y = 0;
		enemy.position.y = 426;
	}
}//fight