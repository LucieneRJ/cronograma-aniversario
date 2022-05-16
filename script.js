
var birthay = new Date("August 14, 2022 06:00:00").getTime();
var days, hours, minutes, seconds;

setInterval(function() {
    var current = new Date().getTime();
    
    var secondsTotal = (birthay - current)/1000; 

    days = parseInt(secondsTotal/86400);
    secondsTotal = secondsTotal%86400;  /*tirar os valores restantes*/
    
    hours = parseInt(secondsTotal/3600);    /* porque a cada hora temos 3600 segundos*/
    secondsTotal = secondsTotal%3600;

    minutes = parseInt(secondsTotal/60);        /* a cada minuto temos 60 segundos */
    seconds = parseInt(secondsTotal%60); /*pegar valores inteiros usando parseInt*/

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    

}, 1000); 


