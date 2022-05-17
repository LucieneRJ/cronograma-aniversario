
var birthay = new Date("August 14, 2022 06:00:00").getTime();
var days, hours, minutes, seconds;

setInterval(function() {
    var current = new Date().getTime();
    
    var secondsTotal = (birthay - current)/1000; 

    days = parseInt(secondsTotal/86400);
    secondsTotal = secondsTotal%86400;                  /*tirar os valores restantes*/
    
    hours = parseInt(secondsTotal/3600);                /* porque a cada hora temos 3600 segundos*/
    secondsTotal = secondsTotal%3600;

    minutes = parseInt(secondsTotal/60);                /* a cada minuto temos 60 segundos */
    seconds = parseInt(secondsTotal%60);                /*pegar valores inteiros usando parseInt*/

    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    

}, 1000); 


/*=====================square========================*/
    const ulSquares = document.querySelector("ul.squares");
    
    for (let i = 0; i < 11; i++) {                                  /*fazer 10 quadrados */
    const li = document.createElement("li");                        /*criar li */
        
    const random = (min, max) => Math.random() * (max - min) + min;
        
        
    const size = Math.floor(random(10, 120));                       /*criar tamanhos diferentes max120 e min10*/
    const position = random(1, 99);                                 /* posicionamento diferente na tela de 1 a 99% */
    const delay = random(5, 0.1);                                   /*criar delay para segundos */
    const duration = random(24, 12);
        
    li.style.width = `${size}px`;                                   /*largura dinamica */
    li.style.height = `${size}px`;                                  /*altura dinamica */
    li.style.bottom = `-${size}px`;
        
    li.style.left = `${position}%`;                                 /* vai separar em diversos locais da tela*/

    li.style.animationDelay = `${delay}s`;                          /*saídas diferentes */
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;
    
    ulSquares.appendChild(li);                                      /*appendChild() insere um elemento filho (children) ao elemento pai (parent) na última posição*/


    };




