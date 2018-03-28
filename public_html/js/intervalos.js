/*window.onload = function(){
    alert();
};*/

function reloj()
{
    var tiempo = document.querySelector("#tiempo");    
    tiempo.innerHTML = Date();
}

function ejecutarIntervalos(evento)
{
    //alert(evento.target.id);
    //console.log(evento);
    
    var queBoton = evento.target;
    var unaVez, muchasVeces;
    
    switch(queBoton)
    {
        case "set-timeout":
            setTimeout("reloj", 2000);
            break;
            
        case "clear-timeout":
            break;
        
        case "set-interval":
            break;
            
        case "clear-interval":
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
