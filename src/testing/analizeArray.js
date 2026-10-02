/* An analyzeArray function that takes an
 array of numbers and returns an object with the 
 following properties: average, min, max, and length.*/

function analizeArray(arry) {
  let sumOfArray = 0;
  for (let i = 0; i < arry.length; i++) {
    sumOfArray += arry[i];
  }
  return {
    average: sumOfArray / arry.length,
    max: Math.max(...arry),
    min: Math.min(...arry),
    length: arry.length,
  };
}

export { analizeArray };
