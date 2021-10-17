//--------------------------------------------------------
//LogicaFake.js
//--------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------
const IP_PUERTO="http://localhost:8080"



function obtenerMedicion( hora, cb ){

	console.log(hora  +  "prueba")
	fetch(IP_PUERTO+"/medida/" + hora, {

		method: "get"


	}).then((respuesta)=>{

		//var res = respuesta.body
		//console.log(res + "si")

		if(respuesta.status == 200){
			//console.log(respuesta)
			//document.getElementById("salida").innerHTML = "id: " + respuesta.id + "<br> Nombre: " + respuesta.valores + "<br> Apellidos: " +res.hora

			return respuesta.json()

		}else{

			throw Error(respuesta.statusText)
		}
	}).then (function(datosJSON){

		document.getElementById("salida").innerHTML = "id: " + datosJSON.id + "<br> medidas: " + datosJSON.valores + "<br> hora: " +datosJSON.hora


	}).catch((err)=>{
		console.log(err)
		document.getElementById("salida").innerHTML = "No se ha encontrado la medicion: " + hora;
	})
}

function obtenerValores( cb ){

	console.log(hora  +  "prueba")
	fetch(IP_PUERTO+"/medida" , {

		method: "get"


	}).then((respuesta)=>{

		//var res = respuesta.body
		//console.log(res + "si")

		if(respuesta.status == 200){
			//console.log(respuesta)
			//document.getElementById("salida").innerHTML = "id: " + respuesta.id + "<br> Nombre: " + respuesta.valores + "<br> Apellidos: " +res.hora

			return respuesta.json()

		}else{

			throw Error(respuesta.statusText)
		}
	}).then (function(datosJSON){

		document.getElementById("salida3").innerHTML = "<br> medidas: " + datosJSON.valores


	}).catch((err)=>{
		console.log(err)
		document.getElementById("salida3").innerHTML = "No se ha encontrado la medicion: " + hora;
	})
}
