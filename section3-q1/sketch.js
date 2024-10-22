// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  //blank
  if (keyIsPressed) {
    increment = 2;
  } else {
   increment = 1;
    }
    if (count < cycle/2) {
   size = count + 50;
   } else {
   size = (cycle - count) + 50;
   }
  ellipse(width / 2, height / 2, size);
}
