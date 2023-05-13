/** Definicion de variables */
var texto = document.getElementById("encriptador");
const btn_encriptar = document.getElementById("encriptar");
const btn_desencriptar = document.getElementById("desencriptar");
const mensaje = document.getElementById("mensaje");
const frase = document.getElementById("frase");
const muneco = document.getElementById("muneco");
var encriptado="";

/** Declaracion de metodos listener */
btn_encriptar.addEventListener("click",encriptar);
btn_desencriptar.addEventListener("click",desencriptar);


function encriptar(e){
    e.preventDefault();
    if(texto.value!=""){
        encriptado=encriptador(texto.value.replace(/(\r\n|\n|\r)/gm, ""));
        mensaje.innerText=encriptado;
        mensaje.style.fontSize="20px";
        frase.innerText="El texto fue encriptado...";
        muneco.style.display="none";
    }else{
        alert("No ingresaste nada para encriptar");
    }
    
}

function desencriptar(e){
    e.preventDefault();
    if(texto.value!=""){
        encriptado=desencriptador(texto.value.replace(/(\r\n|\n|\r)/gm, ""));
        mensaje.innerText=encriptado;
        mensaje.style.fontSize="20px";
        frase.innerText="El texto fue desencriptado...";
        muneco.style.display="none";
    }else{
        alert("No ingresaste nada para encriptar");
    }
    
}

function encriptador(texto){
    texto=texto.replaceAll("e","enter");
    texto=texto.replaceAll("i","imes");
    texto=texto.replaceAll("a","ai");
    texto=texto.replaceAll("o","ober");
    texto=texto.replaceAll("u","ufat");
    return texto;   
}

function desencriptador(texto){
    texto=texto.replaceAll("enter","e");
    texto=texto.replaceAll("imes","i");
    texto=texto.replaceAll("ai","a");
    texto=texto.replaceAll("ober","o");
    texto=texto.replaceAll("ufat","u");
    return texto;   
}

/**La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */