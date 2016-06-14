//Funcion que envia a la ventana de chat el mensaje del usuario//
function add() {
   var li = document.createElement('li');
   li.className = 'conver';
   var msn = document.getElementById('intro').value;
   li.innerHTML = msn + " " + '<span id="hr1">'+moment().format("HH:mm")+'</span>';
   document.getElementById('mensajitos').appendChild(li);
}
//*Limpiar el imput #intro cuando se envia el mensaje//
$('#send').click(function(){
   var texto = $('#intro').val();
   $('#intro').val('');
});
//Enviar mensaje cuando se presiona la tecla ENTER (#13)
$('#intro').keypress(function(e){
   if (e.which == 13) {   // 13 es el codigo de la tecla ENTER
   var texto = $('#intro').val();
   console.log(texto);
   add (texto);
   $('#intro').val('');
   }
});


/*Buscador*/


function doSearch(){
	var tableReg = document.getElementById('datos');
	var searchText = document.getElementById('searchTerm').value.toLowerCase();
	var cellsOfRow="";
	var found=false;
	var compareWith="";
 
	// Recorremos todas las filas con contenido de la tabla
	for (var i = 1; i < tableReg.rows.length; i++){
		cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
		found = false;
		// Recorremos todas las celdas
		for (var j = 0; j < cellsOfRow.length && !found; j++){
			compareWith = cellsOfRow[j].innerHTML.toLowerCase();
			// Buscamos el texto en el contenido de la celda
			if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)){
				found = true;
			}
		}
		if(found){
			tableReg.rows[i].style.display = '';
		} else {
			// si no ha encontrado ninguna coincidencia, esconde la
			// fila de la tabla
			tableReg.rows[i].style.display = 'none';
		}
	}
}


