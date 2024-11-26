//sound.js

function playMusic(sceneNum){
	if(sceneNum === 0) {
		//menu
		music[0].play();
	} else if (sceneNum === 1){
		//fight
		music[1].play();
		music[0].stop();
	}
}//playMusic