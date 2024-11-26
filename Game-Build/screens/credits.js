//credits.js
function credits() {
    //black background
    fill(0);
    rect(215, 0, 1050, height);
    //text settings
    textAlign(CENTER, CENTER);
    textSize(80);
    textFont("Sriracha");
    //title
    fill(255);
    text("ALL CREDITS TO:", 740, 70);
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
    //text
    fill(255);
    textSize(28);
    textAlign(LEFT);
    text("BACKGROUNDS", 260, 200);
    text("CHARACTER ART\n& LOGOS/ICONS", 260, 300);
    text("IMAGE EDITORS", 260, 400);
    text("MUSIC/AUDIO", 260, 490);
    textSize(15);
    text("⚔https://br.pinterest.com/pin/136022851234122656/\n⚔https://www.tumblr.com/the2dstagesfg/627178855257473024/geese-tower\n⚔https://www.deviantart.com/provellone/art/autumn-background-pixel-880672834\n⚔https://4kwallpapers.com/black-dark/samurai-katana-warrior-immortal-sun-silhouette-black - 7471.html", 490, 200);
    text("⚔https://jacob-aberdevine.itch.io/\n⚔https://www.shutterstock.com/image-illustration/pixel-art-samurai-1350061691\n⚔https://www.123rf.com/photo_111063881_traditional-samurai-sword-and-blooming-\nsakura - branches - katana - and - japanese - red - sun - vector - design.html", 490,300);
    text("⚔PixilArt\n⚔Pixlr X, Photopea\n⚔remove.bg, ezgif.com, onlinegiftools.com, watermarkremover.io", 490, 400);
    text("⚔https://www.youtube.com/watch?v=HV6GIIYgULs\n⚔https://www.youtube.com/watch?v=XewShxsP4PE", 490, 490);
    //backButton
    textSize(30);
    textAlign(CENTER);
    backButton();
}//credits