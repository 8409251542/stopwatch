let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let timer=null;
//let startbtn = document.getElementById("start").addEventListener('click',watchStart());
//let stopbtn = document.getElementById("stop").addEventListener('click',watchStop());
//let resetbtn = document.getElementById("Reset").addEventListener('click',watchreset());

let seccond=0,minute=0,hours=0;

function watchTime(){
    seccond++;
    if(seccond==60){
        seccond=0;
        minute++;
    }
    if(minute==60){
        minute=0;
        hours++;
    }
    hrs.innerHTML=(hours<10?"0":"")+hours;
    min.innerHTML=(minute<10?"0":"")+minute;
    sec.innerHTML=(seccond<10?"0":"")+seccond;
};
function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
   timer=setInterval(watchTime,1000);
}
function watchStop(){
    clearInterval(timer);
}
function watchreset(){
    clearInterval(timer);
    seccond=0;
    minute=0;
    hours=0;
    hrs.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
}
