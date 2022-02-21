// Import stylesheets
import './style.css';
import { Pentagon } from './pentagon.model';
import { Dot } from './dot.model';
import { Line } from './line.model';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let point1 = new Dot(4, 2);
let point2 = new Dot(2, 3);
let point3 = new Dot(6, 3);
let point4 = new Dot(3, 6);
let point5 = new Dot(5, 6);

let line1 = new Line(point1, point2);
let line2 = new Line(point2, point4);
let line3 = new Line(point4, point5);
let line4 = new Line(point5, point3);
let line5 = new Line(point3, point1);

let pentagonObj = new Pentagon(line1, line2, line3, line4, line5);

console.log(pentagonObj);
