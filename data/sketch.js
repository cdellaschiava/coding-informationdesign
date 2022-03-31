let cnv;
let c=0;

//Daten im Vorraus Laden
function preload(){
  data = loadTable('data/02_Datensatz.csv', 'csv', 'header');
}

//Settings
function setup(){
}

  function draw(){
    cnv = createCanvas(700, 700);
    var b = color(0,51,150);

  background(b);

  //Loop/Schleife, um durch alle Tabellenzeilen durchzugehen 
  for (var i = 0; i < data.getRowCount(); i++) {

//Daten aus Tabelle lesen pro Zeile
    let x = data.getNum(i, 'x') * width/10;
    let y = data.getNum(i, 'y') * height/10;
    let s = data.getNum(i, 's') * 333;
    let n = data.getString(i, 'Geopolitische Meldeeinheit');

    //let n = data.getString(i, 'Geopolitische Meldeeinheit');

    //Ästethik
    noStroke();
    fill(255,204,0);

    //Kreise
    ellipse(x,y,s,s);
    textAlign(CENTER);

    fill(255);
    textSize(10);
    text(n,x,y+(s/2)+12);
  }

  
textSize(50);
textAlign(LEFT);
  text("Gender Pay Gap", width/4,50);
  text("in Europa", width/4,100);


}


