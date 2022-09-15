var tabla;

_init();

function _init() {
    iniciar_tabla();
    cargarSexos();
    cargarCargos();
    actualizar_usuario();
}

function iniciar_tabla() {
    tabla = $('#tabla-usuario').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'usuario/datatable',
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

function actualizar_usuario() {
    $('#btn-update').click(function () {
        let id = $('#usuario-id').val();
        let persona_id = $('#upd-persona-id').val();
        let sexo_id = $('#upd-sexo option:selected').val();
        let nombres = $('#upd-nombres').val();
        let apellidos = $('#upd-apellidos').val();
        let celular = $('#upd-celular').val();
        let direccion = $('#upd-direccion').val();
        let usuario = $('#upda-usuario').val();
        let correo = $('#upd-correo').val();

        //expresion regular -> validar correo electronico
        var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        if (caract.test(correo) == false) {
            Swal.fire({
                title: 'Usuarios!!',
                text: 'El formato del correo no es Válido',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            })
        } else {
            let json = {
                usuario: {
                    id: id,
                    persona_id: persona_id,
                    usuario: usuario,
                    correo: correo,
                    sexo_id: sexo_id,
                    nombres: nombres,
                    apellidos: apellidos,
                    celular: celular,
                    direccion: direccion
                }
            };

            $.ajax({
                // la URL para la petición
                url: urlServidor + 'usuario/editar',
                type: 'POST',
                data: { data: JSON.stringify(json) },
                dataType: 'json',
                success: function (response) {
                    console.log(response);
                    if (response.status) {
                        Swal.fire({
                            title: 'Listo !',
                            text: response.mensaje,
                            icon: 'success',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#004a43'
                        })

                        $('#actualizar_usuario').modal('hide');
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
        }
    })
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

function cargarCargos() {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'rol/listar',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                let option = '<option value=0>Seleccione el Rol</option>';

                response.cargo.forEach(element => {
                    option += `<option value=${element.id}>${element.cargo}</option>`;
                });
                $('#upd-cargo').html(option);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay cargos disponibles',
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

function editar_usuario(id) {
    $('#actualizar_usuario').modal('show');
    cargar_usuario(id);
}

function eliminar(id) {
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
            let json = { usuario: { id } };

            $.ajax({
                // la URL para la petición
                url: urlServidor + 'usuario/eliminar/' + id,
                // especifica si será una petición POST o GET
                type: 'POST',
                // el tipo de información que se espera de respuesta
                data: { data: JSON.stringify(json) },
                dataType: 'json',
                success: function (response) {
                    if (response.status) {
                        Swal.fire({
                            title: 'Usuario!',
                            text: 'Se ha borrado el usuario correctamente',
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

function cargar_usuario(id) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'usuario/listar/' + id,
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                $('#usuario-id').val(response.usuario.id);
                $('#upd-persona-id').val(response.usuario.persona.id);
                $('#upd-cedula').val(response.usuario.persona.cedula);
                $('#upd-nombres').val(response.usuario.persona.nombres);
                $('#upd-apellidos').val(response.usuario.persona.apellidos);
                $('#upd-celular').val(response.usuario.persona.celular);
                $('#upda-usuario').val(response.usuario.usuario);
                $('#upd-sexo').val(response.usuario.persona.sexo.id);
                $('#upd-cargo').val(response.usuario.rol_id);
                $('#upd-correo').val(response.usuario.correo);
                $('#upd-direccion').val(response.usuario.persona.direccion);
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

