//fight.js

//run music once
let fightMusic = false;
let fightDisplay = false;

function fight(){
	//background setup
	setting(1);
	textFont('Electrolize');
	textSize(70);
	textStyle(BOLDITALIC);

	//fire animation for background
	background(fire);
	
	if(!fightDisplay){
		text("FIGHT!",745,310);
		setTimeout(() => fightDisplay = true, 4000)
	}
	
	//character loop of both player and enemy
	player.loop();
	enemy.loop();

	//healthbar of player and enemy
	healthBar();

	//game music
	if(!fightMusic){
		playMusic(1);
		fightMusic = true;
	}	
	
	//timer for the game
	roundTimer();

	//gameEnd when a character wins or ties
	gameOver();

	//stops movement if the game ends
	if(!timerEnd && fightDisplay){
		//changes position of the player left and right, as well as crouch
		if (keyIsDown(68) && player.lastKey === 'd' && player.allowCrouch) {
			player.speed.x = 5;
		} else if (keyIsDown(65) && player.lastKey === 'a' && player.allowCrouch) {
			player.speed.x = -5;
		} else if (keyIsDown(83) && player.speed.y === 0) {
			if(player.speed.x === 0){
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
	
		//changes position of the enemy left and right, as well as crouch
		if (keyIsDown(76) && enemy.lastKey === 'l' && enemy.allowCrouch) {
			enemy.speed.x = 5;
		} else if (keyIsDown(74) && enemy.lastKey === 'j' && enemy.allowCrouch) {
			enemy.speed.x = -5;
		} else if (keyIsDown(75) && enemy.speed.y === 0) {
			if(enemy.speed.x === 0){
				enemy.position.y = 491;
				enemy.height = 85;
				enemy.allowCrouch = false;
			}
		} else if (!keyIsDown(75) && enemy.speed.y === 0) {
			enemy.position.y = 426;
			enemy.height = 150;
			enemy.speed.x = 0;
			enemy.allowCrouch = true;
		}
	
		//enemy jump
		if(enemy.speed.y === 0 && !enemy.allowJump && enemy.allowCrouch) {
			enemy.allowJump = true;
		}
	
		//player attack collision
		if(player.isAttackingHigh && rectCollide(player.highAttackBox, enemy)){
			gotHit('enemy', 5);
			player.isAttackingHigh = false;
		} else if (player.isAttackingLow && rectCollide(player.lowAttackBox, enemy)){
			gotHit('enemy', 5);
			player.isAttackingLow = false;
		}
	
		//enemy attack collision
		if(enemy.isAttackingHigh && rectCollide(enemy.highAttackBox, player)){
			gotHit('player', 5);
			enemy.isAttackingHigh = false;
		} else if (enemy.isAttackingLow && rectCollide(enemy.lowAttackBox, player)){
			gotHit('player', 5);
			enemy.isAttackingLow = false;
		}
	}
}//fight