let xAnchor1, xAnchor2, yAnchor1, yAnchor2;
let a1Speed, a2Speed;
let c1X, c1Y, c1Rad, c1Angle, c1Speed;
let c2X, c2Y, c2Rad, c2Angle, c2Speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xAnchor1 = 0;
  xAnchor2 = width;
  yAnchor1 = 0;
  yAnchor2 = height;
  a1Speed = 2;
  a2Speed = -a1Speed;

  c1X = (width / 4) * 3;
  c1Y = height / 4;
  c1Rad = height/2;
  c1Angle = 0;
  c1Speed = 0.051;

  c2X = width / 4;
  c2Y = (height / 4) * 3;
  c2Rad = height/2;
  c2Angle = 3;
  c2Speed = 0.049;
}

function draw() {
  background(0, 10);
  // background(220);
  yAnchor1 += a1Speed;
  yAnchor2 += a2Speed;
  let x2 = c1X + c1Rad * cos(c1Angle);
  let y2 = c1Y + c1Rad * sin(c1Angle);
  let x3 = c2X + c2Rad * cos(c2Angle);
  let y3 = c2X + c2Rad * sin(c2Angle);

  if(yAnchor1 >= height/2 || yAnchor1 <=0) {
    a1Speed = -a1Speed;
  }
  if(yAnchor2 >= height || yAnchor2 <=height/2) {
    a2Speed = -a2Speed;
  }
  
  c1Angle+=c1Speed;
  c2Angle+=c2Speed;
  strokeWeight(2);
  stroke(0, 255, 255, 50);
  noFill();
  bezier(xAnchor1, yAnchor1, x2, y2, x3, y3, xAnchor2, yAnchor2);
  stroke(255, 0, 255, 50);
  bezier(xAnchor1, yAnchor2, x3, y3, x2, y2, xAnchor2, yAnchor1);
  
  /*for(int i=0; i<height; i+=height/50){
   bezier(0, i, height-i, 650, width-i, 900, width, i);
   }*/
  //strokeWeight(10);
  //point(x2,y2);
  //point(x3,y3);
}
