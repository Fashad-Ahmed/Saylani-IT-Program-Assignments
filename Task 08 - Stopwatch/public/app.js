
var min = 0; 
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;
function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++
        secHeading.innerHTML = sec;
        msec = 0
    }else if ( sec>=60){
        min++
        sec = 0
        minHeading.innerHTML = min
        sec = 0
    }
}
function start(){
    name = prompt("enter the name of person");
    work = prompt("what type of work you want to calculate time ");
    interval = setInterval(timer,10)
    document.getElementById("l").disabled =true
    
}
function stop(){
    clearInterval(interval)
    document.getElementById("l").disabled =false
}
function reset(){
    alert("The time taken by "+ name +" in doing "+ work +" is  "+min+" minute, "+sec+" seconds and "+msec+" milisecond")
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = min
    secHeading.innerHTML = sec
    msecHeading.innerHTML = msec
    stop()
    document.getElementById("l").disabled =false
}
