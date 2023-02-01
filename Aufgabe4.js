/*
4. Schreiben Sie ein JavaScript-Programm, um zu prüfen, 
ob zwei gegebene Integer-Werte im Bereich 50..99 (einschließlich) liegen. 
Geben Sie wahr zurück, wenn einer von ihnen in dem genannten Bereich liegt.
*/

function intBereich(n, m) {    
    if (n >= 50 && n <= 99 && m >= 50 && m <= 99){
        return true
    }
    else return false;
}

console.log (intBereich(1, 12))
console.log (intBereich(56, 57))
console.log (intBereich(100, 101))