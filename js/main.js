/*----------------------------------------
			Variables globales
-----------------------------------------*/
const valorCm2 = [168,244,300,420];
var texCapas = document.getElementById("texto_capas");
var texAncho = document.getElementById("texto_ancho");
var texAlto = document.getElementById("texto_alto");
var textCantidad = document.getElementById("texto_cantidad");
var botCalcular = document.getElementById("boton_calcular");
var textAreaCal = document.getElementById("respuesta_calcular");

botCalcular.addEventListener("click",calculaclick);

/*----------------------------------------
				Funciones
-----------------------------------------*/
function calculaclick(){
	const divFactor = 100;
	var numCapas = parseInt(texCapas.value);
	var ancho = parseInt(texAncho.value);
	var alto = parseInt(texAlto.value);
	var cantidad = parseInt(textCantidad.value);
	var area = (ancho*alto)/divFactor;
	var areaTotal = area*cantidad;
	var textCalcular = "";
	var valorPanel = [0,0,0,0];

	for (var i = 0; i < valorPanel.length; i++) {
		valorPanel[i] = valorCm2[i]*225;
	}

	console.log("Area unidad: " +  area);
	console.log("Area TOTAL: " + areaTotal);

	textAreaCal.value = "";
		
	if(areaTotal<=225){
		if(numCapas==1){
			textCalcular = precioPanel(numCapas, valorPanel[0], valorPanel[1]);
		}
		else if(numCapas==2){
			textCalcular = precioPanel(numCapas, valorPanel[2], valorPanel[3]);
		}
	}
	else if(areaTotal>225){
		textCalcular = calculaPrecio(numCapas,area,cantidad);
	}
	else {
		textCalcular = "Por favor llene todos los campos para poder calcular";
	}
	
	textAreaCal.value = textCalcular;
	textAreaCal.innerText=textCalcular;
}
//-------------------------------------------------------------------------

function precioPanel(_numCapas, _valorSim, _valorPro) {
	var texto = "Nuestro pedido minimo es un panel de prototipo de 15cmx15cm,";
	if(_numCapas>1){
		texto += " para " + _numCapas + " capas de cobre tiene un valor de:\n";
	}
	else{
		texto += " para " + _numCapas + " capa de cobre tiene un valor de:\n";
	}
	
	texto += "\n1. " + _valorSim + " pesos + IVA en acabado simple";
	texto += "\n2. " + _valorPro + " pesos + IVA en acabado profesional";

	return texto;
}
//-------------------------------------------------------------------------
function calculaPrecio(_numCapas, _area, _cantidad) {
	var precioUnidad = [0,0];
	var precioCm2 = [0,0];
	
	if(_numCapas==1){
		if(_cantidad>0&&_cantidad<20){
			precioCm2[0] = parseInt(valorCm2[0]/1.05);
			precioCm2[1] = parseInt(valorCm2[1]/1.05);
			precioUnidad[0] = _area*precioCm2[0];
			precioUnidad[1] = _area*precioCm2[1];
		}
		else if(_cantidad>19&&_cantidad<51){
			precioCm2[0] = parseInt(valorCm2[0]/1.15);
			precioCm2[1] = parseInt(valorCm2[1]/1.15);
			precioUnidad[0] = _area*precioCm2[0];
			precioUnidad[1] = _area*precioCm2[1];
		}
	}
	else if(_numCapas==2){
		if(_cantidad>0&&_cantidad<20){
			precioCm2[0] = parseInt(valorCm2[2]/1.05);
			precioCm2[1] = parseInt(valorCm2[3]/1.05);
			precioUnidad[0] = _area*precioCm2[0];
			precioUnidad[1] = _area*precioCm2[1];
		}
		else if(_cantidad>19&&_cantidad<51){
			precioCm2[0] = parseInt(valorCm2[2]/1.15);
			precioCm2[1] = parseInt(valorCm2[3]/1.15);
			precioUnidad[0] = _area*precioCm2[0];
			precioUnidad[1] = _area*precioCm2[1];
		}
	}

	var texto = _cantidad + " unidades de PCB con " + _numCapas;
	texto += " capas de cobre, tienen un valor unitario de:\n";
	texto += "\n1. " + precioUnidad[0] + " pesos + IVA en acabado simple";
	texto += "\n2. " + precioUnidad[1] + " pesos + IVA en acabado profesional";

	console.log(texto);

	return texto;
}
//-------------------------------------------------------------------------