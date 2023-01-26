function encriptar() {
    let text= document.getElementById("text-left").Value.toLocaleLowerCase();
    var mencifrado = text.replace(/e/igm,"enter" );
    let mencifrado = mencifrado.replace(/o/igm,"ober" );
    let mencifrado = mencifrado.replace(/i/igm,"imes" );
    let mencifrado = mencifrado.replace(/a/igm,"ai" );
    let mencifrado = mencifrado.replace(/u/igm,"ufat" );
  document.getElementById("imgenDerecha").style.display = none;
  document.getElementById("text-right").innerHTML = mencifrado;

}



function encriptar() {
    let text= document.getElementById("text-left").Value.toLocaleLowerCase();
    var mencifrado = text.replace(/enter/igm,"e" );
    let mencifrado = mencifrado.replace(/ober/igm,"o" );
    let mencifrado = mencifrado.replace(/imes/igm,"i" );
    let mencifrado = mencifrado.replace(/ai/igm,"a" );
    let mencifrado = mencifrado.replace(/ufat/igm,"u" );
  document.getElementById("imgenDerecha").style.display = none;
  document.getElementById("text-right").innerHTML = mencifrado;
}


function copiar(){
let textCifrado = document.querySelector("text-right");
textCifrado.select();
document.execCommand(copiar)
alert("Copiado")
}