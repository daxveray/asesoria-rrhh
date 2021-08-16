alert ("Te invitamos a dejar tu consulta en el formulario")

var nombre=document.getElementById("firstName");
var apellido=document.getElementById("lastName");
var correo=document.getElementById("email");
var consulta=document.getElementById("address");
var error=document.getElementById("error");
error.style.color="red";

function enviarFormulario(){
	console.log("Consulta enviada");

	var mensajesError={};

	if (nombre.value === null || nombre.value ===""){ 
	mensajesError.push("ingresa tu nombre");                       


	}
	if (apellido.value === null || apellido.value ===""){ 
	mensajesError.push("ingresa tu apellido");                       


	}

}
	if (correo.value === null || apellido.value ===""){ 
	mensajesError.push("ingresa tu apellido");                       


	}

	
	if (consulta.value === null || apellido.value ===""){ 
	mensajesError.push("ingresa tu apellido");                       


	}

	error.innerHTML=mensajesError.join(",");

return false;
}



