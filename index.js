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


});