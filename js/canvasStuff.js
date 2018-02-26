var viewport = document.getElementById('myCanvas');
var ctx = viewport.getContext('2d');

var fps = 30;

function init(){
    setInterval(update, 1000 / fps);
}

function Player(){
    this.width = 50;
    this.height = 50;
    this.dDeg = 1;
    this.deg = 0;
    this.X = -this.width/2;
    this.Y = -this.height/2;
    this.draw = function() {
        ctx.rotate(this.deg * Math.PI/180);
        ctx.fillStyle = '#ff5b51';
        ctx.fillRect(this.X, this.Y, this.width, this.height);

        this.deg = (this.dDeg + this.deg) % 360;
    };
}
var player = new Player();

function update(){
    ctx.clearRect(0, 0, viewport.width, viewport.height);

    var deg = 10;

    //remeber our state
    ctx.save();

    ctx.translate(viewport.width/2, viewport.height/2);

    player.draw();

    //restoring back
    ctx.restore();
}
