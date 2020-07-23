class Box {
    //properties
    constructor(x, y, width, height){
        var options = {
            restitution: 1
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0, this.width, this.height);
        pop();
    }
}

/*
rotate() -- about an angle (0-360 degrees)
translate() -- about an axis (2 points) (x & y position)

push() - adding new settings
pop() - reverts to the old setting
*/