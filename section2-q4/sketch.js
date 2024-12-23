// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  const white = color(255, 255, 255);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if ((i / 2) % 1) {
      fill(white)
    }
    else{
      fill(blue)
    }
    
    rect(0, i * d, width, (i + 1) * d);
  }


  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(white);
  rect(0, d * 2, size, d);

  fill(white)
  rect(d * 2, 0, d, size)

  fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
}
