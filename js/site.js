document.getElementById("ubmit").addEventListener("click", doJsWork);
// INDEXES     0, 1, 2, 3, 4, 5, 6, 7, 8, 9
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function doJsWork() {
  
  let size = numbers.length;
  let arrySize = parseInt(document.getElementById("arraySize").value)

  numbers = generateArray(arrySize);
  
  // let element = 0;
  output1 = document.getElementById("results");
  output2 = document.getElementById("results2");
  output3 = document.getElementById("results3");
  

    // add Values to the array
  // size = numbers.push(11);
  // size = numbers.push(20);

  // remove items in array
  // numbers.pop();
  
  // filter the array
  let filter = numbers.filter(function (value, index, arr) {
    return value > 5;
  });


  // find value in array
  // let found = numbers.find(function (value, index, arr) {
  //   return value > 5;
  // })
  
// let found = numbers.includees(7);
//   // print out full array
//   for (let index = 0; index < numbers.length; index++) {
//       output1.innerHTML += `${numbers[index]} `;
//   }

//   // print out filtered array
//   for (let index = 0; index < filter.length; index++) {
//     output2.innerHTML += `${filter[index]} `;
//   }
//   output3.innerHTML = found;
  
// };

// generate an array of random values
function generateArray(size) {
  let randomArray = [];
  for (let index = 0; index < size; index++) {
    randomArray.push(Math.floor(Math.random() * 100) + 1);
  }
    
    

  return randomArray;
}