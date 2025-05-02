function leer(){
	//Referencia por pseudoclase
	var nombre = document.forms["formulario"].elements[0].value;
	//Referencia por Id
	var clave = document.getElementById("pass").value;
	//Referencia por TagName
	var car = document.getElementsByTagName("select")[0].value;
	//Referencia por Name
	var gen = document.getElementsByName("genero");
	for (i = 0; i < gen.length; i++){
		if (gen[i].checked){
			g = gen[i].value;
		}
	}

	//Referencia por Id
	var p = document.getElementById("privacidad").checked;

	//Llamada
	document.getElementById("datos").innerHTML = 
	"\<br>Nombre de usuario: " + nombre + 
	"\<br>Contraseña: " + clave + 
	"\<br>Carrera: " + car +
	"\<br>Género: " + g +
	"\<br>Aceptó el acuerdo: " + p;
}