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

for (var y = 0; x <= this.size_y; y++) {
    ctx.moveTo(10 , 0.5 + y*10);
    ctx.lineTo( this.size_x*10 , 0.5 + y*10);
}

ctx.strokeStyle = "black";
ctx.stroke();
};
}