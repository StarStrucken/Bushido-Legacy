//main.js
//run music once
let menuMusic = false;
//determines which screen to play at the moment
let scene = 'title';
function setup() {
	let sketch = createCanvas(1500, 576);
	sketch.parent("mycanvas");
	//timer for attack animations
	playerAttackTimer = millis();
	enemyAttackTimer = millis();
}//end setup
function draw() {
	//loops title page
	if (scene === 'title') {
		if (!menuMusic) {
			playMusic(0);
			menuMusic = true;
		}
		title();
		//loops instructions page
	} else if (scene === 'instructions') {
		instructions();
		//loops credits page
	} else if (scene === 'credits') {
		credits();
		//loops gameMode selection page
	} else if (scene === 'gameMode') {
		gameMode();
		//loops the fighting screen
	} else if (scene === 'fight') {
		fight();
	}
}//draw