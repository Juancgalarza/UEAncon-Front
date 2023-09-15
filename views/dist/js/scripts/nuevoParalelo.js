
_init();

function _init() {
    guardarNuevoParalelo();
    listarParalelos();
    actualizarParalelos();
}

function guardarNuevoParalelo() {
    $('#form-nuevo-paralelo').submit(function (e) {
        e.preventDefault();

        let tipo = $('#form-paralelo').val();
        let capacidad = $('#form-capacidad').val();

        if (tipo.length == 0) {
            Swal.fire({
                title: 'Paralelos',
                text: 'Debe ingresar un Paralelo',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else if (capacidad.length == 0) {
            Swal.fire({
                title: 'Paralelos',
                text: 'Debe ingresar una Capacidad',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else {
            let json = {
                paralelo: {
                    tipo,
                    capacidad
                }
            };
            guardandoParalelo(json);
        }
    });
}

function guardandoParalelo(json) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'paralelo/save',
        // especifica si será una petición POST o GET
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                Swal.fire({
                    title: 'Paralelos',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                $('#form-nuevo-paralelo')[0].reset();
                listarParalelos();
            } else {
                Swal.fire({
                    title: 'Paralelos',
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

function listarParalelos(){
    tabla = $('#tabla-paralelos').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'paralelo/datatable',
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

function editarParalelo(id){
    $('#actualizarParalelo').modal('show');
    cargarParalelos(id);
}

function cargarParalelos(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'paralelo/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#paralelo-id').val(response.paralelo.id);
                $('#upd-form-paralelo').val(response.paralelo.tipo);
                $('#upd-form-capacidad').val(response.paralelo.capacidad);
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

function eliminarParalelo(id){    
    Swal.fire({
        title: '¿Estás seguro de eliminar el Paralelo?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {paralelo: { id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'paralelo/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Paralelos',
                            text:response.mensaje,
                            icon: 'success',
                            confirmButtonColor: '#004a43',
                        });
                        listarParalelos(); 
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

function actualizarParalelos(){
    $('#btn-update-paralelo').click(function(){
        let id = $('#paralelo-id').val();
        let tipo = $('#upd-form-paralelo').val();
        let capacidad = $('#upd-form-capacidad').val();
        
            let json = {
                paralelo: {
                    id:id,
                    tipo: tipo,
                    capacidad: capacidad
                }
            };

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'paralelo/editar',
                type : 'POST',
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response){
                    if(response.status){
                        Swal.fire({
                             title: 'Paralelos',
                             text: response.mensaje,
                             icon: 'success',
                             confirmButtonText: 'Ok',
                             confirmButtonColor: '#004a43' 
                        })

                        $('#actualizarParalelo').modal('hide');
                        listarParalelos();
                    }else{
                        Swal.fire({
                            title: 'Paralelos',
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

