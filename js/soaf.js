document.getElementById("submit").addEventListener('click', function(){


       
    
        let valK = parseInt(document.getElementById("valK").value);
        let val1 = parseInt(document.getElementById("val1").value);
        let val2 = parseInt(document.getElementById("val2").value);
        let val3 = parseInt(document.getElementById("val3").value);
        let val4 = parseInt(document.getElementById("val4").value);
        let array = [val1, val2, val3, val4];
        let result = "";
    

        let output = document.getElementById("result")
        let output2 = document.getElementById("sum")


  
  for (let i = 0; i < array.length; i++) {
      for (let k = i + 1; k < array.length; k++) {
          if (array[i] + array[k] == valK) {
              result = `${array[i]} + ${array[s]} = ${valK}`;
              output.innerHTML = "Success!";
              output2.innerHTML = `${result}`;
            }
            
            else {
                output.innerHTML = `the numbers shown do not add up to ${valK}`;
                output2.innerHTML = "";  
            }
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

    
