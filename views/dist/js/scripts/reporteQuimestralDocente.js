_init();

function _init() {
    cargarMaterias();
    cargarQuimestres();
    cargarCursos();
    cargarParalelos();
    cargarData();
    imprimir();
}

function cargarMaterias() {
    let docente_id = JSON.parse(localStorage.getItem('sesion-docente')); 
    $.ajax({
        // la URL para la petición
        url: urlServidor + 'docente_materia/materiaCursoParalelo/' + docente_id,
        // especifica si será una petición POST o GET
        type: 'GET',
        // el tipo de información que se espera de respuesta
        dataType: 'json',
        success: function (response) {
            //console.log(response);
            if (response.status) {
                let option = '<option value=0>Seleccione una Materia</option>';

                response.docente_materia.forEach(element => {
                    option += `<option value=${element.materia.id}>${element.materia.nombre_materia}</option>`;
                });
                $('#select-materia').html(option);
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

function cargarData(){
    $('#btn-consulta').click(function(){
        let quimestre_id = $('#select-quimestre option:selected').val();
        let materia_id = $('#select-materia option:selected').val();
        let curso_id = $('#select-curso option:selected').val();
        let paralelo_id = $('#select-paralelo option:selected').val();
        
        if (materia_id == 0) {
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar una Materia',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if (quimestre_id == 0) {
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Quimestre',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if (curso_id == 0) {
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Curso',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if (paralelo_id == 0) {
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Paralelo',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
            let quimestre_texto = $("#select-quimestre").find("option:selected").text();
            $('#quimestre-data').text(quimestre_texto);
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'calificaciones/reporteQuimestralDocente/' + quimestre_id + '/' + materia_id + '/' + curso_id + '/' + paralelo_id,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) { 
                    console.log(response);
                    if(response.length > 0){
                        let tr = ''; let td = '';
                        let i = 1; let j = 1; 
                        let promfQ = 0; let promQ = 0; let promedioFinal = 0;
                        let examen20 = 0; let nexamen20 = 0; let acumParcial = 0;
                        let promG = 0; let promF = 0;
                        let promParcialfTotal = 0; let promParcialf80Total = 0; let promParcialTotal = 0;

                        let cant = response.length;

                        response.forEach(element => {  
                            examenf = element.examen[0].nota;
                            nexamen = examenf.toFixed(2);
                            examen20 = nexamen * 0.20;
                            nexamen20 = examen20.toFixed(2);

                            element.calificaciones.forEach(e => {
                                parcialf = e.promedio_parcial;
                                nparcial = parcialf.toFixed(2);
                                acumParcial += Number(nparcial);
                                promParcialfTotal = Number(acumParcial) / 3;
                                promParcialf80Total = promParcialfTotal * 0.80;
                                promParcialTotal = promParcialf80Total.toFixed(3); 
                                td += `
                                    <td>${nparcial}</td>
                                `;     
                                j++;  
                            });
                            promfQ = Number(promParcialTotal) + Number(nexamen20);
                            promQ = promfQ.toFixed(2);
                            promediof = Number(promQ);
                            promedio = promediof.toFixed(2);
                            promG += Number(promedio);
                            promF =  (Number(parseFloat(promG)) / cant);
                            promedioFinal = promF.toFixed(2);
                            
                            tr += `<tr>
                                    <td>${i}</td>
                                    <td>${element.estudiante.nombres} ${element.estudiante.apellidos}</td>
                                    ${td}
                                    <td>${nexamen}</td>
                                    <td>${promParcialTotal}</td>
                                    <td>${nexamen20}</td>
                                    <td>${promQ}</td>
                                </tr>`;
                            i++; 
                            acumParcial = 0;
                            td = '';                   
                        });
                        $('#body-reporte-data').html(tr);  
                        $('#tabla-reporte-data').removeClass('d-none');
                        $('#total-prom').text(promedioFinal);  
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
                filename:     'Reporte De Calificaciones Quimestral.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'ledger', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
        }
    });
}