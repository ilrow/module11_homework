// модуль 11 задание 4
function setNumbers(a, b){
    const intervalId = setInterval(function () {
    
      
      if ( a <= b){
        console.log(a++)
      } else{
        clearInterval(intervalId)
      }
    
    }, 1000);
    }
    
    
    setNumbers(10, 15)