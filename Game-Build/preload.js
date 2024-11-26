//preload.js

//image variables
let playerAnimations = [];
let enemyAnimations = [];
let logo;
let fire

//audio variables
let music = [];
let soundEffects = [];

function preload(){
	//game logo
	logo = loadImage("images/logo.png");
	//player
	playerAnimations[0] = loadImage("images/player-animations/idleRight.gif");
	playerAnimations[1] = loadImage("images/player-animations/idleLeft.gif");
  playerAnimations[2] = loadImage("images/player-animations/jumpRight.gif");
	playerAnimations[3] = loadImage("images/player-animations/jumpLeft.gif");
	playerAnimations[4] = loadImage("images/player-animations/runRight.gif");
	playerAnimations[5] = loadImage("images/player-animations/runLeft.gif");
  playerAnimations[6] = loadImage("images/player-animations/attackHighRight.gif");
	playerAnimations[7] = loadImage("images/player-animations/attackHighLeft.gif");
	playerAnimations[8] = loadImage("images/player-animations/attackLowRight.gif");
	playerAnimations[9] = loadImage("images/player-animations/attackLowLeft.gif");
	playerAnimations[10] = loadImage("images/player-animations/crouchRight.png");
	playerAnimations[11] = loadImage("images/player-animations/crouchLeft.png");
	playerAnimations[12] = loadImage("images/player-animations/hurtLeft.gif")
	playerAnimations[13] = loadImage("images/player-animations/hurtRight.gif")
	//enemy
	enemyAnimations[0] = loadImage("images/enemy-animations/idleLeft.gif");
	enemyAnimations[1] = loadImage("images/enemy-animations/idleRight.gif");
	enemyAnimations[2] = loadImage("images/enemy-animations/jumpLeft.gif");
	enemyAnimations[3] = loadImage("images/enemy-animations/jumpRight.gif");
	enemyAnimations[4] = loadImage("images/enemy-animations/runLeft.gif");
	enemyAnimations[5] = loadImage("images/enemy-animations/runRight.gif");
	enemyAnimations[6] = loadImage("images/enemy-animations/attackHighLeft.gif");
	enemyAnimations[7] = loadImage("images/enemy-animations/attackHighRight.gif");
	enemyAnimations[8] = loadImage("images/enemy-animations/attackLowLeft.gif");
	enemyAnimations[9] = loadImage("images/enemy-animations/attackLowRight.gif");
	enemyAnimations[10] = loadImage("images/enemy-animations/crouchLeft.gif");
	enemyAnimations[11] = loadImage("images/enemy-animations/crouchRight.gif");
	enemyAnimations[12] = loadImage("images/enemy-animations/hurtLeft.gif");
	enemyAnimations[13] = loadImage("images/enemy-animations/hurtRight.gif");
	//music
	music[0] = loadSound("audio/music/samurai-intro.mp3");
	music[1] = loadSound("audio/music/Land-of-the-Rising-Sun.mp3");
	//fire
	fire = loadImage("images/backgrounds/3.gif");
}//preload