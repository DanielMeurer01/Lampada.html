var quebrada = false
function mudaLampada(tipo){
    if(tipo == 1){
        arquivo="ybxlO.jpg";
    }
    if(tipo == 2){
        arquivo="b983w.jpg";
}
    if(tipo == 3){
        arquivo="quebra.jpg";
        
    }
    if (!quebrada){
    document.getElementById("Luz").src=arquivo;
    if(tipo == 3){
        quebrada=true
    }
  }
}