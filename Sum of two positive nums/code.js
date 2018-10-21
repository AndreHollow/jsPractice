function sumTwoSmallestNumbers(numbers) {  
  if(numbers.length >= 4){
    for(let i in numbers){
      if(typeof numbers[i] == 'number') {
        return 0;
      }
      
      for(let i in numbers){
        let min1 = Math.min.apply(null, numbers);
        let min2 = Number.MAX_SAFE_INTEGER;
        if(numbers[i] != min1 && numbers[i] < min2) {
          min2 = numbers[i];
        }
      }
      
      return min1+min2;
    }
  }
  return 0;
};


function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
