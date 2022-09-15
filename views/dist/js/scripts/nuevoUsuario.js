_init();

function _init() {
    cargarSexos();
    cargarCargos();
    cargarCedula();
    cargarCursos();
    cargarParalelos();
    cargarInputsOcultos();
    guardarNuevoUsuario();
}

function cargarCedula() {
    $('#cedula').blur(function () {
        let cedula = $('#cedula').val();

        if (!validarCedula(cedula)) {
            Swal.fire({
                title: 'Usuarios!!',
                text: 'La cédula es incorrecta',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }
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
                $('#select-sexo').html(option);
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
                $('#select-cargo').html(option);
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
                $('#select-curso').html(option);
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
                $('#select-paralelo').html(option);
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

function cargarInputsOcultos() {
    $('#select-cargo').change(function () {
        let rol_id = $('#select-cargo option:selected').val();

        if (rol_id == '1') {
            $('#datos-estudiantes').addClass('d-none');
            //$('#datos-representante').addClass('d-none');
        } else
            if (rol_id == '2') {
                $('#datos-estudiantes').removeClass('d-none');
                //$('#datos-representante').addClass('d-none');
            } else
                if (rol_id == '3') {
                    $('#datos-estudiantes').addClass('d-none');
                    //$('#datos-representante').removeClass('d-none');
                }
    });
}

function guardarNuevoUsuario() {
    $('#form-nuevo-usuario').submit(function (e) {
        e.preventDefault();
        //isiario
        let usuario = $('#usuario-us').val();
        let clave = $('#usuario-clave').val();
        let confclave = $('#usuario-conf-clave').val();
        let img = $('#img-usuario')[0].files[0];
        let rol_id = $('#select-cargo option:selected').val();
        //persona
        let sexo_id= $('#select-sexo option:selected').val();
        let cedula = $('#cedula').val();
        let nombres = $('#persona-nombres').val();
        let apellidos = $('#persona-apellidos').val();
        let celular = $('#persona-telefono').val();
        let correo = $('#persona-correo').val();
        let direccion = $('#persona-direccion').val();
        let def = (img == undefined) ? 'userdefault.png' : img.name;
        //estudiante
        let curso_id = $('#select-curso option:selected').val();
        let paralelo_id = $('#select-paralelo option:selected').val();

        let json = {
            usuario: {
                usuario, rol_id, correo, clave, confclave, img: def
            },
            persona: {
                sexo_id, cedula, nombres, apellidos, celular, direccion
            },
            estudiante: {
                curso_id, paralelo_id
            }
        };

        //validacion para datos de personas
        if (!validarDatos(json)) {
            console.log("debe llenar todos los campos");
        } else {
            //Realizar peticion ajax
            guardandoUsuario(json);
        }
    });
}

function validarCedula(cedula) {
    if (cedula.length == 10) {

        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = cedula.substring(0, 2);

        //Pregunto si la region existe ecuador se divide en 24 regiones
        if (digito_region >= 1 && digito_region <= 24) {

            // Extraigo el ultimo digito
            var ultimo_digito = cedula.substring(9, 10);

            //Agrupo todos los pares y los sumo
            var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
            var numero1 = cedula.substring(0, 1);
            var numero1 = (numero1 * 2);
            if (numero1 > 9) { var numero1 = (numero1 - 9); }

            var numero3 = cedula.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) { var numero3 = (numero3 - 9); }

            var numero5 = cedula.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) { var numero5 = (numero5 - 9); }

            var numero7 = cedula.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) { var numero7 = (numero7 - 9); }

            var numero9 = cedula.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) { var numero9 = (numero9 - 9); }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9;

            //Suma total
            var suma_total = (pares + impares);

            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0, 1);

            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1) * 10;

            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;

            //Si el digito validador es = a 10 toma el valor de 0
            if (digito_validador == 10)
                var digito_validador = 0;

            //Validamos que el digito validador sea igual al de la cedula
            if (digito_validador == ultimo_digito) {
                return true;
            } else {
                return false;
            }

        } else {
            // imprimimos en consola si la region no pertenece
            return false;
        }
    } else {
        //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        return false;
    }
}

function validarDatos(json) {
    let persona = json.persona;
    let usuario = json.usuario;
    console.log(usuario);
    //expresion regular -> validar correo electronico
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

    if (persona.cedula.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese una Cédula',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (persona.nombres.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese los nombres',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (persona.apellidos.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese los apellidos',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (persona.celular.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese un número celular',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (persona.sexo_id == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Seleccione un Sexo',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (usuario.correo.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese un correo',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (persona.cedula.length < 10 || persona.nombres.length < 3 || persona.apellidos.length < 3) {
        return false;
    } else if (caract.test(usuario.correo) == false) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'El formato del correo no es Válido',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (persona.direccion.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese una dirección',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (usuario.rol_id == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Seleccione un Rol',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (usuario.usuario.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese un Usuario',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (usuario.clave.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Ingrese una Contraseña',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (usuario.confclave.length == 0) {
        Swal.fire({
            title: 'Usuarios!!',
            text: 'Debe confirmar la Contraseña',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        })
        return false;
    } else if (usuario.clave !== usuario.confclave) {
        Swal.fire({
            title: 'Usuarios!',
            text: 'Las Contraseñas no coinciden',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#004a43'
        });
        return false;
    } else {
        return true;
    }
}

function guardandoUsuario(json) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'usuario/save',
        // especifica si será una petición POST o GET
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                Swal.fire({
                    title: 'Usuario',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                $('#form-nuevo-usuario')[0].reset();
            }
        },
        error: function (jqXHR, status, error) {
            console.log('Existió un problema, reviselo..!');
        },
        complete: function (jqXHR, status) {
            // console.log('Petición realizada');
        }
    });

    if (json.usuario.img == 'userdefault.png') {

    } else {
        //Enviar imagen al servidor(Backend)
        let img = $('#img-usuario')[0].files[0];
        let formdata = new FormData();
        formdata.append('fichero', img);

        $.ajax({
            // la URL para la petición
            url: urlServidor + 'usuario/fichero',
            // especifica si será una petición POST o GET
            type: 'POST',
            data: formdata,
            contentType: false,
            processData: false,
            // el tipo de información que se espera de respuesta
            dataType: 'json',
            success: function (responseImg) {
                //console.log(responseImg);
                if (responseImg.status) {
                    Swal.fire({
                        title: 'Usuario',
                        text: responseImg.mensaje,
                        icon: 'success',
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
}


