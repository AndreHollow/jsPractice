function isIsogram(str){

  var strAr = Array.from(str.toLowerCase());
  var temp1 = [...strAr];
  var temp2 = [...strAr];
  var flag = true;
  if(str === ''){
    return true;
  }
  for(var i = 0; i < temp1.length; i++){
    temp2.splice(i, 1);
    //alert("strAr: " + strAr + "\ntemp1: " + temp1 + "\ntemp2: " + temp2);
    for(var j = 0; j <= temp2.length - 1; j++){
      if(temp1[i].includes(temp2[j])){
        flag = false;
        return flag;
      }
    }
    temp2 = [...strAr];
  }
  return flag;
}