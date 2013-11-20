
                /* $(function() {}); ia locul body.onload pentru o separare mai buna */		
$(function(){
    $('td').click(function() {
	$(this).hide();       
    });
});
$(function() {
        $('#formular').submit(function(e) {
        	e.preventDefault();
        	var Nume = '<td>' + $('#Nume').val() + '</td>';
            var Prenume = '<td>' + $('#Prenume').val() + '</td>';
            var Varsta = '<td>' + $('#Varsta').val() + '</td>';
            var Departament = '<td>' + $('#Departament').val() + '</td>';
            var Data_Angajare= '<td>' + $('#Data').val() + '</td>';
            var Pozitie = '<td>' + $('#Pozitie').val() + '</td>';

            $('.main-table tr:last').after('<tr>' + Nume + Prenume + Varsta + Departament + Data_Angajare + Pozitie + '</tr>');
     });      
});  
