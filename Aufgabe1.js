/*  
1. Schreiben Sie ein JavaScript-Programm, 
    um den Flächeninhalt eines Dreiecks zu ermitteln, 
    dessen drei Seitenlängen a, b, c sind.  
*/

let a = 4;
let b = 6;
let c = 7.2;

let s = (a+b+c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log("Area of Triangle " + a + ", " + b + ", " + c + ": " + Math.round(area*100)/100)