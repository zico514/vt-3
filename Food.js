class Food{

    constructor(){
this.foodStock=0,
this.image=loadImage("images/Milk.png");
this.lastFed;
    }
    
   getFedTime(lastFed){
       this.lastFed=lastFed;
       
   }
}