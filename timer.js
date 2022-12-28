function starttimer(duration, display){
  var timer = duration, hours, minutes, seconds;
  setInterval(function(){
   hours = parseInt(timer/ 3600, 10)
   minutes = parseInt(timer / 60, 10);
   minutes = hours ? minutes - (60 * hours) : minutes;
   seconds = parseInt(timer % 60, 10); 
   
   hours = hours < 10 ? "0" + hours : hours; 
   minutes = minutes < 10 ? "0" + minutes : minutes; 
   seconds = seconds < 10 ? "0" + seconds : seconds;
   display.textContent =hours + ":" + minutes + ":" + seconds; 
    
   if(--timer < 0){
     timer = duration;
   } 
   if (timer == 0){
     timer = duration;
     timer = "";
   }
   
    
  },1000);
}

window.onload = function(){
  var duration = 60*61; // converte para segundos
  var display = document.querySelector("#timer");
  
  starttimer(duration, display);
}
