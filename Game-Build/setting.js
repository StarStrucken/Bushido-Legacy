//setting.js

let bg = [];
let runOnce = true;

function setting(sceneNum){
	if(runOnce){
		for(let i = 1; i < 3; i++){
			bg.push(loadImage("images/backgrounds/"+ i +".jpg"));
		}
		runOnce = false;
	}
	                                          
	if(sceneNum === 0){
		image(bg[0], 215, 0, 1050, height);
	} else if (sceneNum === 1){
		image(bg[1], 0, windowWidth);
	}
}//setting