function LightsOutGame(canvas){

this.canvas = canvas

this.size_x = 5;
this.size_y = 5;

this.square_side = 10;

this.grid = Create2DArray(this.size_x,this.size_y);

function Create2DArray(rows,columns) {
   var x = new Array(rows);
   for (var i = 0; i < rows; i++) {
       x[i] = new Array(columns);
	   x[i].fill(0);
   }
   return x;
}

this.draw_grid = function(){
var c = this.canvas;
var ctx = c.getContext("2d");
ctx.clearRect(0, 0, c.width, c.height);
for (var x = 0; x <= this.size_x; x++) {
    ctx.moveTo(0.5 + x*this.square_side , .5);
    ctx.lineTo(0.5 + x*this.square_side , .5 + this.size_y*this.square_side );
}

for (var y = 0; y <= this.size_y; y++) {
    ctx.moveTo(.5 , 0.5 + y*this.square_side );
    ctx.lineTo( .5 + this.size_x*this.square_side  , 0.5 + y*this.square_side );
}

for( var x = 0; x < this.size_x; x++){
    for(var y = 0; y< this.size_y; y++){
	    if(this.grid[x][y] == 1){
		    console.log("x = " + x + " y = " + y)
		    var xstart = .5 + this.size_x * x ;
			var ystart= .5 + this.size_y * y ;
	        ctx.fillRect( xstart , ystart , this.square_side, this.square_side);
		}
	}
}

ctx.strokeStyle = "black";
ctx.stroke();
};

this.reset_grid = function(){

}

this.next = function(){
    this.next_gen();
	this.draw_grid();
}

this.next_gen = function(){
    var newgrid = Create2DArray(this.size_x,this.size_y);
	for(var x = 0 ; x < this.size_x ; x++){
		for(var y = 0 ; y < this.size_y ; y++){
			if(this.grid[x][y] == 1 && this.survives(x,y)){
			    newgrid[x][y] = 1;
			}else if(this.grid[x][y] == 0 && this.is_born(x,y)){
			    newgrid[x][y] = 1;
			}
		}
	}
	for(var i = 0; i < 10; i++){
	console.log(newgrid[i]);
	}
    this.grid = newgrid;
}

this.get_neighbours = function(x,y){
    var neighboursx = []
	var neighboursy = []
    for(var i = -1; i < 2; i++){
	    for(var j = -1; j < 2; j++){
		    if(x+i >= 0 && x+i < this.size_x && y+j >= 0 && y+j < this.size_y && !(x+i == x && y+j == y)){
		        neighboursx.push(x+i);
				neighboursy.push(y+j);
			}
		}
	}
    return [neighboursx,neighboursy]
}


this.change = function(x,y){
	x = Math.floor(x/this.size_x);
	y= Math.floor(y/this.size_y);
	neighbours = this.get_neighbours(x,y)
	this.grid[x][y] = this.grid[x][y] == 0? 1:0;
	for(i=0; i < neighbours.length; i++){
	    this.grid[neighbours[0][i]][neighbours[1][i]] = this.grid[neighbours[0][i]][neighbours[1][i]] == 0? 1:0;
	}
	this.draw_grid();
}
}