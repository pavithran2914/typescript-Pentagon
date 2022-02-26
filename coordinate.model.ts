export class Coordinate {
  line: number;
  constructor(line: number) {
    this.line = line;
    this.pen();
  }
  pen() {
    console.log(
      `Bottom = ${this.line} \n Left Bottom = ${this.line} \n Right Bottom = ${this.line} \n Left Top = ${this.line} \n Right Top = ${this.line}`
    );
  }
}
