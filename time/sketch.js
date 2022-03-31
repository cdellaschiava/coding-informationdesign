//CLOCK LIBRABRY
//Clock Function by Christian Swinehart 

// numerical values for elements of current time
//now.hours // hour in 0–23 'military' time
//now.hour  // hour in 1–12 'am/pm' time
//now.min   // minute
//now.sec   // seconds
//now.ms    // milliseconds
//now.am    // true for hours 0-11
//now.pm    // true for hours 12-23
//
//// numerical values for elements of current date
//now.year    // the full 4-digit year
//now.month   // month number 1–12
//now.moon    // the fullness of the moon 0–1.0
//now.day     // the day 1–{28,29,30,31}
//now.weekday // the day of the week 1-7
//now.season  // the current season 1-4 (starting with spring)

// a string-based representation that can be used as an argument to clockStart
//now.timestamp // "2001/12/31 23:45:56"

// values between 0.0 and 1.0 measuring the current time's %-completion of various cycles
//now.progress.year
//now.progress.season
//now.progress.month
//now.progress.moon
//now.progress.week
//now.progress.day
//now.progress.halfday
//now.progress.hour
//now.progress.min
//now.progress.sec

// string versions of the date & time (in case you want to print it out)
//now.text.time    // "11:45:56 P.M."
//now.text.hour    // "11"
//now.text.hours   // "23"
//now.text.min     // "45"
//now.text.sec     // "56"
//now.text.ampm    // "P.M."
//now.text.date    // "31 Dec 2001"
//now.text.year    // "2001"
//now.text.season  // "Winter"
//now.text.month   // "December"
//now.text.mon     // "Dec"
//now.text.day     // "31"
//now.text.weekday // "Monday"


function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  colorMode(RGB,255,255,255,255);
  
  frameRate(5);
}


function draw() {
  var now = clock()
  var h = now.hours;
  var m = now.min;
  var s = now.sec;
  
  var py = map(now.progress.year,0,1,0,width);
  var pm = map(now.progress.month,0,1,0,width);
  var pd = map(now.progress.day,0,1,0,width);

  var pw = map(now.progress.week,0,1,0,width);  
  var ph = map(now.progress.hour,0,1,0,width);
  var pmin = map(now.progress.min,0,1,0,width);
  



  background(51);

  loadPixels();

  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      var index = (x+y*width)*4;
      
      /*pixels[index+0]=(x/y)*s;
      pixels[index+1]=m*(x/y);
      pixels[index+2]=h*(y/x);*/
      
      /*pixels[index+0]=(x/y)*s;
      pixels[index+1]=m*(x/y);
      pixels[index+2]=h*(y/x);*/


  /*  pixels[index+0]=dist(x,y,map(s,0,59,0,width),map(s,0,59,0,height));//rot
      pixels[index+1]=map(dist(x,y,map(h,0,24,0,width),map(h,0,24,0,height)),0,height,0,pm); //green
      pixels[index+2]=map(dist(x,y,map(m,0,24,0,width),map(m,0,24,0,height)),0,height,0,pm); //blue*/
      
      //höchstes ist 255 - sehr schön
      /*pixels[index+0]=map(dist(x,y,pd,map(s,0,59,0,height)),0,width,0,255);//rot
      pixels[index+1]=map(dist(x,y,pm,map(m,0,59,0,height)),0,width,0,255);//green
      pixels[index+2]=map(dist(x,y,py,map(h,0,59,0,height)),0,width,0,255);//blue*/
      
      
      //höchstes ist 255, s nicht, lesbarer als uhr
    /*pixels[index+0]=dist(x,y,ph,map(s,0,59,0,height));//rot
      pixels[index+1]=map(dist(x,y,ph,map(m,0,59,0,height)),0,width,0,255);//green
      pixels[index+2]=map(dist(x,y,pd,map(h,0,59,0,height)),0,width,0,255);//blue*/
      

//fin, langsam aber wunderschön, pos x = referenz im Stunden,Tages,Wochenzeitraum, pos y = zeit, größe ist gleich referenz im Wochen/Monats/Jahreszeitraum
pixels[index+0]=map(dist(x,y,ph,map(s,0,59,0,height)),0,width,0,pw);//rot
      pixels[index+1]=map(dist(x,y,pd,map(m,0,59,0,height)),0,width,0,pm);//green
      pixels[index+2]=map(dist(x,y,pw,map(h,0,59,0,height)),0,width,py,0);//blue
      
      //x-pos = referenz im Jahr, size = time
      /*pixels[index+0]=map(dist(x,y,pd,pmin),0,width,0,map(s,0,59,height,0));//rot
      pixels[index+1]=map(dist(x,y,pm,ph),0,width,0,map(m,0,59,height,0));//green
      pixels[index+2]=map(dist(x,y,py,pd),0,width,0,map(h,0,23,height,0));//blue*/
      
      
      
      pixels[index+3]=255;
    }
  }
  updatePixels();
}