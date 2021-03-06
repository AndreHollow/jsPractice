/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  let finalString = '';
  let plus = ' + ';
  let strNum = num.toString();
  //let strNumReverse = num.toString().split('').reverse().join('');
  let counter = 1;
  if(strNum[strNum.length - 1] != 0)
    finalString += strNum[strNum.length - 1];
  
  for(let i = strNum.length - 2; i >= 0; i--){
    if(strNum[i] === '0')
      counter ++
    else
      finalString = ((parseInt(strNum[i], 10) * Math.pow(10, counter++)) + plus).concat(finalString);
  }
  
  if(strNum[strNum.length - 1] === '0'){
    return finalString.slice(0, finalString.length - 3);
  }
  else
    return finalString;
}

/* How it should be done 
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
*/