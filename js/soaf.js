document.getElementById("submit").addEventListener('click', function ()
{
 let valK = parseInt(document.getElementById("valK").value);
 let val1 = parseInt(document.getElementById("val1").value);
 let val2 = parseInt(document.getElementById("val2").value);
 let val3 = parseInt(document.getElementById("val3").value);
 let val4 = parseInt(document.getElementById("val4").value);
       
    
let toArray = [val1, val2, val3, val4];
let result = "";
    

let output = document.getElementById("result")
let output2 = document.getElementById("sum")


  let newArray= []
  for (let i = 0; i <= toArray.length; i++) {
      for (let k = i + 1; k <= toArray.length; k++) {
          if (toArray[i] + toArray[k] == valK) {
              result = `${toArray[i]} + ${toArray[k]} = ${valK}`;
              newArray.push(result);
           } 
      }
    
      if (newArray.length > 0) {
          output.innerHTML = "Success!";
          output2.innerHTML = newArray.join(' , ');
      } else {
          output.innerHTML = `Sorry no numbers add up to ${valK}`;
          output2.innerHTML = ""; 
      }
  }
    
});

//Clear Button
document.getElementById("clear").addEventListener("click", function () {
    
    document.getElementById("valK").value = "";
    document.getElementById("val1").value = "";
    document.getElementById("val2").value = "";
    document.getElementById("val3").value = "";
    document.getElementById("val4").value = "";
    document.getElementById("result").innerHTML= "";
    document.getElementById("sum").innerHTML = "";
    
})

    
