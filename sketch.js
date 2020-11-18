var play = 1
var end = 0
var gamestate = 1
var score = 0;
var monkey, monkey_running, monkey_collided, ground, banana, ground_img, banana_img, bananaGroup, stoneGroup, gameover, restart, gameoverimg, score, invisibleground, stone, stoneimg

function preload() {
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  ground_img = loadImage("jungle.jpg")
  banana_img = loadImage("banana.png")
  gameoverimg = loadImage("gameover.png")
  banana_img = loadImage("banana.png")
  stone_img = loadImage("stone.png")
}

function setup() {
  createCanvas(400, 400);
  ground = createSprite(200, 200, 400, 400)
  ground.addImage(ground_img)
  ground.velocityX = -4
  ground.x = ground.width / 2
  invisibleground = createSprite(200, 377, 400, 10)
  invisibleground.visible = false;
  monkey = createSprite(50, 340, 20, 50)
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.2;
  monkey.setCollider("circle", 0, 0, 300)
  gameover = createSprite(200, 200)
  gameover.addImage(gameoverimg)
  gameover.visible = false
  bananaGroup = new Group();
  stoneGroup = new Group();
  window.focus();
}

function draw() {
  background(220);
  stroke("white")
  textSize(20);
  fill("white")
  if (gamestate === 1) {  
    if (ground.x < 200) {
      ground.x = ground.width / 2;
    }
    monkey.collide(invisibleground);
    if (keyDown("space") && monkey.y >= 300) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8
    if (monkey.isTouching(bananaGroup)) {
      score += 2
      bananaGroup.destroyEach();
      monkey.scale = monkey.scale+0.005
    }
    if (monkey.isTouching(stoneGroup)) {
      gameState === 0;
    }
    banana1()
    stone1()
    drawSprites();
  }
else if (gamestate === 0){
  reset();
}
  text("Survival Time :" + score, 150, 50)
}

function banana1() {
  if (frameCount % 100 === 0) {
    banana = createSprite(random(350, 500), random(150, 200), 10, 10);
    banana.addImage(banana_img);
    banana.velocityX = -6;
    banana.scale = 0.08
    bananaGroup.add(banana);
  }
}

function stone1() {
  if (frameCount % 120 === 0) {
    stone = createSprite(random(520, 800), 350, 10, 10)
    stone.addImage(stone_img)
    stone.VelocityX = -6

    stone.debug = true
    stone.setCollider("circle")
    stone.scale = 0.08
stoneGroup.add(stone)
  }
}


function reset() {
  gameState = END;
  gameOver.visible = true;
  stoneGroup.destroyEach();
  bananaGroup.destroyEach();
  monkey.changeAnimation("running", monkey_05.png);
  console.log(localStorage["HighestScore"])

  score = 0;

}