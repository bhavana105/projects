let displayTime = document.querySelector(".display");

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

let [seconds,minutes,hours] = [0,0,0];
let stopWatch = ()=>{
  seconds++;
 if(seconds === 60){
  seconds = 0;
  minutes++;
  if(minutes === 60){
    minutes = 0
    hours++
   }
 }
 let h = hours   < 10 ? "0" + hours   : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 displayTime.innerHTML = h + ":" + m + ":" + s;
};

let timer = null;
let start = ()=>{
  if ( timer !== null){
    clearInterval(timer);
  }
  timer= setInterval(stopWatch , 1000);
};


let stop = () => {
  clearInterval(timer);
};


let reset =()=>{
  clearInterval(timer);
  displayTime.innerHTML = "00:00:00";
}