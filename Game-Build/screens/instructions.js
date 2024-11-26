//instructions.js

function instructions(){
	//black background
	fill(0);
	rect(0,0,1050,height);
	//text settings
	textAlign(CENTER, CENTER);
	textSize(80);
	textFont("Sriracha");
	//title
	fill(255);
	text("GAME CONTROLS", 525, 70);
	stroke(255);
	strokeWeight(10);
	line(210,110,830,110);
	noStroke();
	//corner logos
	fill(240,234,214);
	square(30,25,130,40);
	image(logo,40,25,120,120);
	square(880,25,130,40);
	image(logo,890,25,120,120);
	//keyboard
	fill(249,76,86);
	square(265,255,80,15);
	square(265,355,80,15);
	square(165,355,80,15);
	square(365,355,80,15);
	square(655,305,80,15);
	square(805,305,80,15);
	fill(255,0,0);
	square(260,250,80,15);
	square(260,350,80,15);
	square(160,350,80,15);
	square(360,350,80,15);
	square(650,300,80,15);
	square(800,300,80,15);
	//keyboard letters
	textFont("Helvetia");
	fill(255);
	textSize(60);
	text("W",300,295);
	text("S",300,395);
	text("A",200,395);
	text("D",402,395);
	text("Q",690,340);
	text("E",840,345);
	//description
	textSize(30);
	textFont("Sriracha");
	text("HIGH\nATTACK",690,250);
	text("LOW\nATTACK",840,250);
	text("JUMP",305,220);
	text("CROUCH",300,470);
	text("MOVE\nRIGHT",515,390);
	text("MOVE\nLEFT",95,390);
	//backButton
	backButton();
}//instructions

function backButton(){
	//button animation when hovering
	if(mouseX >= 900 && mouseX <= 1010 && mouseY >= 500 && mouseY <= 560){
		hovering[3] = true;
		cursor('pointer');
	} else {
		cursor('default');
		hovering[3] = false;
	}
	if(hovering[3]){
		fill(139,0,0);
	} else {
		fill(255,0,0);
	}
	//normal button
	rect(900,500,110,60,10);
	fill(255);
	text("BACK",953,530);
}//instructions