/*----------------------------------------
			Variables globales
-----------------------------------------*/
const valorPanel = [37800,56250,67500,94500];
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
	var areaTotal = area*cantidad;
	var textCalcular = "";

	console.log(area);
	console.log(areaTotal);

	textAreaCal.value = "";
		
	if(areaTotal<225){
		if(numCapas==1){
			textCalcular = precioPanel(numCapas, valorPanel[0], valorPanel[1]);
			textAreaCal.value = textCalcular;
			textAreaCal.innerText=textCalcular;
		}
		else if(numCapas==2){
			textCalcular = precioPanel(numCapas, valorPanel[2], valorPanel[3]);
			textAreaCal.value = textCalcular;
			textAreaCal.innerText=textCalcular;
		}
	}
	else {
		textCalcular = "Por favor llene todos los campos para poder calcular";
		textAreaCal.value = textCalcular;
		textAreaCal.innerText=textCalcular;
	}
}
//-------------------------------------------------------------------------

function precioPanel(_numCapas, _valorSim,_valorPro) {
	var texto = "Nuestro pedido minimo es un panel de prototipo de 15cmx15cm,";
	if(_numCapas>1){
		texto += " para " + _numCapas + " capas de cobre tiene un valor de: \n";
		texto += "\n1. " + _valorSim + " pesos + IVA en acabado simple";
		texto += "\n2. " + _valorPro	+ " pesos + IVA en acabado profesional";
	}
	else{
		texto += " para " + _numCapas + " capas de cobre tiene un valor de: \n";
		texto += "\n1. " + _valorSim + " pesos + IVA en acabado simple";
		texto += "\n2. " + _valorPro	+ " pesos + IVA en acabado profesional";
	}
		
	console.log(texto);

	return texto;
}