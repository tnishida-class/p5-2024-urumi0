// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let x, y, px, py; // 線を引くために一つ前の点を覚えておく変数
  x = -20;
  px = 0;
  py = 0;

  for(let i = 0; i < scores.length; i++){
    // BLANK[1]
    if (i === 0){
      px = x;
      py = y;
    }
    x = x + dx;
    y = scores[i];
    ellipse (x, y, 10);
    line (px, py, x, y);
    px = x;
    py = y;
  }
}
