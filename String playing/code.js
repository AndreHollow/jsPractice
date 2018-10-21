function accum(str) {
	var counter = 0;
  var newStr = '';
  for(let i of str){
    counter++;
    newStr += i.toUpperCase();
    for(let j = 0; j < counter - 1; j++){
      newStr += i.toLowerCase();
    }
    if(str.length == counter){
      return newStr;
    }
    else newStr += '-';
  }
  return newStr;
}