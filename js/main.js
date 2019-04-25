/*----------------------------------------
			Variables globales
-----------------------------------------*/
const valorPanel = [56250,94500];
var texCapas = document.getElementById("texto_capas");
var texAncho = document.getElementById("texto_ancho");
var texAlto = document.getElementById("texto_alto");
var textCantidad = document.getElementById("texto_cantidad");
var botCalcular = document.getElementById("boton_calcular");
var textAreaCal = document.getElementById("respuesta_calcular");

botCalcular.addEventListener("click",calculaPrecio);

/*----------------------------------------
				Funciones
-----------------------------------------*/
function calculaPrecio(){
	const divFactor = 100;
	var numCapas = parseInt(texCapas.value);
	var ancho = parseInt(texAncho.value);
	var alto = parseInt(texAlto.value);
	var cantidad = parseInt(textCantidad.value);
	var area = (ancho*alto)/divFactor;
	var textCalcular = "";

	console.log(area);

	textAreaCal.innerText = "";
		
	if(area<225&&numCapas==1){
		textCalcular = precioPanel(numCapas,valorPanel[0]);
		textAreaCal.innerText=textCalcular;
	}
	else if(area<225&&numCapas==2){
		textCalcular = precioPanel(numCapas,valorPanel[1]);
		textAreaCal.innerText=textCalcular;
	}
}
//-------------------------------------------------------------------------

function precioPanel(_numCapas, _valor) {
	var texto = "Nuestro pedido minimo es un panel de prototipo de 15cmx15cm,";
	if(_numCapas>1){
		texto += " para " + _numCapas + " capas de cobre tiene un valor de " + _valor;
	}
	else{
		texto += " para " + _numCapas + " capa de cobre tiene un valor de " + _valor;
	}
	
	texto += " pesos + IVA";
	console.log(texto);

	return texto;
}