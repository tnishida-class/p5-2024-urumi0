// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);
  daysInYear(2024);
  let dow = dayOfWeek(1981, 7, 17);
  text(dow, 100, 50);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  // BLANK[1]
  for(let i = 0; i <= 2100; i++){
    if(isLeapYear(y)){
      text("366", 50, 50);
    }
    else{
      text("365", 100, 50);
    }
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  const baseYear = 1970;
  const baseMonth = 1;
  const baseDay = 1;
  const baseDow = 4; 

  let totalDays = 0;

  for (let year = baseYear; year < y; year++) {
    totalDays += isLeapYear(year) ? 366 : 365;
  }

  for (let month = 1; month < m; month++) {
    totalDays += daysInMonth(y, month);
  }

  totalDays += d - 1;

  return (baseDow + totalDays) % 7;
  
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
