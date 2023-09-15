_init();

function _init() {
    cargarMaterias();
    cargarParciales();
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
        let parcial_id = $('#select-parcial option:selected').val();
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
        if(parcial_id == 0){
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Parcial',
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
            let parcial_texto = $("#select-parcial").find("option:selected").text();
            $('#parcial-data').text(parcial_texto);
            let quimestre_texto = $("#select-quimestre").find("option:selected").text();
            $('#quimestre-data').text(quimestre_texto);
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'calificaciones/reportexParcialDocente/' + parcial_id + '/' + quimestre_id + '/' + materia_id + '/' + curso_id + '/' + paralelo_id,
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) { 
                    console.log(response);
                    if(response.status){
                        let tr = '';
                        let i = 1;
                        let promG = 0; let promF = 0; let promedioFinal = 0;

                        let cant = response.data.tabla.length;

                        response.data.tabla.forEach(element => {  
                            nota1f = element.detalle_calificaciones[0].nota1;
                            nota1 = nota1f.toFixed(2);
                            nota2f = element.detalle_calificaciones[0].nota2;
                            nota2 = nota2f.toFixed(2);
                            nota3f = element.detalle_calificaciones[0].nota3;
                            nota3 = nota3f.toFixed(2);
                            nota4f = element.detalle_calificaciones[0].nota4;
                            nota4 = nota4f.toFixed(2);
                            nota5f = element.detalle_calificaciones[0].nota5;
                            nota5 = nota5f.toFixed(2);
                            nota6f = element.detalle_calificaciones[0].nota6;
                            nota6 = nota6f.toFixed(2);
                            promediof = element.detalle_calificaciones[0].promedio;
                            promedio = promediof.toFixed(2);
                            promG += Number(promedio);
                            promF =  (Number(parseFloat(promG)) / cant);
                            promedioFinal = promF.toFixed(2);
                        
                            tr += `<tr>
                                    <td>${i}</td>
                                    <td>${element.estudiante.persona.nombres} ${element.estudiante.persona.apellidos}</td>
                                    <td>${nota1}</td>
                                    <td>${nota2}</td>
                                    <td>${nota3}</td>
                                    <td>${nota4}</td>
                                    <td>${nota5}</td>
                                    <td>${nota6}</td>
                                    <td>${promedio}</td>
                                </tr>`;
                            i++;                             
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
                filename:     'Reporte De Calificaciones Parcial.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'ledger', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
        }
    });
}