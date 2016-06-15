$(document).ready(function() {
	console.log("hola");
});

//Ventana de chats
function add() {
   var li = document.createElement('li');
   li.className = 'conver';
   var msn = document.getElementById('chatEntrada').value;
   li.innerHTML = '<p id="gian">' + "Gian" + '</p>' + msn + " " + '<p id="hr1">'+moment().format("HH:mm")+'</p>';
   document.getElementById('conversaciones').appendChild(li);
}

$('#send').click(function(){
   var msj = $('#chatEntrada').val();
   $('#chatEntrada').val('');
});
//Enviar con ENTER
$('#chatEntrada').keyup(function(e){
   if (e.which == 13) {   
   var msj = $('#chatEntrada').val();
   console.log(msj);
   add (msj);
   $('#chatEntrada').val('');
   }
}); 

/*Buscador*/
function doSearch(){
	var tableReg = document.getElementById('nombres');
	var searchText = document.getElementById('searchTerm').value.toLowerCase();
	var cellsOfRow="";
	var found=false;
	var compareWith="";
 
	for (var i = 1; i < tableReg.rows.length; i++){
		cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
		found = false;

		for (var j = 0; j < cellsOfRow.length && !found; j++){
			compareWith = cellsOfRow[j].innerHTML.toLowerCase();
			
			if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)){
				found = true;
			}
		}
		if(found){
			tableReg.rows[i].style.display = '';
		} else {
			
			tableReg.rows[i].style.display = 'none';
		}
	}
}



