/*----------------------------------------
			Variables globales
-----------------------------------------*/
var texCapas = document.getElementById("texto_capas");
var texAncho = document.getElementById("texto_ancho");
var texAlto = document.getElementById("texto_alto");
var textCantidad = document.getElementById("texto_cantidad");
var botCalcular = document.getElementById("boton_calcular");

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

	console.log(area);
}