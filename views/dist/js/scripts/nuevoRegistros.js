
_init();

function _init() {
    guardarNuevoPeriodo();
    listarPeriodos();
    guardarNuevoCurso();
    listarCursos();
    guardarNuevoParalelo();
    listarParalelos();
    guardarNuevaMateria();
    listarMaterias();
    actualizarPeriodos();
    actualizarCursos();
    actualizarParalelos();
    actualizarMaterias();
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

function guardarNuevoCurso() {
    $('#form-nuevo-curso').submit(function (e) {
        e.preventDefault();

        let nombre_curso = $('#form-curso').val();

        if (nombre_curso.length == 0) {
            Swal.fire({
                title: 'Cursos',
                text: 'Debe ingresar un Curso',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else {
            let json = {
                curso: {
                    nombre_curso
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

function guardarNuevoParalelo() {
    $('#form-nuevo-paralelo').submit(function (e) {
        e.preventDefault();

        let tipo = $('#form-paralelo').val();

        if (tipo.length == 0) {
            Swal.fire({
                title: 'Paralelos',
                text: 'Debe ingresar un Paralelo',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        } else {
            let json = {
                paralelo: {
                    tipo
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
        "iDisplayLength": 3,//Paginación
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
        "iDisplayLength": 3,//Paginación
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
        "iDisplayLength": 3,//Paginación
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

function actualizarCursos(){
    $('#btn-update-curso').click(function(){
        let id = $('#curso-id').val();
        let nombre_curso = $('#upd-form-curso').val();
        
            let json = {
                curso: {
                    id:id,
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

function actualizarParalelos(){
    $('#btn-update-paralelo').click(function(){
        let id = $('#paralelo-id').val();
        let tipo = $('#upd-form-paralelo').val();
        
            let json = {
                paralelo: {
                    id:id,
                    tipo: tipo,
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
        "iDisplayLength": 3,//Paginación
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