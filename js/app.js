let tiempoRef = Date.now()
let cronometrar = true
let acumulado = 0

function iniciar(){
    cronometrar=true;
}

function pausa(){
    cronometrar=false;
}

function reiniciar(){
    acumulado =0;
}

setInterval(() =>{
    let tiempo = document.getElementById('tiempo')
    if(cronometrar){
        acumulado += Date.now()- tiempoRef

    }
    tiempoRef=Date.now()
    tiempo.innerHTML = milisegundos(acumulado)

}, 1000/60);

function milisegundos(ms){
    let mS= ms%1000
    let seg = Math.floor(((ms - mS)/1000)%60)
    let min = Math.floor((seg/60)%60)
    let h = Math.floor((min/60))
    Number.prototype.ceros = function(n){
        return(this+'').padStart(n,0)
    }
    return h.ceros(2) +':'+ min.ceros(2)+':'+seg.ceros(2)+'.'+mS.ceros(3)
}










