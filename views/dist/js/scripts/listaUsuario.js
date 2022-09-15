var tabla;

$(function(){

    _init();

    function _init(){
        //iniciarCombos();
        iniciar_tabla();
        cargarCargos();
        actualizar_usuario();
        
    }

    function iniciar_tabla(){
        tabla = $('#tabla-usuario').DataTable({
            "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
            "responsive": true, "lengthChange": false, "autoWidth": false,
            "aProcessing": true,//Activamos el procesamiento del datatables
            "aServerSide": true,//Paginación y filtrado realizados por el servidor
            "ajax":
                {
                    url:  urlServidor + 'usuario/datatable',
                    type : "get",
                    dataType : "json",						
                    error: function(e){
                        console.log(e.responseText);	
                    }
                },
            destroy: true,
            "iDisplayLength": 10,//Paginación
            "language": {
 
			    "sProcessing":     "Procesando...",
			 
			    "sLengthMenu":     "Mostrar _MENU_ registros",
			 
			    "sZeroRecords":    "No se encontraron resultados",
			 
			    "sEmptyTable":     "Ningún dato disponible en esta tabla",
			 
			    "sInfo":           "Mostrando un total de _TOTAL_ registros",
			 
			    "sInfoEmpty":      "Mostrando un total de 0 registros",
			 
			    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
			 
			    "sInfoPostFix":    "",
			 
			    "sSearch":         "Buscar:",
			 
			    "sUrl":            "",
			 
			    "sInfoThousands":  ",",
			 
			    "sLoadingRecords": "Cargando...",
			 
			    "oPaginate": {
			 
			        "sFirst":    "Primero",
			 
			        "sLast":     "Último",
			 
			        "sNext":     "Siguiente",
			 
			        "sPrevious": "Anterior"
			 
			    },
			 
			    "oAria": {
			 
			        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			 
			        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
			 
			    }

			   }//cerrando language
        });
    }

    function actualizar_usuario(){
        $('#btn-update').click(function(){
            let id = $('#usuario-id').val();
            let nombres = $('#upd-nombres').val();
            let apellidos = $('#upd-apellidos').val();
            let persona_id = $('#upd-persona-id').val();
            let rol_id = $('#upd-cargo option:selected').val();
            let usuario = $('#upda-usuario').val();
            
            if(nombres.length == 0){
                Swal.fire(
                    'Usuario',
                    'Complete el campo nombres',
                    'warning'
                  )
            }else
            if(apellidos.length == 0){
                Swal.fire(
                    'Usuario',
                    'Complete el campo apellidos',
                    'warning'
                  )
            }else
            if(usuario.length == 0){
                Swal.fire(
                    'Usuario',
                    'Complete el campo usuario',
                    'warning'
                  )
            }else{
                let json = {
                    usuario: {
                        id:id,
                        persona_id: persona_id,
                        rol_id: rol_id,
                        usuario: usuario,
                        nombres: nombres,
                        apellidos: apellidos,
                    }
                };

                $.ajax({
                    // la URL para la petición
                    url : urlServidor + 'usuario/editar',
                    type : 'POST',
                    data: {data: JSON.stringify(json)},
                    dataType : 'json',
                    success : function(response){
                        console.log(response);
                        if(response.status){
                            Swal.fire({
                                 title: 'Listo !',
                                 text: response.mensaje,
                                 icon: 'success',
                                 confirmButtonText: 'Ok',
                                 confirmButtonColor: '#004a43' 
                            })

                            $('#actualizar_usuario').modal('hide');
                            iniciar_tabla();
                        }else{
                            Swal.fire({
                                title: 'Error!',
                                text: response.mensaje,
                                icon: 'error',
                                confirmButtonText: 'Ok',
                                confirmButtonColor: '#004a43' 
                           })
                        }
                    },
                    error : function(jqXHR, status, error) {
                     console.log('Disculpe, existió un problema');
                 },
                 complete : function(jqXHR, status) {
                     // console.log('Petición realizada');
                 } 
                 });
            }
        })
    }

    function cargarCargos(){
        $.ajax({
           // la URL para la petición
           url : urlServidor + 'rol/listar',
           // especifica si será una petición POST o GET
           type : 'GET',
           // el tipo de información que se espera de respuesta
           dataType : 'json',
           success : function(response){
               //console.log(response);
               if(response.status){
                   let option = '<option value=0>Seleccione el Rol</option>';
    
                   response.cargo.forEach(element => {
                        option += `<option value=${element.id}>${element.cargo}</option>`;                                            
                   });
                   $('#upd-cargo').html(option);
               }else{
                   Swal.fire({
                        title: 'Error!',
                        text: 'No hay cargos disponibles',
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43' 
                   })
               }
           },
           error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        } 
        });
    }
});

function editar_usuario(id){
    //alert(id);
    $('#actualizar_usuario').modal('show');
    cargar_usuario(id);
}

function eliminar(id){    
    //alert(id);
    Swal.fire({
        title: '¿Estás seguro de eliminar el usuario?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {usuario: { id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'usuario/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Usuario!',
                            text:'Se ha borrado el usuario correctamente',
                            confirmButtonColor: '#004a43',
                        });
                          iniciar_tabla2(); 
                    }
                },
                error : function(jqXHR, status, error) {
                    console.log('Disculpe, existió un problema');
                },
                complete : function(jqXHR, status) {
                    // console.log('Petición realizada');
                }
            });
        }
    })
}

function cargar_usuario(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'usuario/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
       
            if(response.status){
                $('#usuario-id').val(response.usuario.id);
                $('#upd-persona-id').val(response.persona.id);
                $('#upd-cedula').val(response.persona.cedula);
                $('#upd-nombres').val(response.persona.nombres);
                $('#upd-apellidos').val(response.persona.apellidos);
                $('#upda-usuario').val(response.usuario.usuario);     
                $('#upd-cargo').val(response.usuario.rol_id);

                // document.getElementById('upd-cargo').value = response.usuario.rol_id
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function iniciar_tabla2(){
    tabla = $('#tabla-usuario').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'usuario/datatable',
                type : "get",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
        destroy: true,
        "iDisplayLength": 10,//Paginación
        "language": {

            "sProcessing":     "Procesando...",
         
            "sLengthMenu":     "Mostrar _MENU_ registros",
         
            "sZeroRecords":    "No se encontraron resultados",
         
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
         
            "sInfo":           "Mostrando un total de _TOTAL_ registros",
         
            "sInfoEmpty":      "Mostrando un total de 0 registros",
         
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
         
            "sInfoPostFix":    "",
         
            "sSearch":         "Buscar:",
         
            "sUrl":            "",
         
            "sInfoThousands":  ",",
         
            "sLoadingRecords": "Cargando...",
         
            "oPaginate": {
         
                "sFirst":    "Primero",
         
                "sLast":     "Último",
         
                "sNext":     "Siguiente",
         
                "sPrevious": "Anterior"
         
            },
         
            "oAria": {
         
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
         
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
         
            }

           }//cerrando language
    });
}


