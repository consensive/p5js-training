
//弾が格納される配列
var circles = [];

//弾
var cir;

//初期座標(bulletX,bulletY)からangleの角度へ移動
var bulletX = 0;
var bulletY = 0;

//弾速
var speed = 3;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);

  //弾の分だけループ
  for(var i = 0;i<circles.length;i++){
    circles[i].move();
  }

}

function mouseClicked() {
  //弾の分だけループ
  for(var i = 0;i<20;i++){
    cir = new MyCircle(i * 5 +45);
    circles.push(cir);
  }
  return false;
}


//弾幕クラス
function MyCircle(anglee){

  this.x = width/2;
  this.y = 10;
  this.angle = anglee;
  this.vx = Math.cos(Math.PI / 180 * this.angle) * speed;
  this.vy = Math.sin(Math.PI / 180 * this.angle) * speed;

  this.move = function(){
    this.x += this.vx;
    this.y += this.vy;
    fill(0);
    ellipse(this.x,this.y,10,10);
  };
}