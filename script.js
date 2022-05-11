//ASOCIACION DE LOS ELEMENTEOS DE HTML CON JAVASCRIPT
var inputTexto = document.querySelector("#textoEncriptar");
var mensaje = document.querySelector("#textArea");
var divOcultar = document.querySelector("#divOcultar");
var botonC = document.querySelector("#botonC");
var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
botonEncriptar.onclick = btnEncriptar ;
botonDesencriptar.onclick = btnDesencriptar; 

//FUNCION QUE SE EJECUTA CUANDO SE PRESIONA EL BOTON DE ENCRIPTAR
function btnEncriptar() {
	if (inputTexto.value !== "")
    {
    const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	divOcultar.style.display = "none";
    mensaje.style.display = "block";
	//botonC.style.display = "block";
	inputTexto.value = "";

    }

    else
    {
        alert("NO PUEDE ESTAR VACIO")
    }
}

//FUNCION QUE ENCRIPTA EL TEXTO
function encriptar(cadena)
{
	let matrizCodigo = [["e","enter"],["i","imes"],["o","ober"],["u","ufat"],["a","ai"]]
	cadena = cadena.toLowerCase();
	for (let i=0; i< matrizCodigo.length; i++)
    {
		if(cadena.includes(matrizCodigo[i][0]))
        {
			cadena = cadena.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}    
	return cadena;
}


//FUNCION QUE SE LLAMA CUANDO SE PRESIONA EL BOTON DE DESENCRIPTAR
function btnDesencriptar() 
{
	if (inputTexto.value !== "")
    {
        const textoDesncriptado = desencriptar(inputTexto.value);
	    mensaje.value = textoDesncriptado;
	    divOcultar.style.display = "none";
        mensaje.style.display = "block";
	    //botonC.style.display = "block";
	    inputTexto.value = "";
    }

    else
    {
        alert("NO PUEDE ESTAR VACIO")
    }
}

//FUNCION QUE DESENCRIPTA EL TEXTO
function desencriptar(stringParaDesencriptar)
{	
    let matrixCodigo = [["ai","a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]]
	stringParaDesencriptar = stringParaDesencriptar.toLowerCase();
	for (let i=0; i< matrixCodigo.length; i++)
    {
		if(stringParaDesencriptar.includes(matrixCodigo[i][0]))
        {
			stringParaDesencriptar = stringParaDesencriptar.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
		}
	}
	return stringParaDesencriptar;
}

//FUNCION PARA COPIAR DESDE EL PORTAPAPELES
function copiar ()
{
	let copyText = document.querySelector("#textoCopy");
	let pasteText = document.querySelector("#entrada");
	copyText.select();
	document.execCommand("copy");
	pasteText.value	= copyText.value;
}



