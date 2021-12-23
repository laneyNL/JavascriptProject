export default class Room {
  constructor(canvas) {
    this.room = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.drawroom();
  }

  drawroom() {
    this.room.lineWidth = 4;
    this.room.strokeStyle = "black";
    this.background();
    this.door();
    this.tv();
    this.rug();
  }
  
  background() {
    this.room.fillStyle = "#C6C0C0";
    this.room.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    this.rightRectangle(350, 15, 333, 150, 'rgba(28, 154, 218, 0.23)');
    this.leftRectangle(350,15, 333, 149, 'rgba(28, 154, 218, 0.23)');
    this.floorRectangle(350, 165, 370, 370, 'rgba(28, 154, 218, 0.23)');

  }
  
  door() {
    this.leftRectangle(110,185,40,100,'pink');
    this.room.fillStyle = 'yellow';
    this.room.beginPath();
    this.room.arc(100, 240, 5, 0, Math.PI*2, true);
    this.room.stroke();
    this.room.fill();
    this.room.closePath();
  }

  tv() {
    this.rightRectangle(370, 150, 100, 75, 'pink')
    this.rightRectangle(380, 85, 80, 70, 'gray')
    this.rightRectangle(390, 95, 60, 60, 'skyblue')

  }

  rug() {
    // this.floorRectangle(550, 310, 50, 70, 'red';
    // this.room.fillStyle="pink";
    // this.room.beginPath();
    // this.room.moveTo(375,420);
    // this.room.arc(375,350, 70, 0, Math.PI*2, true);
    // this.room.closePath();
    // this.room.stroke();
    // this.room.fill();
    this.floorRectangle(400,300,50,80,'pink');
  }

  rightRectangle(x1,y1, width, height, color) {
    this.room.fillStyle = color;
    this.room.beginPath();//slope ~ 1/2
    this.room.moveTo(x1, y1); //top left corner
    this.room.lineTo(x1 + width, y1 + (width / 2));
    this.room.lineTo(x1 + width, y1 + height + (width / 2));
    this.room.lineTo(x1, y1 + height);
    this.room.closePath();
    this.room.stroke();
    this.room.fill();

  }
  leftRectangle(x1, y1, width, height, color) {
    this.room.fillStyle = color;
    this.room.beginPath();//slope ~ 1/2
    this.room.moveTo(x1, y1); //top right corner
    this.room.lineTo(x1, y1 + height);
    this.room.lineTo(x1 - width, y1 + height + (width / 2));

    this.room.lineTo(x1 - width, y1 + (width / 2));

    this.room.closePath();
    this.room.stroke();
    this.room.fill();

  }
  floorRectangle(x1, y1, width, height, color) {
    this.room.fillStyle = color;
    this.room.beginPath();//slope ~ 1/2
    this.room.moveTo(x1, y1); //top corner

    let yHeight = ((height**2)/5)**0.5;
    let yWidth = ((width ** 2) / 5) ** 0.5;
    this.room.lineTo(x1 + (2*yWidth), y1 + yWidth);
    this.room.lineTo(x1 + (2*yWidth) - (2*yHeight), y1 + yWidth + yHeight);
    this.room.lineTo(x1 - (2*yHeight), y1 + yHeight);
    
    this.room.closePath();
    this.room.stroke();
    this.room.fill();
  }

}