
_init();

function _init() {
    cargarJornadas();
    guardarNuevoCurso();
    listarCursos();
    actualizarCursos();
}

function cargarJornadas() {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'jornada/listar',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                let option = '<option value=0>Seleccione una Jornada</option>';

                response.jornada.forEach(element => {
                    option += `<option value=${element.id}>${element.jornada}</option>`;
                });
                $('#select-jornada').html(option);
                $('#upd-jornada').html(option);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay jornadas disponibles',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                })
            }
        },
        error: function (jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete: function (jqXHR, status) {
            // console.log('Petición realizada');
        }

    });

}

function guardarNuevoCurso() {
    $('#form-nuevo-curso').submit(function (e) {
        e.preventDefault();

        let nombre_curso = $('#form-curso').val();
        let jornada_id = $('#select-jornada option:selected').val();
       
        if (nombre_curso.length == 0) {
            Swal.fire({
                title: 'Cursos',
                text: 'Debe ingresar un Curso',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else if (jornada_id == 0) {
            Swal.fire({
                title: 'Cursos',
                text: 'Debe seleccionar una Jornada',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else {
            let json = {
                curso: {
                    jornada_id,
                    nombre_curso,
                }
            };
            guardandoCurso(json);
        }
    });
}

function guardandoCurso(json) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'curso/save',
        // especifica si será una petición POST o GET
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                Swal.fire({
                    title: 'Cursos',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                $('#form-nuevo-curso')[0].reset();
                listarCursos();
            } else {
                Swal.fire({
                    title: 'Cursos',
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

function listarCursos(){
    tabla = $('#tabla-cursos').DataTable({
        "lengthMenu": [ 5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
            {
                url:  urlServidor + 'curso/datatable',
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

function editarCurso(id){
    $('#actualizarCurso').modal('show');
    cargarCursos(id);
}

function cargarCursos(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'curso/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#curso-id').val(response.curso.id);
                $('#upd-form-curso').val(response.curso.nombre_curso);
                $('#upd-jornada').val(response.curso.jornada.id);
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

function eliminarCurso(id){    
    Swal.fire({
        title: '¿Estás seguro de eliminar el Curso?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
            let json = {curso: { id }};

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'curso/eliminar/'+id,
                // especifica si será una petición POST o GET
                type : 'POST',
                // el tipo de información que se espera de respuesta
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        Swal.fire({
                            title:'Cursos',
                            text:response.mensaje,
                            icon: 'success',
                            confirmButtonColor: '#004a43',
                        });
                        listarCursos(); 
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

function actualizarCursos(){
    $('#btn-update-curso').click(function(){
        let id = $('#curso-id').val();
        let nombre_curso = $('#upd-form-curso').val();
        let jornada_id = $('#upd-jornada option:selected').val();
        
            let json = {
                curso: {
                    id:id,
                    jornada_id: jornada_id,
                    nombre_curso: nombre_curso,
                }
            };

            $.ajax({
                // la URL para la petición
                url : urlServidor + 'curso/editar',
                type : 'POST',
                data: {data: JSON.stringify(json)},
                dataType : 'json',
                success : function(response){
                    if(response.status){
                        Swal.fire({
                             title: 'Cursos',
                             text: response.mensaje,
                             icon: 'success',
                             confirmButtonText: 'Ok',
                             confirmButtonColor: '#004a43' 
                        })
                        $('#actualizarCurso').modal('hide');
                        listarCursos();
                    }else{
                        Swal.fire({
                            title: 'Cursos',
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