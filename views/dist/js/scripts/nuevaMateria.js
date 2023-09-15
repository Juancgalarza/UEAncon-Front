
_init();

function _init() {
    guardarNuevaMateria();
    listarMaterias();
    actualizarMaterias();
}

function guardarNuevaMateria() {
    $('#form-nuevo-materia').submit(function (e) {
        e.preventDefault();

        let nombre_materia = $('#form-materia').val();

        if (nombre_materia.length == 0) {
            Swal.fire({
                title: 'Materias',
                text: 'Debe ingresar una Materia',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else {
            let json = {
                materia: {
                    nombre_materia
                }
            };
            guardandoMateria(json);
        }
    });
}

function guardandoMateria(json) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'materia/save',
        // especifica si será una petición POST o GET
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                Swal.fire({
                    title: 'Materias',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                $('#form-nuevo-materia')[0].reset();
                listarMaterias();
            } else {
                Swal.fire({
                    title: 'Materias',
                    text: response.mensaje,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
            }
        },
        error: function (jqXHR, status, error) {
            console.log('Existió un problema, reviselo..!');
        },
        complete: function (jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function listarMaterias(){
    tabla = $('#tabla-materias').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'materia/datatable',
                type : "get",
                dataType : "json",						
                error: function(e){
                    console.log(e.responseText);	
                }
            },
        destroy: true,
        "iDisplayLength": 5,//Paginación
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

function eliminarMateria(id){    
    Swal.fire({
        title: '¿Estás seguro de eliminar la Materia?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {materia: { id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'materia/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Materias',
                            text:response.mensaje,
                            icon: 'success',
                            confirmButtonColor: '#004a43',
                        });
                        listarMaterias(); 
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

function editarMateria(id){
    $('#actualizarMateria').modal('show');
    cargarMaterias(id);
}

function cargarMaterias(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'materia/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#materia-id').val(response.materia.id);
                $('#upd-form-materia').val(response.materia.nombre_materia);
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

function actualizarMaterias(){
    $('#btn-update-materia').click(function(){
        let id = $('#materia-id').val();
        let nombre_materia = $('#upd-form-materia').val();
        
            let json = {
                materia: {
                    id:id,
                    nombre_materia: nombre_materia,
                }
            };

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'materia/editar',
                type : 'POST',
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response){
                    if(response.status){
                        Swal.fire({
                             title: 'Materias',
                             text: response.mensaje,
                             icon: 'success',
                             confirmButtonText: 'Ok',
                             confirmButtonColor: '#004a43' 
                        })

                        $('#actualizarMateria').modal('hide');
                        listarMaterias();
                    }else{
                        Swal.fire({
                            title: 'Materias',
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
        
    })
}