//Create variables here
var dog,Hdog,food,foodS,dI;
var database;

function preload()
{
  //load images here
  dI = loadImage("images/dogImg.png");
  Hdog=loadImage("images/dogImg1.png");
  bw=loadImage("images/Wash Room.png");
  g=loadImage("images/Garden.png");
  w=loadImage("images/Bed Room.png");
}

function setup() {
  createCanvas(600,600);

  database=firebase.database();
     foodS=database.ref('food');
    foodS.on("value",readStock);

  dog=createSprite(400,400,20,200);
  dog.addImage(dI);
  dog.scale=0.15;

  var Feed=createButton('feed dog');
  Feed.position(350,155);
 Feed.mousePressed(feedDog);

  var addFood=createButton('add food');
  addFood.position(500,155);
addFood.mousePressed(addFoods);
  
}


function draw() {  
background(46,139,87);
textSize(20);
fill("white");
stroke(4);
fedTime=database.ref('feedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});

if(fedTime>=12){
  text("last feed: "+fedTime%12+"pm",400,50);
} 
else if(fedTime==0){
  text("last feed: 12 am",400,50);

}
else{
text("last feed: "+fedTime+"am",400,50);
}

if(fedTime>1 && fedTime<5){
background("washroom",bw);
}
  drawSprites();
  //add styles here

text("food remaining:"+foodS,50,50);
text("last fed :"+fedTime,50,150);



}



function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();

}

function feedDog(){
  writeStock(foodS-1);
   dog.addImage(Hdog);

}     

function addFoods(){
  writeStock(foodS+1);

  
  

}



