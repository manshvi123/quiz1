var q1

function preload(){
 doorImg = loadAnimation("door-open.gif")
 bgImg = loadImage("bg.jpg")
}

function setup(){
  createCanvas(windowWidth-100,windowHeight-100);
  count = 0 
  q1 = new Riddle(count)
  ans = new Answer();

  door = createSprite(600, 250, 60, 60)
  door.addAnimation("door",doorImg)
  door.scale = 0.2
  img = 200
}

function draw(){
background(img)
 answer = q1.showQues(count)
 ans.handleMousePressed();
 
 
 if(answer = ans.answer){
  console.log("win")
  drawSprites()
  if(mousePressedOver(door)){
    doorOpen()
  }
 }
 else{}

}

function doorOpen(){
// image (bgImg,0,0,windowWidth,windowHeight) 
img = bgImg
count++
q1 = new Riddle(count)
ans = new Answer();
}

