class stone {
    constructor(x,y,w,h){
        let options = {
            restitution:0.8 
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w
        this.height = h
        this.color = color 

        World.add(world,this.body);
        

    }

    show(){
        let pause = this.body.position; 
        push();
        translate(pos.x,pos.y);
        strokeWeight(1);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,this.y,this.x);
        noStroke();
        pop();


        
    }

}