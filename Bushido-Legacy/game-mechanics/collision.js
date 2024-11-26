//collision.js

////The following function is based primarily on code taken from an in-class example. It should not be considered my code (although slightly altered with position of characters).

function rectCollide(rect1, rect2){
	//requires x, y, w, h in both classes

	if(rect1.position.x+rect1.width > rect2.position.x && rect1.position.x < rect2.position.x+rect2.width){
		//if the player is crouching, adjust rectangle coordinates to see if colliding or not
		if(player.allowCrouch && enemy.allowCrouch){
			//if collide, true else false
			if (rect1.position.y+rect1.height > rect2.position.y && rect1.position.y < rect2.position.y+rect2.height){
				return true;
			} else {
				return false;
			}
		} else {
			//if the player is crouching, if collide true else false
			if (rect1.position.y+rect1.height < rect2.position.y && rect1.position.y < rect2.position.y+rect2.height){
				return true;
			} else {
				return false;
			}
			
		}//closes crouch if else statement
		
	}//closes original if statement
	
}//rectCollide