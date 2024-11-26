//multiplayer.js
let twoPlayer;

function multiplayer() {
    if (twoPlayer) {
        //no movement until the game starts or none when it ends
        if (fightDisplay && !timerEnd) {
            //changes position of the enemy left and right, as well as crouch
            if (keyIsDown(76) && enemy.lastKey === 'l' && enemy.allowCrouch) {
                enemy.speed.x = 5;
            } else if (keyIsDown(74) && enemy.lastKey === 'j' &&
                enemy.allowCrouch) {
                enemy.speed.x = -5;
            } else if (keyIsDown(75) && enemy.speed.y === 0) {
                if (enemy.speed.x === 0) {
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
            if (enemy.speed.y === 0 && !enemy.allowJump &&
                enemy.allowCrouch) {
                enemy.allowJump = true;
            }
        }
    }
}//multiplayer