function getFocus(){
    let input = document.getElementById("text-left");
    input.focus();
}

getFocus();


function encrypt() {
    var text = document.getElementById('text-left').value.toLowerCase();
    var mensajeCifrado = text.replace(/e/igm,"enter");
    var mensajeCifrado = mensajeCifrado.replace(/i/igm,"imes");
    var mensajeCifrado = mensajeCifrado.replace(/a/igm,"ai")
    var mensajeCifrado = mensajeCifrado.replace(/o/igm,"ober");
    var mensajeCifrado = mensajeCifrado.replace(/u/igm,"ufat");

    document.getElementById("text-right").innerHTML = mensajeCifrado;
    
}


function decrypt() {
    var text = document.getElementById('text-left').value.toLowerCase();
    var mensajeCifrado = text.replace(/enter/igm,"e");
    var mensajeCifrado = mensajeCifrado.replace(/imes/igm,"i");
    var mensajeCifrado = mensajeCifrado.replace(/ai/igm,"a");
    var mensajeCifrado = mensajeCifrado.replace(/ober/igm,"o");
    var mensajeCifrado = mensajeCifrado.replace(/ufat/igm,"u");

    document.getElementById("text-right").innerHTML = mensajeCifrado;
    if (document.getElementById("text-left")==mensajeCifrado ) {
       return decrypt();
    }
}

 
function copy( ){

    var mensaje = document.querySelector("#text-right");
        mensaje.select();
        document.execCommand("copy");
        alert("copiado")
                
}
