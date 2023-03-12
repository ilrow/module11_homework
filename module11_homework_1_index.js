// модуль 11 задание 1

function getCountEvenAndOddNumbers(){
    let arr = [0, 42, 63, 56, null, 17, '', 25, 0, ];
    
    let num = typeof 1;
    
    for (let i = 0; i < arr.length; i++)
    {
      let odd = arr[i] % 2 !== 0;
      let even = arr[i] % 2 === 0;
      
      if (odd && typeof arr[i] === num && arr[i] !== 0)
      {
          console.log(arr[i] + ' нечетное');
        
      }else if(typeof arr[i] === num && arr[i] !== 0 && even){
        
        console.log(arr[i] + ' четное');
      }
      
      else{
        console.log(arr[i])
      }
      }
    }
    
    getCountEvenAndOddNumbers();