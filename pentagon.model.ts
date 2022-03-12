import { Dot } from './dot.model';
import { Coordinate } from './coordinate.model';

interface IShapes<T> {
  area(shape: T): T;
}

export class Pentagon implements IShapes<Pentagon> {
  dot: Dot;
  pen: Coordinate;

  constructor(dot: Dot, pen: Coordinate) {
    this.dot = dot;
    this.pen = pen;
  }
  area(shape: Pentagon): Pentagon {
    throw new Error('Method not implemented.');
  }
}
