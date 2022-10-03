_init();

function _init() {
    cargarDesgloseCalificacion();
}

function cargarDesgloseCalificacion() {
    let docente_id = JSON.parse(localStorage.getItem('sesion-docente'));

    $.ajax({
        // la URL para la petición
        url: urlServidor + '/calificaciones/desgloseCalificacion/' + docente_id,
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            console.log(response);
            let col = '';
            if (response.status) {
                let i = 1;

                response.data.forEach(element => {
                    col += `<div class="col-12">
                    <div class="tile">
                        <h5 class="text-center">${element.materia} - Curso: ${element.curso} Paralelo: ${element.paralelo}</h5>
                        <div class="tile-body">
                            <table id="tabla-calificaciones" class="table table-bordered table-striped table-sm text-center">
                                <thead>
                                    <tr>
                                        <th style="width: 10px">#</th>
                                        <th>Nombre Completo</th>
                                        <th>Parcial</th>
                                        <th>Tarea 1</th>
                                        <th>Tarea 2</th>
                                        <th>Lección 1</th>
                                        <th>Lección 2</th>
                                        <th>Proyecto</th>
                                        <th>Evaluación</th>
                                        <th>Exámen</th>
                                        <th>Promedio</th>
                                    </tr>
                                </thead>
                                <tbody id="calificaciones-body">
                                    <tr>
                                        <th>${i}</th>
                                        <th>${element.estudiante.nombres} ${element.estudiante.apellidos}</th>
                                        <th>${element.detalle.parcial.parcial}</th>
                                        <th>${element.detalle.nota1}</th>
                                        <th>${element.detalle.nota2}</th>
                                        <th>${element.detalle.nota3}</th>
                                        <th>${element.detalle.nota4}</th>
                                        <th>${element.detalle.nota5}</th>
                                        <th>${element.detalle.nota6}</th>
                                        <th>${element.detalle.examen}</th>
                                        <th>${element.detalle.promedio}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>`;
                    i++;
                 
                });
            } else {
                Swal.fire({
                    title: 'Reporte',
                    text: 'No información disponible',
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                })
            }
            $('#col-calificaciones').html(col);
           
        },
        error: function (jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete: function (jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}