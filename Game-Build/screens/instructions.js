//instructions.js
let playerKeys = 1;
function instructions() {
	//black background
	fill(0);
	rect(215, 0, 1050, height);
	//text settings
	textAlign(CENTER, CENTER);
	textSize(80);
	textFont("Sriracha");
	//title
	fill(255);
	text("GAME CONTROLS", 740, 70);
	stroke(255);
	strokeWeight(10);
	line(425, 110, 1045, 110);
	noStroke();
	//corner logos
	fill(240, 234, 214);
	square(245, 25, 130, 40);
	image(logo, 255, 25, 120, 120);
	square(1095, 25, 130, 40);
	image(logo, 1105, 25, 120, 120);
	if (playerKeys % 2 != 0) {
		//keyboard
		fill(249, 76, 86);
		square(480, 255, 80, 15);
		square(480, 355, 80, 15);
		square(380, 355, 80, 15);
		square(580, 355, 80, 15);
		square(870, 305, 80, 15);
		square(1020, 305, 80, 15);
		fill(255, 0, 0);
		square(475, 250, 80, 15);
		square(475, 350, 80, 15);
		square(375, 350, 80, 15);
		square(575, 350, 80, 15);
		square(865, 300, 80, 15);
		square(1015, 300, 80, 15);
		//keyboard letters
		textFont("Helvetia");
		fill(255);
		textSize(60);
		text("W", 515, 295);
		text("S", 515, 395);
		text("A", 415, 395);
		text("D", 617, 395);
		text("C", 905, 345);
		text("V", 1055, 345);
		//description
		textSize(30);
		textFont("Sriracha");
		text("HIGH\nATTACK", 905, 250);
		text("LOW\nATTACK", 1055, 250);
		text("JUMP", 520, 220);
		text("CROUCH", 515, 470);
		text("MOVE\nRIGHT", 730, 390);
		text("MOVE\nLEFT", 310, 390);
	} else {
		//keyboard
		fill(136, 29, 134);
		square(480, 255, 80, 15);
		square(480, 355, 80, 15);
		square(380, 355, 80, 15);
		square(580, 355, 80, 15);
		square(870, 305, 80, 15);
		square(1020, 305, 80, 15);
		fill(85, 23, 85);
		square(475, 250, 80, 15);
		square(475, 350, 80, 15);
		square(375, 350, 80, 15);
		square(575, 350, 80, 15);
		square(865, 300, 80, 15);
		square(1015, 300, 80, 15);
		//keyboard letters
		textFont("Helvetia");
		fill(255);
		textSize(60);
		text("I", 515, 295);
		text("K", 515, 395);
		text("J", 415, 395);
		text("L", 617, 395);
		text("N", 905, 345);
		text("M", 1055, 345);
		//description
		textSize(30);
		textFont("Sriracha");
		text("HIGH\nATTACK", 905, 250);
		text("LOW\nATTACK", 1055, 250);
		text("JUMP", 520, 220);
		text("CROUCH", 515, 470);
		text("MOVE\nRIGHT", 730, 390);
		text("MOVE\nLEFT", 310, 390);
	}
	playerViewer();
	//backButton
	backButton();
}//instructions
function playerViewer() {
	//button animation when hovering
	if (mouseX >= 265 && mouseX <= 405 && mouseY >= 500 && mouseY <= 560) {
		hovering[6] = true;
		cursor('pointer');
	} else {
		cursor('default');
		hovering[6] = false;
	}
	if (playerKeys % 2 != 0) {
		if (hovering[6]) {
			fill(85, 23, 85);
		} else {
			fill(136, 29, 134);
		}
	} else {
		if (hovering[6]) {
			fill(139, 0, 0);
		} else {
			fill(255, 0, 0);
		}
	}
	//normal button
	rect(265, 500, 140, 60, 10);
	fill(255);
	textSize(20);
	if (playerKeys % 2 != 0) {
		text("VIEW PLAYER\n2 KEYS", 335, 530);
	} else {
		text("VIEW PLAYER\n1 KEYS", 335, 530);
	}
}//instructions
function backButton() {
	//button animation when hovering
	if (mouseX >= 1115 && mouseX <= 1225 && mouseY >= 500 && mouseY <=
		560) {
		hovering[3] = true;
		cursor('pointer');
	} else {
		cursor('default');
		hovering[3] = false;
	}
	if (hovering[3]) {
		fill(139, 0, 0);
	} else {
		fill(255, 0, 0);
	}
	//normal button
	rect(1115, 500, 110, 60, 10);
	fill(255);
	textSize(30);
	text("BACK", 1168, 530);
}//instructions