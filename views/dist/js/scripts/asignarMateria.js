var tabla;

_init();

function _init() {
    listarCursos();
    listarMaterias();
    guardarAsignacion();
    listarAsignaciones();
}

function listarCursos() {
    tabla = $('#tabla-cursos').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'curso/datatableAsignar',
            type: "get",
            dataType: "json",
            error: function (e) {
                console.log(e.responseText);
            }
        },
        destroy: true,
        "iDisplayLength": 3,//Paginación
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

function listarMaterias() {
    tabla = $('#tabla-materias').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'materia/datatableAsignar',
            type: "get",
            dataType: "json",
            error: function (e) {
                console.log(e.responseText);
            }
        },
        destroy: true,
        "iDisplayLength": 3,//Paginación
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

function seleccionarCurso(id){
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
                $('#curso-seleccionado').text(response.curso.nombre_curso);
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

function seleccionarMateria(id){
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
                $('#materia-seleccionado').text(response.materia.nombre_materia);
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

function guardarAsignacion(){
    $('#asignar-curso-materia').click(function(){  
        let curso_id = $('#curso-id').val();
        let materia_id = $('#materia-id').val();

        if(curso_id.length == 0){
            Swal.fire({
                title: 'Curso - Materia',
                text: 'Debe seleccionar un Curso',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(materia_id.length == 0){
            Swal.fire({
                title: 'Curso - Materia',
                text: 'Debe seleccionar una Materia',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
           let json = {
                curso_materia: {
                    curso_id,
                    materia_id,
                },
            };

            guardandoAsignacion(json);
        }
    });
}

function guardandoAsignacion(json){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'curso_materia/save',
        // especifica si será una petición POST o GET
        type : 'POST',
        data : "data=" + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                Swal.fire({
                    title: 'Curso - Materia',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                reset();
                listarAsignaciones();
            }else{
                Swal.fire({
                    title: 'Curso - Materia',
                    text: response.mensaje,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
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

function reset(){ 
    $('#curso-id').val('');
    $('#curso-seleccionado').text('----------------');
    $('#materia-id').val('');
    $('#materia-seleccionado').text('----------------');
}

function listarAsignaciones() {
    tabla = $('#tabla-asignacion').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'curso_materia/datatableAsignaciones',
            type: "get",
            dataType: "json",
            error: function (e) {
                console.log(e.responseText);
            }
        },
        destroy: true,
        "iDisplayLength": 5,//Paginación
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

function eliminarCursoMateria(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'curso_materia/eliminarCursoMateria/'+ id, 
        // especifica si será una petición POST o GET
        type : 'DELETE',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                Swal.fire({
                    title: 'Curso - Materia',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                listarAsignaciones();
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

