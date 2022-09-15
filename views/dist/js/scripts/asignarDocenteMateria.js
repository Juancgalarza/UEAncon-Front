var tabla;

_init();

function _init() {
    abrirModalDocente();
    listarDocentes();
    abrirModalMateria();
    listarMaterias();
    abrirModalCurso();
    listarCursos();
    abrirModalParalelo();
    listarParalelos();
    guardarAsignacion();
    listarAsignaciones();
}

function abrirModalDocente() {
    $('#btn-modal-docente').click(function(){
        $('#modalDocente').modal('show');
    });
}

function listarDocentes() {
    tabla = $('#tabla-docentes').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'docente/datatable',
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

function abrirModalMateria() {
    $('#btn-modal-materia').click(function(){
        $('#modalMateria').modal('show');
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

function abrirModalCurso() {
    $('#btn-modal-curso').click(function(){
        $('#modalCurso').modal('show');
    });
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

function abrirModalParalelo() {
    $('#btn-modal-paralelo').click(function(){
        $('#modalParalelo').modal('show');
    });
}

function listarParalelos() {
    tabla = $('#tabla-paralelos').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'paralelo/datatableAsignar',
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

function seleccionarDocente(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'docente/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#docente-id').val(response.docente.id);
                $('#docente-texto').val(response.docente.persona.nombres + ' ' + response.docente.persona.apellidos);
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
    $('#modalDocente').modal('hide');
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
                $('#materia-texto').val(response.materia.nombre_materia);
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
    $('#modalMateria').modal('hide');
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
                $('#curso-texto').val(response.curso.nombre_curso);
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
    $('#modalCurso').modal('hide');
}

function seleccionarParalelo(id){
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
                $('#paralelo-texto').val(response.paralelo.tipo);
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
    $('#modalParalelo').modal('hide');
}

function guardarAsignacion(){
    $('#asignar-docente-materia').click(function(){  
        let docente_id = $('#docente-id').val();
        let materia_id = $('#materia-id').val();
        let curso_id = $('#curso-id').val();
        let paralelo_id = $('#paralelo-id').val();

        if(docente_id.length == 0){
            Swal.fire({
                title: 'Docente - Materia',
                text: 'Debe seleccionar un Docente',
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
        }else
        if(curso_id.length == 0){
            Swal.fire({
                title: 'Curso - Materia',
                text: 'Debe seleccionar un Curso',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(paralelo_id.length == 0){
            Swal.fire({
                title: 'Curso - Materia',
                text: 'Debe seleccionar un Parlelo',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
           let json = {
                docente_materia: {
                    docente_id,
                    materia_id,
                    curso_id,
                    paralelo_id
                },
            };

            guardandoAsignacion(json);
        }
    });
}

function guardandoAsignacion(json){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'docente_materia/save',
        // especifica si será una petición POST o GET
        type : 'POST',
        data : "data=" + JSON.stringify(json),
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                Swal.fire({
                    title: 'Docente - Materia',
                    text: response.mensaje,
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                });
                reset();
                listarAsignaciones();
            }else{
                Swal.fire({
                    title: 'Docente - Materia',
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
    $('#docente-id').val('');
    $('#docente-texto').val('');
    $('#materia-id').val('');
    $('#materia-texto').val('');
    $('#curso-texto').val('');
    $('#curso-id').val('');
    $('#paralelo-texto').val('');
    $('#paralelo-id').val('');
}

function listarAsignaciones() {
    tabla = $('#tabla-asignacion').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'docente_materia/datatableAsignaciones',
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

function eliminarDocenteMateria(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'docente_materia/eliminarDocenteMateria/'+ id, 
        // especifica si será una petición POST o GET
        type : 'DELETE',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                Swal.fire({
                    title: 'Docente - Materia',
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


