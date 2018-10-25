/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

humanReadable(86399), '23:59:59'
*/


function humanReadable(seconds) {
  if(seconds <= 359999){
    let s = seconds % 60;
    let m = ((seconds - s) / 60) % 60;
    let h = (((seconds - s) / 60) - m) / 60;
    if(s < 10) s = '0' + s;
    if(m < 10) m = '0' + m;
    if(h < 10) h = '0' + h;
    let clock = [h, m, s];
    return clock.join(':');
  }
  else return 0;
}


//refactored

function humanReadable(seconds) {
  function addZero(x){ return x<10?'0'+x:x;}
  return addZero(parseInt(seconds / 3600)) + ':' +
         addZero(parseInt(seconds / 60 % 60)) + ':' +
         addZero(parseInt(seconds % 60));
}