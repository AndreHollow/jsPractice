function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0 ){return [];}

    let sum = 0;
    let count = 0;
    
    for(let i in input){
      if(input[i] > 0) count++;
      else sum += input[i];
    }
    
    return [count,  sum];
}