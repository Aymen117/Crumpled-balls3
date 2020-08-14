class dust{      
    constructor(x,y,width,height){ 

        var box_options ={
            isStatic:true
        }
        this.image = loadImage("dustbingreen.png");
        
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        World.add(world,this.box); 
    }
    display(){
        push();
        rectMode(CENTER);
        fill("red");
    rect(this.box.position.x,this.box.position.y,this.width,this.height);
    pop();
    }
}