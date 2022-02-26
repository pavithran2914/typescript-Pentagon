import { Dot } from './dot.model';
import { Coordinate } from './coordinate.model';

export class Pentagon {
  dot: Dot;
  pen: Coordinate;

  constructor(dot: Dot, pen: Coordinate) {
    this.dot = dot;
    this.pen = pen;
  }
}
