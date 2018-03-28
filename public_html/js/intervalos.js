/*window.onload = function(){
    alert();
};*/

var unaVez, muchasVeces;

function reloj()
{
    var tiempo = document.querySelector("#tiempo");    
    tiempo.innerHTML = Date();
}

function ejecutarIntervalos(evento)
{
    //alert(evento.target.id);
    //console.log(evento);
    
    var queBoton = evento.target.id;
    
    /*setTimeout y setInterval se guardan en variables (pueden ser ejecutados
     * sin la necesidad de guardarlos previamente en variables) porque clearTimeout y clearInterval
     * necesitan un objeto que contenga éstos respectivamente.*/
    
    switch(queBoton)
    {
        case "set-timeout":
            unaVez = setTimeout("reloj()", 2000); //setTimeout sólo se ejectuta una vez
            break;
            
        case "clear-timeout":
            clearTimeout(unaVez);
            break;
        
        case "set-interval":
            muchasVeces = setInterval("reloj()", 1000); //setInterval se ejectuta cada determinado tiempo
            break;
            
        case "clear-interval":
            clearInterval(muchasVeces);
            break;    
    }
}

function intervalosTiempo(evento)
{
    //console.log(evento);
    var sT = document.getElementById("set-timeout");
    var cT = document.getElementById("clear-timeout");
    var sI = document.getElementById("set-interval");
    var cI = document.getElementById("clear-interval");
    
    sT.onclick = ejecutarIntervalos;
    cT.onclick = ejecutarIntervalos;
    sI.onclick = ejecutarIntervalos;
    cI.onclick = ejecutarIntervalos;
    
}

window.onload = intervalosTiempo;
