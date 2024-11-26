//title.js
//changes color of button if mouse if hovering over
let hovering = [];
function title() {
	//background
	setting(0);
	noStroke();
	textStyle(NORMAL);
	//text settings
	textAlign(CENTER, CENTER);
	textSize(60);
	textFont("Rampart One");
	//name of game
	fill(255, 0, 0);
	text("武", 375, 100);
	text("士", 375, 170);
	text("道", 375, 240);
	text("レ", 375, 310);
	text("ガ", 375, 380);
	text("シ", 375, 450);
	text("ー", 375, 500);
	//music
	//buttons
	textFont("Sriracha");
	textSize(40);
	startButton();
	instructionButton();
	creditsButton();
	//cursor change when hovering over a button
	if (mouseX > 1015 && mouseX < 1215 && mouseY > 80 && mouseY < 180) {
		//start button
		hovering[0] = true;
		cursor('pointer');
	} else if (mouseX > 1015 && mouseX < 1215 && mouseY > 240 && mouseY < 340) {
		//instructions button
		hovering[1] = true;
		cursor('pointer');
	} else if (mouseX > 1015 && mouseX < 1215 && mouseY > 400 && mouseY < 500) {
	//title
	//credits button
	hovering[2] = true;
	cursor('pointer');
	} else {
	for (let i = 0; i < 3; i++) {
		hovering[i] = false;
	}
	cursor('default');
	}
}//title

function startButton() {
	if (hovering[0]) {
		fill(139, 0, 0);
	} else {
		fill(255, 0, 0);
	}
	rect(1015, 80, 200, 100, 10);
	fill(255);
	text("START", 1115, 130);
}//startButton
function instructionButton() {
	if (hovering[1]) {
		fill(139, 0, 0);
	} else {
		fill(255, 0, 0);
	}
	rect(1015, 240, 200, 100, 10);
	fill(255);
	textSize(36);
	text("HOW TO\nPLAY", 1115, 290);
}//startButton
function creditsButton() {
	if (hovering[2]) {
		fill(139, 0, 0);
	} else {
		fill(255, 0, 0);
	}
	rect(1015, 400, 200, 100, 10);
	fill(255);
	text("CREDITS", 1115, 450);
}//startButton
function mousePressed() {
	if (mouseX > 1015 && mouseX < 1215 && mouseY > 80 && mouseY < 180 &&scene === 'title') {
		//start button
		cursor('default');
		scene = 'gameMode';
	} else if (mouseX > 1015 && mouseX < 1215 && mouseY > 240 && mouseY < 340 &&scene === 'title') {
		//instructions button
		cursor('default');
		scene = 'instructions';
	} else if (mouseX > 1015 && mouseX < 1215 && mouseY > 400 && mouseY <500 && scene === 'title') {
		//credits button
		cursor('default');
		scene = 'credits'
	} else if (mouseX >= 265 && mouseX <= 405 && mouseY >= 500 && mouseY <=560 && scene === 'instructions') {
		//playerViewer button
		cursor('default');
		playerKeys++;
	} else if (mouseX >= 1115 && mouseX <= 1225 && mouseY >= 500 && mouseY<= 560 && scene === 'instructions') {
		//back button (instructions page)
		cursor('default');
		scene = 'title';
	} else if (mouseX >= 1115 && mouseX <= 1225 && mouseY >= 500 && mouseY<= 560 && scene === 'credits') {
		//back button (credits page)
		cursor('default');
		scene = 'title';
	} else if (mouseX >= 1115 && mouseX <= 1225 && mouseY >= 500 && mouseY<= 560 && scene === 'gameMode') {
		//back button (gameMode page)
		cursor('default');
		scene = 'title';
	} else if (mouseX >= 265 && mouseX <= 665 && mouseY >= 260 && mouseY <=360 && scene === 'gameMode') {
		//multiplayer button (gameMode page)
		cursor('default');
		twoPlayer = true;
		scene = 'fight';
	} else if (mouseX >= 765 && mouseX <= 1165 && mouseY >= 260 && mouseY<= 360 && scene === 'gameMode') {
		//singleplayer button (gameMode page)
		cursor('default');
		scene = 'fight';
	} else if (mouseX >= 630 && mouseX <= 880 && mouseY >= 305 && mouseY <=365 && scene === 'fight') {
		//back to menu (from fight)
		cursor('default');
		location.reload();
	}
}//mousePressed