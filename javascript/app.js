const inputOne = document.querySelector(".input1");
const inputTwo = document.querySelector(".input2");
const textimagen = document.querySelector(".textimagen");
const img1 = document.querySelector(".img1");

const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");

const regex = /^[A-Z]+$/;




//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//function validaTutti(campoTexto) {
//  var regex = /^[A-Z]+$/;
//  return regex.test(campoTexto);
//} // TRUE o FALSE














function btn_encriptar(){
  if(inputOne.value.match(regex)){

    const textoencriptado = encriptar(inputOne.value);
    inputTwo.value = textoencriptado;
    inputOne.value = "";
    img1.style.display = "none";
    textimagen.style.display = "none";
    return true;

  }else{
    alert("Sólo se aceptan letras MAYÚSCULAS, sin acento ni espacios.");
    return false;
  }



 // if (inputOne.value === "") {     //ESPACIO VACÍO
 //   alert("Para encriptar, debes escribir algo.");
 //   inputOne.focus();    //foco ahí
//    return false;        // corta y sale
 // }


//    const textoencriptado = encriptar(inputOne.value);
//    inputTwo.value = textoencriptado;
//    inputOne.value = "";
//    img1.style.display = "none";
//    textimagen.style.display = "none";
}


function encriptar(resultadoEncriptar){
    let llaves = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    resultadoEncriptar = resultadoEncriptar.toLowerCase();

    for(let i=0; i<llaves.length; i++){
        if(resultadoEncriptar.includes(llaves[i][0])){
            resultadoEncriptar = resultadoEncriptar.replaceAll(llaves[i][0], llaves[i][1]);
        }    
    }

    return resultadoEncriptar;
}









function btn_desencriptar(){
    const textoencriptado = desencriptar(inputOne.value);
    inputTwo.value = textoencriptado;
    inputOne.value = "";
    img1.style.display = "none";
    textimagen.style.display = "none";
}


function desencriptar(resultadoDesEncriptar){
    let llaves = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    resultadoDesEncriptar = resultadoDesEncriptar.toLowerCase();

    for(let i=0; i<llaves.length; i++){
        if(resultadoDesEncriptar.includes(llaves[i][1])){
            resultadoDesEncriptar = resultadoDesEncriptar.replaceAll(llaves[i][1], llaves[i][0]);
        }    
    }

    return resultadoDesEncriptar;
}



//COPIAR
b3.addEventListener("click", async event => {
    try {
      const text = await navigator.clipboard.writeText(inputTwo.value);
    } catch (error) {
      console.log(`Ocurrió un error: ${error}`);
    }
  });
      

//PEGAR

//b4.addEventListener("click", async event => {
//    try {
//      const text = await navigator.clipboard.readText();
//      inputOne.value = text;
//      inputTwo.value = "";

//      img1.style.display = "block";
//      textimagen.style.display = "block";

//    } catch (error) {
//      console.log(`Ocurrió un error: ${error}`);
//    }
//  });