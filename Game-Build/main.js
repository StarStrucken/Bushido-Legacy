//main.js

//run music once
let menuMusic = false;

let scene = 'title';

function setup() {
	let sketch = createCanvas(1500, 576);
  sketch.parent("mycanvas");

	//timer for attack animations
	playerAttackTimer = millis();
	enemyAttackTimer = millis();
}//end setup

function draw() {
	if(scene === 'title'){
		if(!menuMusic){
			playMusic(0);
			menuMusic = true;
		}	
		title();
	} else if (scene === 'instructions') {
		instructions();
	} else if (scene === 'fight') {
		fight();
	}
}//draw