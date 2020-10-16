document.querySelector(".iconhambg").addEventListener("click", () => document.querySelector(".container").classList.toggle("mostrar"));

var input = document.getElementById('input');
var result = document.getElementById('result');
var tipoEntrada = document.getElementById('tipoEntrada');
var tipoSaida = document.getElementById('tipoSaida');
var VtipoEntrada,VtipoSaida;

input.addEventListener("keyup",resultado);
tipoEntrada.addEventListener("change",resultado);
tipoSaida.addEventListener("change",resultado);

VtipoEntrada = tipoEntrada.value;
VtipoSaida = tipoSaida.value;


function resultado(){

	VtipoEntrada = tipoEntrada.value;
	VtipoSaida = tipoSaida.value;

	if(VtipoEntrada === "cm" && VtipoSaida==="km"){
		result.value = Number(input.value) * 0.00001;
	}else if(VtipoEntrada === "cm" && VtipoSaida==="m"){
		result.value = Number(input.value) * 0.01;
	}else if(VtipoEntrada === "cm" && VtipoSaida==="cm"){
		result.value = input.value
	}

	if(VtipoEntrada === "m" && VtipoSaida==="km"){
		result.value = Number(input.value) * 0.001;
	}else if(VtipoEntrada === "m" && VtipoSaida==="cm"){
		result.value = Number(input.value) * 100;

	}else if(VtipoEntrada === "m" && VtipoSaida==="m"){
		result.value = input.value
	}

	if(VtipoEntrada === "km" && VtipoSaida==="m"){
		result.value = Number(input.value) * 1000;
	}else if(VtipoEntrada === "km" && VtipoSaida==="cm"){
		result.value = Number(input.value) * 100000;
	}else if(VtipoEntrada === "km" && VtipoSaida==="km"){
		result.value = input.value
	}

}
