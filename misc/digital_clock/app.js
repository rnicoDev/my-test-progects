function clock() {
  const timeNow = new Date();
  let hours = timeNow.getHours();
  let mins = timeNow.getMinutes();
  let secs = timeNow.getSeconds();
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ":" + mins;
  document.getElementById('second').innerHTML = ":" + secs;
     if(hours < 10) {
          hours = "0" + hours;
 }
    if(mins < 10) {
          mins = "0" + mins;
 }
   if(secs < 10) {
          secs = "0" + secs;
 }
}
setInterval(clock, 1000);
