// .....................................................................
// Logica.js
// .....................................................................
const sqlite3 = require( "sqlite3" )
// .....................................................................
// .....................................................................
module.exports = class Logica {
// .................................................................
// nombreBD: Texto
// -->
// constructor () -->
// .................................................................
constructor( nombreBD, cb ) {
this.laConexion = new sqlite3.Database(
nombreBD,
( err ) => {
if( ! err ) {
this.laConexion.run( "PRAGMA foreign_keys = ON" )
}
cb( err)
})
} // ()
// .................................................................
// nombreTabla:Texto
// -->
// borrarFilasDe() -->
// .................................................................
borrarFilasDe( tabla ) {
return new Promise( (resolver, rechazar) => {
this.laConexion.run(
"delete from " + tabla + ";",
(err)=> ( err ? rechazar(err) : resolver() )
)
})
} // ()
// .................................................................
// borrarFilasDeTodasLasTablas() -->
// .................................................................
async borrarFilasDeTodasLasTablas() {
await this.borrarFilasDe( "Medidas" )
} // ()
// .................................................................
// datos:{id:Texto, valores:Texto: hora:Texto}
// -->
// insertarMedidas() -->
// .................................................................
insertarMedidas( datos ) {
var textoSQL =
"insert into Medidas values( $id, $valores, $hora );"
var valoresParaSQL = { $id: datos.id, $valores: datos.valores,
$hora: datos.hora }
return new Promise( (resolver, rechazar) => {
this.laConexion.run( textoSQL, valoresParaSQL, function( err ) {
( err ? rechazar(err) : resolver() )
})
})
} // ()
// .................................................................
// hora:int
// -->
// buscarMedidasConHoraD() <--
// <--
// {id=texto , valores=real, hora:int}
// .................................................................
buscarMedidaConHora( hora ) {
var textoSQL = "select * from Medidas where hora=$hora";
var valoresParaSQL = { $hora: hora }
return new Promise( (resolver, rechazar) => {
this.laConexion.all( textoSQL, valoresParaSQL,
( err, res ) => {
( err ? rechazar(err) : resolver(res) )
})
})
} // ()

obtenerMedidas() {
var textoSQL = "select  Medidas.valores from Medidas";
return new Promise( (resolver, rechazar) => {
this.laConexion.all( textoSQL,
( err, res ) => {
( err ? rechazar(err) : resolver(res) )
})
})
} // ()


// .................................................................
// cerrar() -->
// .................................................................
cerrar() {
return new Promise( (resolver, rechazar) => {
this.laConexion.close( (err)=>{
( err ? rechazar(err) : resolver() )
})
})
} // ()
} // class
// .....................................................................
// .....................................................................
