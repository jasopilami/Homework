/*
10. Schreiben Sie ein JavaScript-Programm, um ein Array zu mischen.
*/

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    
    while (currentIndex != 0) {
  
    
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  
  var arr = [2, 11, 37, 42];
  shuffle(arr);
  console.log(arr);
