class Snow {
    constructor(x,y,radius){
        this.img = loadImage("snow4.webp")
        this.snow = Bodies.circle(x,y,radius)
        World.add(world,this.snow)
        this.radius = radius

    }
    display(){
        imageMode(CENTER)
        image(this.img,this.snow.position.x,this.snow.position.y,this.radius,this.radius)
    }
}