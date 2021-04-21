class Crumpled{
	constructor(x,y,r){

		
	var options = {

        isStatic: false, 
        restitution:0.3,
        friction:2.5,
        density:1.2
	}

	
	
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		this.width= 102; 
		this.height= 159; 
		this.image= loadImage("paper.png"); 
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
}
	
	display()
	{
	
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.width, this.height); 
			pop()
	}

}

