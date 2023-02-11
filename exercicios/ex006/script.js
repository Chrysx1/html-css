var intervald = window.setInterval(() => {hora()},1000);

function hora(){
    var msg = document.querySelector('div#res')
    var data = new Date
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    if(minuto < 10) minuto = "0" + minuto
    if(segundo < 10) segundo = "0" + segundo
    if(hora < 10) hora = "0" + hora
    msg.innerHTML = `${hora}:${minuto}:${segundo}`


}

function leuTudo(){
    var txt = document.getElementById('texto')
    txt.innerHTML = 'Que bom que leu tudo'
}