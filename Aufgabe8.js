/*
8. Schreiben Sie ein JavaScript-Programm, 
um die nicht eindeutigen Werte in einem Array herauszufiltern. 
(Beispiel-Array: [1, 2, 2, 3, 4, 4, 5]).
*/

function arrFilter(arr){
    arr.sort()
    const seen =[]
    const result =[]
    for (let i = 0; i < arr.length; i++){
        const current=arr[i]
        if (seen.includes(current)){
            continue
        } 
        result.push(current)
        seen.push(current)
        console.log(arr[i]);
    }
    return result
}

console.log(arrFilter([1, 2, 2, 3, 4, 4, 5]))