export class Coordinate {
  angle: number;
  line: number;
  constructor(line: number, angle: number) {
    this.angle = angle;
    this.line = line;
    this.rect();
  }
  rect() {
    console.log(
      `Line = ${this.line} \n Left Angle = ${this.angle} \n Right Angle = ${this.angle}`
    );
  }
}