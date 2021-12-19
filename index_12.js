
// const arrayFilled = (value,len) => {
// const box = [];

// for (let i = 0; i < len; i++) {
//   box.push(value);
// }
// return box;
// }
// console.log(arrayFilled(1,10));



// const str = "Каждый охотник желает знать, где сидит фазан.";  
// function firstChar(value, index, arr) {  
//   if (index == 0)  
//       return true;  
//   else  
//       return arr[index - 1] === " ";  
// }  

// let array = [].filter.call(str, firstChar);  
// console.log(array);




function generateNumbers(start, len) {
  let arr = new Array(len);
  for (let i = 0; i < len; i++, start++) {
    arr[i] = start;
  }
      return arr;
}

console.log(generateNumbers(2, 4));

