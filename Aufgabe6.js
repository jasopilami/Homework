/*
6. Schreiben Sie ein JavaScript-Programm, 
um herauszufinden, ob ein Wort ein Palindrom ist,
oder nicht. (z. B. Madam, Anna, Otto)
*/

function palinDrom(wort){
    const a = wort.toLowerCase()
    const b = wort.toLowerCase().split('').reverse().join('')
    return a == b
}

console.log (palinDrom('Anna'))

