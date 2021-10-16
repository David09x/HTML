// .....................................................................
// ReglasREST.js
// .....................................................................

var fs = require('fs')

module.exports.cargar = function( servidorExpress, laLogica ) {
// .......................................................
// .......................................................
// GET /persona/<dni>
// .......................................................
servidorExpress.get(
  "/medida/:hora",
async function( peticion, respuesta ){
console.log( " * GET /medida " )
// averiguo el dni
var hora = peticion.params.hora
// llamo a la función adecuada de la lógica
var res = await laLogica.buscarMedidaConHora( hora )
// si el array de resultados no tiene una casilla ...
if( res.length != 1 ) {
// 404: not found
respuesta.status(404).send( "no encontré hora: " + hora )
return
}
// todo ok
respuesta.send(res[0])
}) // get /hora

servidorExpress.get(
  "/medida",
async function( peticion, respuesta ){
console.log( " * GET /medida " )

// llamo a la función adecuada de la lógica
var res = await laLogica.obtenerMedidas()

console.log(res)
// si el array de resultados no tiene una casilla ...
if( res.length != 1 ) {
// 404: not found
respuesta.status(404).send( "no encontré las medidas: " )
return
}
// todo ok
respuesta.send(res)
}) // get /hora

} // ()
// .....................................................................
// .....................................................................
