export default class Paddle {
	
	constructor(scrWidth, scrHeight){
		this.width = 150;
		this.height = 30;
		
		this.pos = {
			x: scrWidth / 2 - this.width / 2,
			y: scrHeight - this.height - 10,
		}
		
	}
	
	draw(c){
		c.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	}
}