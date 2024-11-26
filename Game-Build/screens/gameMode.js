//gameMode.js
function gameMode() {
    //black background
    fill(0);
    rect(215, 0, 1050, height);
    //text settings
    textAlign(CENTER, CENTER);
    textSize(80);
    textFont("Sriracha");
    //title
    fill(255);
    text("SELECT MODE:", 740, 70);
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
    //buttons for gamemode selection
    multiplayerButton();
    computerButton();
    //backButton
    backButton();
}//instructions
function multiplayerButton() {
    //button animation when hovering
    if (mouseX >= 265 && mouseX <= 665 && mouseY >= 260 && mouseY <= 360) {
        hovering[4] = true;
        cursor('pointer');
    } else {
        cursor('default');
        hovering[4] = false;
    }
    if (hovering[4]) {
        fill(139, 0, 0);
    } else {
        fill(255, 0, 0);
    }
    //normal button
    rect(265, 260, 400, 100, 10);
    fill(255);
    textSize(60);
    text("MULTIPLAYER", 465, 310);
}//multiplayerButton
function computerButton() {
    //button animation when hovering
    if (mouseX >= 765 && mouseX <= 1165 && mouseY >= 260 && mouseY <= 360) {
        hovering[5] = true;
        cursor('pointer');
    } else {
        cursor('default');
        hovering[5] = false;
    }
    if (hovering[5]) {
        fill(139, 0, 0);
    } else {
        fill(255, 0, 0);
    }
    //normal button
    rect(765, 260, 400, 100, 10);
    fill(255);
    textSize(60);
    text("COMPUTER", 965, 310);
}//computerButton