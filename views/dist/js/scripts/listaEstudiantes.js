var tabla;

_init();

function _init() {
    iniciar_tabla();
    cargarSexos();
    cargarCursos();
    cargarParalelos();
    actualizarEstuidante();
}

function iniciar_tabla() {
    tabla = $('#tabla-estudiantes').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'estudiantes/datatable',
            type: "get",
            dataType: "json",
            error: function (e) {
                console.log(e.responseText);
            }
        },
        destroy: true,
        "iDisplayLength": 10,//Paginación
        "language": {

            "sProcessing": "Procesando...",

            "sLengthMenu": "Mostrar _MENU_ registros",

            "sZeroRecords": "No se encontraron resultados",

            "sEmptyTable": "Ningún dato disponible en esta tabla",

            "sInfo": "Mostrando un total de _TOTAL_ registros",

            "sInfoEmpty": "Mostrando un total de 0 registros",

            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",

            "sInfoPostFix": "",

            "sSearch": "Buscar:",

            "sUrl": "",

            "sInfoThousands": ",",

            "sLoadingRecords": "Cargando...",

            "oPaginate": {

                "sFirst": "Primero",

                "sLast": "Último",

                "sNext": "Siguiente",

                "sPrevious": "Anterior"

            },

            "oAria": {

                "sSortAscending": ": Activar para ordenar la columna de manera ascendente",

                "sSortDescending": ": Activar para ordenar la columna de manera descendente"

            }

        }//cerrando language
    });
}

function cargarSexos() {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'sexo/listar',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                let option = '<option value=0>Seleccione el Sexo</option>';

                response.sexo.forEach(element => {
                    option += `<option value=${element.id}>${element.sexo}</option>`;
                });
                $('#upd-sexo').html(option);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay sexos disponibles',
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

function cargarCursos() {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'curso/listar',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                let option = '<option value=0>Seleccione el Curso</option>';

                response.curso.forEach(element => {
                    option += `<option value=${element.id}>${element.nombre_curso}</option>`;
                });
                $('#upd-curso').html(option);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay cursos disponibles',
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

function cargarParalelos() {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'paralelo/listar',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                let option = '<option value=0>Seleccione el Paralelo</option>';

                response.paralelo.forEach(element => {
                    option += `<option value=${element.id}>${element.tipo}</option>`;
                });
                $('#upd-paralelo').html(option);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay paralelos disponibles',
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

function actualizarEstuidante() {
    $('#btn-update').click(function () {
        let id = $('#estudiante-id').val();
        let persona_id = $('#upd-persona-id').val();
        let sexo_id = $('#upd-sexo option:selected').val();
        let nombres = $('#upd-nombres').val();
        let apellidos = $('#upd-apellidos').val();
        let celular = $('#upd-celular').val();
        let direccion = $('#upd-direccion').val();
        let curso_id= $('#upd-curso option:selected').val();
        let paralelo_id= $('#upd-paralelo option:selected').val();

        let json = {
            estudiante: {
                id: id,
                persona_id: persona_id,
                curso_id:curso_id,
                paralelo_id: paralelo_id,
                sexo_id: sexo_id,
                nombres: nombres,
                apellidos: apellidos,
                celular: celular,
                direccion: direccion
            }
        };

        $.ajax({
            // la URL para la petición
            url: urlServidor + 'estudiantes/editar',
            type: 'POST',
            data: { data: JSON.stringify(json) },
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if (response.status) {
                    Swal.fire({
                        title: 'Estudiantes',
                        text: response.mensaje,
                        icon: 'success',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43'
                    })
                    $('#actualizar_estudiante').modal('hide');
                    iniciar_tabla();
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: response.mensaje,
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
    })
}

function eliminarEstudiante(id) {
    Swal.fire({
        title: '¿Estás seguro de eliminar el Estudiante?',
        text: "No se podra recuperar el registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#004a43',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let json = { estudiante: { id } };

            $.ajax({
                // la URL para la petición
                url: urlServidor + 'estudiantes/eliminar/' + id,
                // especifica si será una petición POST o GET
                type: 'POST',
                // el tipo de información que se espera de respuesta
                data: { data: JSON.stringify(json) },
                dataType: 'json',
                success: function (response) {
                    if (response.status) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Estudiantes',
                            text: 'Se ha borrado el Estudiante correctamente',
                            confirmButtonColor: '#004a43',
                        });
                        iniciar_tabla();
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
    })
}

function editarEstudiante(id) {
    $('#actualizar_estudiante').modal('show');
    cargarEstudiante(id);
}

function cargarEstudiante(id) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'estudiantes/listar/' + id,
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                $('#estudiante-id').val(response.estudiante.id);
                $('#upd-persona-id').val(response.estudiante.persona.id);
                $('#upd-cedula').val(response.estudiante.persona.cedula);
                $('#upd-nombres').val(response.estudiante.persona.nombres);
                $('#upd-apellidos').val(response.estudiante.persona.apellidos);
                $('#upd-celular').val(response.estudiante.persona.celular);
                $('#upd-sexo').val(response.estudiante.persona.sexo.id);
                $('#upd-curso').val(response.estudiante.curso.id);
                $('#upd-paralelo').val(response.estudiante.paralelo.id);
                $('#upd-direccion').val(response.estudiante.persona.direccion);
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