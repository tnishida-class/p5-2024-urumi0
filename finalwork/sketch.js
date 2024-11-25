let startX = 200;
let startY = 200;
let gravity = 0.5;
let vy = 0;
let jumping = false;
let characterSize = 50; 

function setup() {  
  createCanvas(1000, 1000); 
  noStroke(); 
  Heart = [];
}

function draw() {
  background(229, 204, 255); 
  drawMyMelody(startX, startY, 10); 
  if(keyIsDown(LEFT_ARROW)){ startX -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ startX += 5; }
  if(keyIsDown(UP_ARROW)){ startY -= 5; }
  if(keyIsDown(DOWN_ARROW)){ startY += 5; }

  fill(255, 0, 0);
  noStroke();
  for(let i = 0; i < Heart.length; i++){
    let b = Heart[i];
    drawHeart(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  if (jumping){
    startY += vy;
    vy += gravity; 
    if(startY >= height - characterSize * 6){
      startY = height - characterSize * 6;
      jumping = false;
      vy = 0;
    }
  }

  startX = constrain(startX, 0, width);
  startY = constrain(startY, 0, height);
}

function drawMyMelody(startX, startY, scale) {
  // ピクセルアートのデータ (0: 透明, 1: 黒, 2: 白, 3: ピンク, 4: 赤, 5: 緑, 6: 黄, 7: 白)
  let pixelArt = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1, 0, 0, 0],
    [0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 1, 0, 0],
    [0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 0, 0],
    [1, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0],
    [1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0],
    [1, 3, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1],
    [0, 1, 1, 1, 0, 1, 3, 3, 3, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 3, 3, 3, 1],
    [0, 0, 0, 0, 0, 1, 3, 3, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 3, 3, 1],
    [0, 0, 0, 0, 0, 1, 3, 1, 7, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 7, 1, 3, 1],
    [0, 0, 0, 0, 0, 1, 3, 1, 7, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 7, 1, 3, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 7, 1, 1, 7, 7, 6, 7, 7, 7, 1, 1, 7, 1, 3, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 3, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 5, 7, 7, 7, 7, 7, 1, 1, 1, 3, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 5, 4, 4, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 4, 1, 1, 7, 7, 7, 7, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 4, 1, 7, 7, 7, 7, 1, 7, 7, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 4, 1, 7, 7, 7, 1, 7, 7, 7, 7, 1, 7, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 4, 1, 1, 1, 7, 7, 7, 7, 7, 1, 7, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 7, 7, 1, 7, 7, 7, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 1, 7, 7, 7, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 7, 7, 1, 7, 7, 7, 7, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]
  ];

  // 色の定義
  let colors = [
    [0, 0, 0, 0],       // 0: 透明
    [0, 0, 0],          // 1: 黒
    [204, 255, 255],    // 2: 水色
    [255, 182, 193],    // 3: ピンク
    [255, 0, 0],        // 4: 赤
    [0, 255, 0],        // 5: 緑
    [255, 255, 0],      // 6: 黄
    [255, 255, 255]     // 7: 白
  ];

  // ピクセルごとに描画
  for (let y = 0; y < pixelArt.length; y++) {
    for (let x = 0; x < pixelArt[y].length; x++) {
      let colorCode = pixelArt[y][x];
      if (colorCode !== 0) {
        fill(colors[colorCode]);
        rect(startX + x * scale, startY + y * scale, scale, scale);
      }
    }
  }
}

function drawHeart(x, y, size){
  beginShape();
  let s = size/2;
  vertex(x, y);
  bezierVertex(x - s, y - s, x - s * 2, y + s * 2 / 3, x, y + s * 2); // 左カーブ
  bezierVertex(x + s * 2, y + s * 2 / 3, x + s, y - s, x, y); // 右カーブ
  endShape(CLOSE);
}

function mouseDragged(){
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  i = random(10, 50);
  if(mag(dx, dy) > 5){
    const b = { x: mouseX, y: mouseY, size: i, vx: dx, vy: dy };
    Heart.push(b);
  }
}

function keyPressed(){
  if(key === " " && !jumping){
    jumping = true;
    vy = -10;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}