function Game(canvas){

this.canvas = canvas

this.size_x = 10;
this.size_y = 10;

this.grid = new Array(this.size_y).fill(new Array(this.size_x).fill(0));

this.draw_grid = function(){
var c = this.canvas
var ctx = c.getContext("2d");

for (var x = 0; x <= this.size_x; x++) {
    ctx.moveTo(0.5 + x*10, 10);
    ctx.lineTo(0.5 + x*10, this.size_y*10);
}

for (var y = 0; y <= this.size_y; y++) {
    ctx.moveTo(10 , 0.5 + y*10);
    ctx.lineTo( this.size_x*10 , 0.5 + y*10);
}
this.grid[4][4] = 1
this.grid[5][5] = 1
this.grid[6][6] = 1
for( var x = 0; x < this.size_x; x++){
    for(var y = 0; y< this.size_y; y++){
	    if(this.grid[x][y] == 1){
	        ctx.fillRect(0.5+x*10,0.5 + x*10 +this.size_x , 0.5+y*10 , 0.5 + y*10 +this.size_y );
		}
	}
}

ctx.strokeStyle = "black";
ctx.stroke();
};

this.reset_grid = function(){
this.grid[4][4] = 1
this.grid[5][5] = 1
this.grid[6][6] = 1
}

this.next_gen = function(){

}

}