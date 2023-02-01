/*
9. Schreiben Sie eine JavaScript-Funktion, um das erste Element eines Arrays abzurufen. 
Das Übergeben eines Parameters 'n' gibt die ersten 'n' Elemente des Arrays zurück.
*/

function arra(n, ni) {
    if (!ni) {
        return n[0]
    }
    const subArray = []
    for (let i = 0; i <= ni; i++) {
subArray.push(n[i])
    }
return subArray
}

console.log(arra([1, 2, 3, 4,]));
console.log(arra([1, 2, 3, 4,], 2));
