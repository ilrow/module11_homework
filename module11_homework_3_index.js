// модуль 11 задание 3 

function setNum(a){

    return function(b) {
      return a + b;
    }
    
  }
  
  
  const sumNum = setNum(1);
  
  console.log(sumNum(2))