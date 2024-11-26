//character.js

class character {
	constructor({ position, speed, boxAlter, name }) {
		//player and enemy
		this.position = position;
		this.speed = speed;
		this.name = name;
		this.width = 60;
		this.height = 150;
		this.lastKey;
		this.isAttackingHigh;
		this.highAnimation;
		this.isAttackingLow;
		this.lowAnimation;
		this.allowJump = true;
		this.allowCrouch = true;
		this.health = 100;
		this.healthChanged = false;
		//attacking boxes
		this.highAttackBox = {
			position: {
				x: this.position.x,
				y: this.position.y
			},
			boxAlter: boxAlter,
			height: 50,
			width: 90,
		};
		this.lowAttackBox = {
			position: {
				x: this.position.x,
				y: this.position.y
			},
			boxAlter: boxAlter,
			height: 50,
			width: 90,
		};
	}//constructor

	animation() {
		//player's animations
		if (this.name === 'player') {
			//only animations for when player is not attacking
			if (!this.isAttackingHigh && !this.isAttackingLow && !this.highAnimation && !this.lowAnimation && !this.healthChanged) {
				//idle facing right
				if (this.speed.x === 0 && this.speed.y === 0 && this.allowCrouch && this.lastKey != 'a') {
					image(playerAnimations[0], this.position.x - 10, this.position.y - 12, 96, 162);
					//idle facing left
				} else if (this.speed.x === 0 && this.speed.y === 0 && this.allowCrouch && this.lastKey === 'a') {
					image(playerAnimations[1], this.position.x - 25, this.position.y - 12, 96, 162);
					//jumping right
				} else if (this.speed.y != 0 && this.allowCrouch && this.lastKey != 'a') {
					image(playerAnimations[2], this.position.x, this.position.y, 80, 150);
					//jumping left
				} else if (this.speed.y != 0 && this.allowCrouch) {
					image(playerAnimations[3], this.position.x - 20, this.position.y, 80, 150);
					//moving right
				} else if (this.speed.y === 0 && this.speed.x > 0 && this.allowCrouch) {
					image(playerAnimations[4], this.position.x, this.position.y, 80, 150);
					//moving left
				} else if (this.speed.y === 0 && this.speed.x < 0 && this.allowCrouch) {
					image(playerAnimations[5], this.position.x - 15, this.position.y, 80, 150);
					//crouch right	
				} else if (!this.allowCrouch && this.lastKey != 'a') {
					image(playerAnimations[10],this.position.x-10,this.position.y-53,94,138);
					//crouch left	
				} else if (!this.allowCrouch && this.lastKey === 'a') {
					image(playerAnimations[11],this.position.x-20,this.position.y-53,94,138);
				}
			}
			//only animations for when the player is attacking high
			if (this.highAnimation) {
				if (this.lastKey != 'a') {
					//attacking high right
					image(playerAnimations[6], this.position.x - 70, this.position.y - 15, 240, 240);
				} else {
					//attacking high left
					image(playerAnimations[7], this.position.x - 110, this.position.y - 15, 240, 240);
				}
			}
			//only animations for when the player is attacking low
			if (this.lowAnimation) {
				if (this.lastKey != 'a') {
					//attacking low right
					image(playerAnimations[8], this.position.x - 80, this.position.y - 15, 240, 240);
				} else {
					//attacking low left
					image(playerAnimations[9], this.position.x - 100, this.position.y - 15, 240, 240);
				}
			}
			//animations for when player gets hit
			if(this.healthChanged){
				if(this.lastKey != 'a'){
					//hit facing left
					image(playerAnimations[13],this.position.x-5,this.position.y-5,76,156);
					setTimeout(() => this.healthChanged = false, 500);
				} else {
					//hit facing right
					image(playerAnimations[12],this.position.x-10,this.position.y-5,76,156);
					setTimeout(() => this.healthChanged = false, 500);
				}
			}
			//enemy animations
		} else if (this.name === 'enemy') {
			//only animations for when enemy is not attacking
			if (!this.isAttackingHigh && !this.isAttackingLow && !this.highAnimation && !this.lowAnimation && !this.healthChanged) {
				//idle facing left
				if (this.speed.x === 0 && this.speed.y === 0 && this.allowCrouch && this.lastKey != 'l') {
					image(enemyAnimations[0], this.position.x - 26, this.position.y - 12, 96, 162);
					//idle facing right
				} else if (this.speed.x === 0 && this.speed.y === 0 && this.allowCrouch && this.lastKey === 'l') {
					image(enemyAnimations[1], this.position.x - 10, this.position.y - 12, 96, 162);
					//jumping left
				} else if (this.speed.y != 0 && this.allowCrouch && this.lastKey != 'l') {
					image(enemyAnimations[2], this.position.x - 18, this.position.y, 80, 150);
					//jumping right
				} else if (this.speed.y != 0 && this.allowCrouch) {
					image(enemyAnimations[3], this.position.x, this.position.y, 80, 150);
					//moving left
				} else if (this.speed.y === 0 && this.speed.x < 0 && this.allowCrouch) {
					image(enemyAnimations[4], this.position.x - 20, this.position.y, 80, 150);
					//moving right
				} else if (this.speed.y === 0 && this.speed.x > 0 && this.allowCrouch) {
					image(enemyAnimations[5], this.position.x, this.position.y, 80, 150);
				  //crouch left	
				} else if (!this.allowCrouch && this.lastKey != 'l') {
					image(enemyAnimations[10],this.position.x-23,this.position.y-53,94,138);
					//crouch right	
				} else if (!this.allowCrouch && this.lastKey === 'l') {
					image(enemyAnimations[11],this.position.x-8,this.position.y-53,94,138);
				}
			}
			//only animations for when the enemy is attacking high
			if (this.highAnimation) {
				if (this.lastKey != 'l') {
					//attacking high left
					image(enemyAnimations[6], this.position.x - 110, this.position.y - 15, 240, 240);
				} else {
					//attacking high right
					image(enemyAnimations[7], this.position.x - 70, this.position.y - 15, 240, 240);
				}
			}
			//only animations for when the enemy is attacking low
			if (this.lowAnimation) {
				if (this.lastKey != 'l') {
					//attacking low left
					image(enemyAnimations[8], this.position.x - 100, this.position.y - 15, 240, 240);
				} else {
					//attacking low right
					image(enemyAnimations[9], this.position.x - 80, this.position.y - 15, 240, 240);
				}
			}
			//animations for when enemy gets hit
			if(this.healthChanged){
				if(this.lastKey != 'l'){
					//hit facing left
					image(enemyAnimations[12],this.position.x-10,this.position.y-5,76,156);
					setTimeout(() => this.healthChanged = false, 500);
				} else {
					//hit facing right
					image(enemyAnimations[13],this.position.x-5,this.position.y-5,76,156);
					setTimeout(() => this.healthChanged = false, 500);
				}
			}
		}
	}//animation

	display() {
		//player and enemy
		noStroke();
		noFill();
		rect(this.position.x, this.position.y, this.width, this.height);
		//animations for characters
		this.animation();
		//attacking boxes
		if (this.isAttackingHigh) {
			//attackBox high
			rect(this.highAttackBox.position.x, this.highAttackBox.position.y, this.highAttackBox.width, this.highAttackBox.height);
		} else if (this.isAttackingLow) {
			//attackBox low
			rect(this.lowAttackBox.position.x, this.lowAttackBox.position.y + 80, this.lowAttackBox.width, this.lowAttackBox.height);
		}
	}//display

	loop() {
		//loops display function
		this.display();
		//changes position of x or y according to speed
		this.position.x += this.speed.x;
		this.position.y += this.speed.y;
		//if the box hits the height of canvas, the y speed is 0; else gravity brings it down
		if (this.position.y + this.height + this.speed.y >= height) {
			this.speed.y = 0;
		} else {
			const gravity = 0.7;
			this.speed.y += gravity;
		}
		//border of the game (x)
		if (this.position.x <= 20) {
			this.position.x = 20;
		} else if (this.position.x + this.width >= width - 20) {
			this.position.x = width - this.width - 20;
		}
		//alters the boxAlter depending on the last key pressed
		if (this.name === 'player') {
			if (this.lastKey === 'd') {
				this.highAttackBox.boxAlter = -60;
				this.lowAttackBox.boxAlter = -60;
			} else if (this.lastKey === 'a') {
				this.highAttackBox.boxAlter = 90;
				this.lowAttackBox.boxAlter = 90;
			}
		} else if (this.name === 'enemy') {
			if (this.lastKey === 'l') {
				this.highAttackBox.boxAlter = -60;
				this.lowAttackBox.boxAlter = -60;
			} else if (this.lastKey === 'j') {
				this.highAttackBox.boxAlter = 90;
				this.lowAttackBox.boxAlter = 90;
			}
		}
		//alters the x postition of highAttackBox depending on which way character is facing
		this.highAttackBox.position.x = this.position.x - this.highAttackBox.boxAlter;
		this.highAttackBox.position.y = this.position.y;
		//alters the x postition of lowAttackBox depending on which way character is facing
		this.lowAttackBox.position.x = this.position.x - this.lowAttackBox.boxAlter;
		this.lowAttackBox.position.y = this.position.y;
	}//loop

	highAttack() {
		if(!this.healthChanged){
			this.isAttackingHigh = true;
			//sets a timeout for the attack of 560 milliseconds if it doesn't collide
			setTimeout(() => this.isAttackingHigh = false, 560);
			//sets a timeout for the animation of 560 milliseconds regardless of collision
			setTimeout(() => this.highAnimation = false, 560);
		}
	}//highAttack

	lowAttack() {
		if(!this.healthChanged){
			this.isAttackingLow = true;
			//sets a timeout for the attack of 400 milliseconds if it doesn't collide
			setTimeout(() => this.isAttackingLow = false, 560);
			//sets a timeout for the animation of 560 milliseconds regardless of collision
			setTimeout(() => this.lowAnimation = false, 560);
		}
	}//lowAttack
}//character


//player creation
const player = new character({
	position: {
		x: 200,
		y: 426
	},
	speed: {
		x: 0,
		y: 0
	},
	boxAlter: -60,
	name: 'player'
});

//enemy creation
const enemy = new character({
	position: {
		x: 1250,
		y: 426
	},
	speed: {
		x: 0,
		y: 0
	},
	boxAlter: 90,
	name: 'enemy'
});