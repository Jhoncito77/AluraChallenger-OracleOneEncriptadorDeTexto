var botonEncriptar = document.querySelector("#encriptar");
var mensajeMostrado = document.querySelector("#respuesta");
var botonDesencriptar = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copiar");
var textoAEncriptar = document.querySelector("#texto")

botonEncriptar.addEventListener("click",function(){
    let textoEncriptado = encriptar(document.querySelector("#texto").value);
    
    let mensajeMostrado = document.querySelector("#respuesta");
    let imagenAOcultar = document.querySelector("#imagen");
    imagenAOcultar.classList.add("ocultar");
    botonCopiar.classList.remove("ocultar");
    let textosAOcultar = document.querySelectorAll(".mensaje");
    for(let i=0;i<textosAOcultar.length;i++){
        textosAOcultar[i].classList.add("ocultar");
    }
    mensajeMostrado.textContent = textoEncriptado;
    if(document.querySelector("#texto").value == ""){
        imagenAOcultar.classList.remove("ocultar");
        botonCopiar.classList.add("ocultar");
        for(let i=0;i<textosAOcultar.length;i++){
            textosAOcultar[i].classList.remove("ocultar");
        }
    }
});


botonDesencriptar.addEventListener("click",function(){
    let textoADesencriptar = document.querySelector("#texto").value;
    let textoDesencriptado = desencriptarMensaje(textoADesencriptar);
    let mensajeMostrado = document.querySelector("#respuesta");
    let imagenAOcultar = document.querySelector("#imagen");
    let textosAOcultar = document.querySelectorAll(".mensaje");
    imagenAOcultar.classList.add("ocultar");
    for(let i=0;i<textosAOcultar.length;i++){
        textosAOcultar[i].classList.add("ocultar");
    }
    mensajeMostrado.textContent = textoDesencriptado;
    botonCopiar.classList.remove("ocultar");
    if(document.querySelector("#texto").value == ""){
        imagenAOcultar.classList.remove("ocultar");
        botonCopiar.classList.add("ocultar")
        for(let i=0;i<textosAOcultar.length;i++){
            textosAOcultar[i].classList.remove("ocultar");
        }
    }
});

botonCopiar.addEventListener("click",function(event){
    event.preventDefault();
    let info = document.createElement("textarea");
    info.value = mensajeMostrado.textContent;
     
    navigator.clipboard.writeText(info.value);

        
});


function encriptar (texto){
    let mensajeEncriptado = "";
    for(let i=0;i<texto.length;i++){
        
        if(texto[i] == "e"){
            mensajeEncriptado += "enter";
            
        } else if(texto[i] == "i"){
            mensajeEncriptado += "imes";
            
        } else if(texto[i] == "a"){
            mensajeEncriptado += "ai";
            
        }else if(texto[i] == "o"){
            mensajeEncriptado += "ober";
            
        }else if(texto[i] == "u"){
            mensajeEncriptado += "ufat";
            
        }else{
            mensajeEncriptado += texto[i];
        }
        
    }
    
    return mensajeEncriptado;
}

function desencriptarMensaje(texto){
    let respuesta = texto.replace("enter","e");
    while(respuesta.includes("enter")){
        respuesta = respuesta.replace("enter","e");
    }
    while(respuesta.includes("imes")){
        respuesta = respuesta.replace("imes","i");
    }
    while(respuesta.includes("ai")){
        respuesta = respuesta.replace("ai","a");
    }
    while(respuesta.includes("ober")){
        respuesta = respuesta.replace("ober","o");
    }
    while(respuesta.includes("ufat")){
        respuesta = respuesta.replace("ufat","u");
    }


    return respuesta;
}   

