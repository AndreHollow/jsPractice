/* This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

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


//refactored

function accum(s) {
	return s.split('').map((i, a) => i.toUpperCase() + i.toLowerCase().repeat(a)).join('-');
}