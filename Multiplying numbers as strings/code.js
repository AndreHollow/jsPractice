/*
This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

1.The arguments are passed as strings.
2.The numbers may be way very large
3.Answer should be returned as a string
4.The returned "number" should not start with zeros e.g. 0123 is invalid

*/


function multiply(a, b) {
    if (parseInt(a) == 0 || parseInt(b) == 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    var result = [];

    for (var i = 0; a[i] >= 0; i++) {
        for (var j = 0; b[j] >= 0; j++) {
            if (!result[i + j]) {
                result[i + j] = 0;
           }

            result[i + j] += a[i] * b[j];
        }
    }
	for (var i = 0; result[i] >= 0; i++) {
        if (result[i] >= 10) {
            if (!result[i + 1]) {
                result[i + 1] = 0;
            }

            result[i + 1] += parseInt(result[i] / 10);
            result[i] %= 10;
        }
    }
    result.reverse();
    let d = 0;
    for(let i = 0; i < result.length; i++){
      if(result[i] === 0) d++;
      else break;
    }
    if(d > 0)
      result.splice(0, d);
    return result.join('');
}