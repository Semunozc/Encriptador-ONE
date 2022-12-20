window.addEventListener("load", ()=>{

    function eliminar(texto, eliminar, nuevo){
        let txt = texto;
        while(txt.includes(eliminar)){
            txt = txt.replace(eliminar,nuevo);
        }
        return txt;
    }

    function encriptar(texto){

        texto = texto.split("");
        let textoEncriptado = "";

        texto.forEach(letra => {
            switch(letra){
                case "a":
                    textoEncriptado += "ai";
                    break;
                case "e":
                    textoEncriptado += "enter";
                    break;
                case "i":
                    textoEncriptado += "imes";
                    break;
                case "o":
                    textoEncriptado += "ober";
                    break;
                case "u":
                    textoEncriptado += "ufat";
                    break;
                default:
                    textoEncriptado += letra;
                    break;
            }
        });
        
        return textoEncriptado;
    }

    function desencriptar(texto){

        let textoDesencriptado = texto;

        textoDesencriptado = eliminar(textoDesencriptado,"ai","a");
        textoDesencriptado = eliminar(textoDesencriptado,"enter","e");
        textoDesencriptado = eliminar(textoDesencriptado,"imes","i");
        textoDesencriptado = eliminar(textoDesencriptado,"ober","o");
        textoDesencriptado = eliminar(textoDesencriptado,"ufat","u");
        
        return textoDesencriptado;
    }

    function actualizarPantalla(texto){

        if(texto == ""){
            esconder.forEach(elemento =>{
                elemento.classList.remove("hide");
            });
            btnCopiar.classList.add("hide");
        }else{
            esconder.forEach(elemento =>{
                elemento.classList.add("hide");
            });
            btnCopiar.classList.remove("hide");
        }

    }

    const entrada = document.querySelector("#textoEntrada");
    const btnEncriptar = document.querySelector("#btn-Encriptar");
    const btnDesencriptar = document.querySelector("#btn-Desencriptar");
    const btnCopiar = document.querySelector("#btn-Copiar");
    const esconder = document.querySelectorAll(".esconder");
    const resultado = document.querySelector("#resultado");

    btnEncriptar.addEventListener("click",()=>{
        let textoEncriptado = encriptar(entrada.value);
        resultado.innerHTML = textoEncriptado;
        entrada.value = "";

        actualizarPantalla(textoEncriptado);
    });

    btnDesencriptar.addEventListener("click",()=>{
        let textoDesencriptado = desencriptar(entrada.value);
        resultado.innerHTML = textoDesencriptado;
        entrada.value = "";

        actualizarPantalla(textoDesencriptado);
    });

    btnCopiar.addEventListener("click",()=>{
        navigator.clipboard.writeText(resultado.innerHTML);
    });
    
    
});