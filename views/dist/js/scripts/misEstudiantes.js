var tabla;

_init();

function _init() {
    cargarEncabezadoMateria();
    cargarEncabezadoCurso();
    cargarEncabezadoParalelo();
    cargarEstudiantesCursos();
    cargarParciales();
    cargarQuimestres();
    guardarCalificaciones();
    guardarCalificacionExamen();
}

function cargarEncabezadoMateria(){
    let id = localStorage.getItem('_materia_id');
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'materia/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#materia-en').text('*'+response.materia.nombre_materia+'*');
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

function cargarEncabezadoCurso(){
    let id = localStorage.getItem('_curso_id');
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'curso/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#curso-en').text('*'+response.curso.nombre_curso+'*');
                $('#jornada-en').text('*'+response.curso.jornada.jornada+'*');
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

function cargarEncabezadoParalelo(){
    let id = localStorage.getItem('_paralelo_id');
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'paralelo/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#paralelo-en').text('*'+response.paralelo.tipo+'*');
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

function cargarEstudiantesCursos() {
    let curso_id = localStorage.getItem('_curso_id');
    let paralelo_id = localStorage.getItem('_paralelo_id');
    tabla = $('#tabla-estudiantes').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'estudiantes/verdocentestudiantes/' + curso_id + '/' + paralelo_id,
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

function cargarParciales() {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'parcial/listar',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                let option = '<option value=0>Seleccione un Parcial</option>';

                response.parcial.forEach(element => {
                    option += `<option value=${element.id}>${element.parcial}</option>`;
                });
                $('#select-parcial').html(option);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay parciales disponibles',
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

function cargarQuimestres() {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'quimestre/listar',
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                let option = '<option value=0>Seleccione un Quimestre</option>';

                response.quimestre.forEach(element => {
                    option += `<option value=${element.id}>${element.quimestre}</option>`;
                });
                $('#select-quimestre').html(option);
                $('#select-quimestre-ex').html(option);
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'No hay quimestres disponibles',
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

function calificarEstudiante(id) {
    $('#calificarEstudiante').modal('show');
    cargarDataEstudiante(id);
}

function calificarEstudianteExamen(id) {
    $('#calificarExamen').modal('show');
    cargarDataEstudianteExamen(id);
}

function cargarDataEstudiante(id) {
    let estudiante_id = id;
    let curso_id = localStorage.getItem('_curso_id');
    let paralelo_id = localStorage.getItem('_paralelo_id');
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'estudiantes/estudianteCalificar/' + estudiante_id + '/' + curso_id + '/' + paralelo_id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#estudiante-id').val(response.estudiante[0].id);
                $('#curso-id').val(response.estudiante[0].curso.id);
                $('#paralelo-id').val(response.estudiante[0].paralelo.id);
                $('#nombre-estudiante').text(response.estudiante[0].persona.nombres + ' ' + response.estudiante[0].persona.apellidos);
                $('#nombre-estudiante-ex').text(response.estudiante[0].persona.nombres + ' ' + response.estudiante[0].persona.apellidos);
                $('#nombre-curso').text(response.estudiante[0].curso.nombre_curso);
                $('#nombre-curso-ex').text(response.estudiante[0].curso.nombre_curso);
                $('#nombre-paralelo').text(response.estudiante[0].paralelo.tipo);
                $('#nombre-paralelo-ex').text(response.estudiante[0].paralelo.tipo);
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

function cargarDataEstudianteExamen(id) {
    let estudiante_id = id;
    let curso_id = localStorage.getItem('_curso_id');
    let paralelo_id = localStorage.getItem('_paralelo_id');
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'estudiantes/estudianteCalificar/' + estudiante_id + '/' + curso_id + '/' + paralelo_id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#estudiante-id-ex').val(response.estudiante[0].id);
                $('#nombre-estudiante-ex').text(response.estudiante[0].persona.nombres + ' ' + response.estudiante[0].persona.apellidos);
                $('#nombre-curso-ex').text(response.estudiante[0].curso.nombre_curso);
                $('#nombre-paralelo-ex').text(response.estudiante[0].paralelo.tipo);
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

function guardarCalificaciones(){
    $('#btn-calificar').click(function(){

        let docente_id = JSON.parse(localStorage.getItem('sesion-docente')); 
        let materia_id = localStorage.getItem('_materia_id');
        let estudiante_id = $('#estudiante-id').val();
        let curso_id = $('#curso-id').val();
        let paralelo_id = $('#paralelo-id').val();

        //detalle
        let parcial_id = $('#select-parcial option:selected').val();
        let quimestre_id = $('#select-quimestre option:selected').val();
        let nota1 = $('#nota1-est').val();
        let nota2 = $('#nota2-est').val();
        let nota3 = $('#nota3-est').val();
        let nota4 = $('#nota4-est').val();
        let nota5 = $('#nota5-est').val();
        let nota6 = $('#nota6-est').val();
        let totalf = Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) + Number(nota5) + Number(nota6);
        let total = totalf.toFixed(2);
        let promf = total / 6 ;
        let promedio = promf.toFixed(2);
        let promedio_parcial = promedio;
        
        if(parcial_id == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe seleccionar un Parcial',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(quimestre_id == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe seleccionar un Quimestre',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota1.length == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe ingresar una Calificación',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }
        else
        if(nota2.length == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe ingresar una Calificación a la Asignación',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota3.length == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe ingresar una Calificación a la Asignación',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota4.length == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe ingresar una Calificación a la Asignación',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota5.length == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe ingresar una Calificación a la Asignación',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota6.length == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe ingresar una Calificación a la Asignación',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10 || nota5 > 10 || nota6 > 10){
            Swal.fire({
                title: 'Calificaciones',
                text: 'La Calificación ingresada es mayor a 10',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
            let detalles = [];

            let aux = {
                nota1, nota2, nota3, nota4, nota5, nota6, total, promedio
           };
           detalles.push(aux);

            let json = {
                calificaciones:{
                    estudiante_id,
                    docente_id,
                    materia_id,
                    curso_id,
                    paralelo_id,
                    parcial_id,
                    quimestre_id,
                    promedio_parcial
                },
                detalle_calificaciones:detalles
            }
            guardandoCalificaciones(json);
        }
    });
}

function guardandoCalificaciones(json) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'calificaciones/guardarCalificacion',
        // especifica si será una petición POST o GET
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                Swal.fire({
                    title: 'Calificaciones',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                $('#calificar-estudiante')[0].reset();
                $('#estudiante-id').val('');
                $('#curso-id').val('');
                $('#paralelo-id').val('');
            } else {
                Swal.fire({
                    title: 'Calificaciones',
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
    $('#calificarEstudiante').modal('hide');
}

function guardarCalificacionExamen(){
    $('#btn-calificar-examen').click(function(){

        let quimestre_id = $('#select-quimestre-ex option:selected').val();
        let estudiante_id = $('#estudiante-id-ex').val();
        let materia_id = localStorage.getItem('_materia_id');
        let nota = $('#examen-est').val();
        
        if(quimestre_id == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe seleccionar un Quimestre',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota.length == 0){
            Swal.fire({
                title: 'Calificaciones',
                text: 'Debe ingresar una Calificación al Exámen',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(nota > 10){
            Swal.fire({
                title: 'Calificaciones',
                text: 'La Calificación ingresada es mayor a 10',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
            let json = {
                examen:{
                    quimestre_id,
                    estudiante_id,
                    materia_id,
                    nota
                },
            }
            guardandoCalificacionExamen(json);
        }
    });
}

function guardandoCalificacionExamen(json) {
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'examen/calificarExamenEstudiante',
        // especifica si será una petición POST o GET
        type: 'POST',
        data: 'data=' + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            if (response.status) {
                Swal.fire({
                    title: 'Calificaciones',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                $('#calificar-estudiante-examen')[0].reset();
                $('#estudiante-id-ex').val('');
            } else {
                Swal.fire({
                    title: 'Calificaciones',
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
    $('#calificarExamen').modal('hide');
}
