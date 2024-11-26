//used in movement function 
let randomDirectionFactor = 0.6; 
let playerTracking; 
let direction;

//used in JumpNCrouch function 
let mechanic = Math.floor(Math.random() * 2);

//used in attackNow function 
let attack;

//used to call the random function generator only once 
let callFunctions = true;

function AI() {
  if (!timerEnd && fightDisplay) {
    //calls the random number functions once, and they loop themselves 
    if(callFunctions){ 
      movement(); 
      jumpNcrouch(); 
      attackNow(); 
      twoPlayer = false; 
      callFunctions = false;
    }
    
    //if the movement function randomly sets playerTracking to be true, it run this segment to track the player 
    if (playerTracking) {
      if (player.position.x > enemy.position.x) {
        enemy.lastKey = 'l';
        enemy.speed.x = 5; //move right
      } else if (player.position.x < enemy.position.x) {
        enemy.lastKey = 'j';
        enemy.speed.x = -5; //move left
      } else if (player.position.x === enemy.position.x) {
        enemy.speed.x = 0; //stands still
      }
    }
  
    //if the movement function randomly sets the direction, it runs this segment to move in a random direction 
    //moving left 
    if(direction === 0 && enemy.allowCrouch){ 
      enemy.lastKey = 'l'; 
      enemy.speed.x = 5;
    //moving right
    } else if (direction === 1 && enemy.allowCrouch) {
      enemy.lastKey = 'j'; 
      enemy.speed.x = -5;
    //standing still
    } else if (direction === 2 && enemy.allowCrouch) {
      enemy.speed.x = 0;
    }

    //jumping 
    if(mechanic === 0 && enemy.allowCrouch && enemy.allowJump && enemy.speed.y === 0) {
      enemy.speed.y = -13; 
      enemy.allowJump = true;
    //crouching
    } else if (mechanic === 1 && enemy.speed.y === 0 && !enemy.highAnimation) {
      enemy.speed.x = 0; 
      enemy.position.y = 491; 
      enemy.height = 85; 
      enemy.allowCrouch = false;
    } else if (mechanic != 1 && mechanic != 2 && enemy.speed.y === 0) {
      enemy.position.y = 426; 
      enemy.height = 150; 
      enemy.allowCrouch = true;
    }

    //high attack 
    if(attack === 0 && enemy.allowCrouch && !enemy.healthChanged && (millis() > enemyAttackTimer + 1500)) {
      enemy.highAnimation = true;
      enemy.highAttack(); enemyAttackTimer = millis();
      //low attack
    } else if (attack === 1 && enemy.allowCrouch && !enemy.healthChanged && (millis() > enemyAttackTimer + 1500)) {
      enemy.lowAnimation = true; 
      enemy.lowAttack(); 
      enemyAttackTimer = millis();
    }
  }
}//AI

function movement() {
  //randomly generates a number and if it turns to be greater than 0.6, it turns on player tracking 
  if((random(1) > randomDirectionFactor) && enemy.allowCrouch){ 
    playerTracking = true; 
  } else {
  //randomly generates a direction pertaining to left, right, or not moving if the random number is less than 0.6 
    playerTracking = false; 
    direction = Math.floor(Math.random() * 3);
  }
  setTimeout(movement, 1000);
}//movement

function jumpNcrouch() {
  //randomly generates a number pertaining to jumping, crouching, or none moving every 2 seconds 
  mechanic = Math.floor(Math.random() * 8); 
  setTimeout(jumpNcrouch,2000); 
  print(mechanic) 
}//jumpNcrouch

function attackNow() {
  //randomly generates a number pertaining to attacking high, low, or none every 2 seconds 
  attack = Math.floor(Math.random() * 3); 
  setTimeout(attackNow,2000);
}//attackNow  