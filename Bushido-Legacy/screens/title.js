//title.js

//changes color of button if mouse if hovering over
let hovering = [];

function title(){
	//background
	setting(0);
	//text settings
	textAlign(CENTER, CENTER);
	textSize(60);
	textFont("Rampart One");
	//name of game
	fill(255,0,0);
	text("武",150,100);
	text("士",150,170);
	text("道",150,240);
	text("レ",150,310);
	text("ガ",150,380);
	text("シ",150,450);
	text("ー",150,500);
	//music 
	
	//buttons
	textFont("Sriracha");
	textSize(40);
	startButton();
	instructionButton();
	creditsButton();
	//cursor change when hovering over a button
	if(mouseX > 800 && mouseX < 1000 && mouseY > 80 && mouseY < 180){
		//start button
		hovering[0] = true;
		cursor('pointer');
  } else if (mouseX > 800 && mouseX < 1000 && mouseY > 240 && mouseY < 340){
	 	//instructions button
		hovering[1] = true;
		cursor('pointer');
	} else if (mouseX > 800 && mouseX < 1000 && mouseY > 400 && mouseY < 500){
		//credits button
		hovering[2] = true;
		cursor('pointer');
	} else {
		for(let i=0; i < 3; i++) {
			hovering[i] = false;
		}
		cursor('default');
	}
}//title

function startButton(){
	if(hovering[0]){
		fill(139,0,0);
	} else {
		fill(255,0,0);
	}
	rect(800,80,200,100,10);
	fill(255);
	text("START", 900, 130);
}//startButton

function instructionButton(){
	if(hovering[1]){
		fill(139,0,0);
	} else {
		fill(255,0,0);
	}
	rect(800,240,200,100,10);
	fill(255);
	textSize(36);
	text("HOW TO\nPLAY", 900, 290);
}//startButton

function creditsButton(){
	if(hovering[2]){
		fill(139,0,0);
	} else {
		fill(255,0,0);
	}
	rect(800,400,200,100,10);
	fill(255);
	text("CREDITS", 900, 450);
}//startButton

function mousePressed(){
	if(mouseX > 800 && mouseX < 1000 && mouseY > 80 && mouseY < 180 && scene === 'title'){
		//start button
		cursor('default');
		scene = 'fight';
  } else if (mouseX > 800 && mouseX < 1000 && mouseY > 240 && mouseY < 340 && scene === 'title'){
	 	//instructions button
		cursor('default');
		scene = 'instructions';
	} else if (mouseX > 800 && mouseX < 1000 && mouseY > 400 && mouseY < 500 && scene === 'title'){
		//credits button
		cursor('default');
		print("credits");
	} else if (mouseX >= 900 && mouseX <= 1010 && mouseY >= 500 && mouseY <= 560 && scene === 'instructions'){
		//back button (instructions page)
		cursor('default');
		scene = 'title';
	}
	print(mouseX, mouseY)
}//mousePressed