var tabla;

_init();

function _init() {
    abrirModalEstudiante();
    listarEstudiantes();
    cargarData();
    imprimir();
}

function abrirModalEstudiante() {
    $('#buscar-datos-estudiantes').click(function () {
        $('#modalEstudiante').modal('show');
    });
}

function listarEstudiantes() {
    tabla = $('#tabla-estudiantes').DataTable({
        "lengthMenu": [5, 10, 25, 75, 100],//mostramos el menú de registros a revisar
        "responsive": true, "lengthChange": false, "autoWidth": false,
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginación y filtrado realizados por el servidor
        "ajax":
        {
            url: urlServidor + 'estudiantes/datatableEstudianteReporte',
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

function seleccionarEstudiante(id){
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'estudiantes/listar/' + id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            if(response.status){
                $('#estudiante-id').val(response.estudiante.id);
                $('#estudiante-texto').val(response.estudiante.persona.nombres + ' ' + response.estudiante.persona.apellidos);
            }
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
    $('#modalEstudiante').modal('hide');
}

function cargarData(){
    $('#btn-consulta').click(function(){
        
        let estudiante_id = $('#estudiante-id').val();
        
        if(estudiante_id.length == 0){
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Estudiante',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'asignaciones/reportexParcial/' + estudiante_id,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) { 
                    console.log(response);
                    if(response.status){
                        let tr = '';
                        let i = 1;
                        let cal = ''; let calf = ''; let prom = 0; let sum = 0; let promf = 0;

                        let cant = response.data.tabla.length;

                        response.data.tabla.forEach(element => {  
                            calf = element.detalle_asignaciones[0].calificacion;
                            cal = calf.toFixed(2);
                            sum += Number(cal);
                            prom = (Number(parseFloat(sum)) / cant);
                            promf = prom.toFixed(2);
                            
                            tr += `<tr>
                                    <th>${i}</th>
                                    <th>${element.materia.nombre_materia}</th>
                                    <th>${element.detalle_asignaciones[0].tipo_actividades.actividad}</th>
                                    <th>${cal}</th>
                                </tr>`;
                            i++;                             
                        });
                        $('#body-reporte-data').html(tr);  
                        $('#tabla-reporte-data').removeClass('d-none');
                        $('#total-prom').text(promf);  
                    }else{
                        Swal.fire({
                            title: 'Reporte',
                            text: 'No información disponible',
                            icon: 'warning',
                            confirmButtonText: 'Ok',
                            confirmButtonColor: '#004a43' 
                       })
                        $('#tabla-reporte-data').addClass('d-none');
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
    });
}

function imprimir(){
    $('#btn-imprimir').click(function(){
        let data = $('#body-reporte-data tr');
        if (data.length == 0) {
            Swal.fire({
                title: 'Reporte',
                text: 'No información disponible',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43' 
           })
        } else {
            let element = document.getElementById('tabla-reporte-data');

                let opt = {
                margin:       0.5,
                filename:     'Reporte De Calificaciones Por Estudiante.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'ledger', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
        }
    });
}

