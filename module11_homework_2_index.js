// модуль 11 задание 2

function getPrimeNumber(number){
    const a = 'Простое число';
    const b = 'Число составное';
    const c = 'Данные неверны';
  if (number > 1 && number < 1000){
    for(let i = 2; i < number; i++){
      if(number % i === 0){
        return b;
      }
    }
    return a;
  }
    else{
      return c;
    }
  }
  
  console.log(getPrimeNumber(2));