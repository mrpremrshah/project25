class Paper
{
	constructor(x,y,r)
	{
		var options={
			'isStatic':false,
           'restitution':0.3,
            'friction':0,
            'density':1.2

			}

        this.image = loadImage("paper.png");

		this.x = x;
        this.y = y;
        this.r = r;

		this.body=Bodies.circle(x, y, (r-4)/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			
        push()
		strokeWeight(4);
		translate(this.body.position.x, this.body.position.y);
		rectMode(CENTER);
		fill(255,0,255);
        image(this.image, 0, 0, this.r, this.r);
		imageMode(CENTER);
		pop()
			
	}

}