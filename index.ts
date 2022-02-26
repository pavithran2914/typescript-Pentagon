// Import stylesheets
import './style.css';
import { Pentagon } from './pentagon.model';
import { Dot } from './dot.model';
import { Line } from './line.model';
import { Coordinate } from './coordinate.model';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let point = new Dot(8, 10);

let pen = new Coordinate(6);

let pentagonObj = new Pentagon(point, pen);

console.log(pentagonObj);
