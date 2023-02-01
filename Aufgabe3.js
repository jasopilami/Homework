/*
3.Schreiben Sie ein JavaScript-Programm, um die Differenz zwischen einer gegebenen Zahl und 13 zu erhalten, 
wenn die Zahl größer als 13 ist, geben Sie die doppelte absolute Differenz zurück.
*/

function diff13(n) {
    if (n <= 13){
    return (n - 13);
    }

    return Math.abs(13 - (n*2))
    
}
console.log(diff13(10))
console.log(diff13(13))
console.log(diff13(14))