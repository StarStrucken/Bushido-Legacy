//key.js
let playerAttackTimer;
let enemyAttackTimer;

function keyPressed() {
	//only when the game is still playable
	if (!timerEnd && fightDisplay) {
		//player moving and jump keys
		if (player.position.y >= 426) {
			if (key === 'd') {
				player.lastKey = 'd';
			} else if (key === 'a') {
				player.lastKey = 'a';
			} else if (key === 'w' && player.allowJump) {
				player.speed.y = -13;
				player.allowJump = false;
			}
		}
		
		//player attacking keys (prevents attacking when crouching)
		if (key === 'c' && player.allowCrouch && !player.healthChanged && (millis() > playerAttackTimer + 1500)) {
			player.highAnimation = true;
			player.highAttack();
			playerAttackTimer = millis();
		} else if (key === 'v' && player.allowCrouch && !player.healthChanged && (millis() > playerAttackTimer + 1500)) {
			player.lowAnimation = true;
			player.lowAttack();
			print(player.lowAttackBox.position.y + player.lowAttackBox.height > enemy.position.y)
			print(player.lowAttackBox.position.y + player.lowAttackBox.height)
			print(enemy.position.y)
			playerAttackTimer = millis();
		}
		//enemy keys only works in multiplayer
		if (twoPlayer) {
			//enemy moving keys
			if (enemy.position.y >= 426) {
				if (key === 'l') {
					enemy.lastKey = 'l';
				} else if (key === 'j') {
					enemy.lastKey = 'j';
				} else if (key === 'i' && enemy.allowJump) {
					enemy.speed.y = -13;
					enemy.allowJump = false;
				}
			}
			//enemy attacking keys (prevents attacking when crouching)
			if (key === 'n' && enemy.allowCrouch && !enemy.healthChanged && (millis() > enemyAttackTimer + 1500)) {
				enemy.highAnimation = true;
				enemy.highAttack();
				enemyAttackTimer = millis();
			} else if (key === 'm' && enemy.allowCrouch && !enemy.healthChanged && (millis() > enemyAttackTimer + 1500)) {
				enemy.lowAnimation = true;
				enemy.lowAttack();
				enemyAttackTimer = millis();
			}
		}
	}
}//keyPressed