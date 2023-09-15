
_init();

function _init() {
    guardarNuevoPeriodo();
    listarPeriodos();
    actualizarPeriodos();
}

function guardarNuevoPeriodo() {
    $('#form-nuevo-periodo').submit(function (e) {
        e.preventDefault();

        let periodo = $('#form-periodo').val();

        if (periodo.length == 0) {
            Swal.fire({
                title: 'Períodos',
                text: 'Debe ingresar un Período',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else {
            let json = {
                periodo: {
                    periodo
                }
            };
            guardandoPeriodo(json);
        }
    });
}

function guardandoPeriodo(json) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'periodo/save',
        // especifica si será una petición POST o GET
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                Swal.fire({
                    title: 'Períodos',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                $('#form-nuevo-periodo')[0].reset();
                listarPeriodos();
            } else {
                Swal.fire({
                    title: 'Períodos',
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

function listarPeriodos(){
    tabla = $('#tabla-periodos').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'periodo/datatable',
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

function editarPeriodo(id){
    $('#actualizarPeriodo').modal('show');
    cargarPeriodos(id);
}

function cargarPeriodos(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'periodo/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#periodo-id').val(response.periodo.id);
                $('#upd-periodo-form').val(response.periodo.periodo);
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

function eliminarPeriodo(id){    
    Swal.fire({
        title: '¿Estás seguro de eliminar el Período?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {periodo: { id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'periodo/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Períodos',
                            text:response.mensaje,
                            icon: 'success',
                            confirmButtonColor: '#004a43',
                        });
                        listarPeriodos(); 
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

function actualizarPeriodos(){
    $('#btn-update-periodo').click(function(){
        let id = $('#periodo-id').val();
        let periodo = $('#upd-periodo-form').val();
        
            let json = {
                periodo: {
                    id:id,
                    periodo: periodo,
                }
            };

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'periodo/editar',
                type : 'POST',
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response){
                    if(response.status){
                        Swal.fire({
                             title: 'Períodos',
                             text: response.mensaje,
                             icon: 'success',
                             confirmButtonText: 'Ok',
                             confirmButtonColor: '#004a43' 
                        })

                        $('#actualizarPeriodo').modal('hide');
                        listarPeriodos();
                    }else{
                        Swal.fire({
                            title: 'Períodos',
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

function cambiarActivo(id,estado_periodo_id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'periodo/cambioActivo/' + id + '/' + estado_periodo_id, 
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) { 
            if(response.status){
                Swal.fire({
                    title:'Períodos',
                    text:response.mensaje,
                    icon: 'success',
                    confirmButtonColor: '#004a43',
                });
                listarPeriodos();
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
