
_init();

function _init() {
    cargarParciales();
    cargarData();
    imprimir();
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

function cargarData(){
    $('#btn-consulta').click(function(){
        let parcial_id = $('#select-parcial option:selected').val();
        let estudiante_id = JSON.parse(localStorage.getItem('sesion-estudiante'));
        
        if(parcial_id == 0){
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Parcial',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'detalle_calificaciones/reportexParcial/' + parcial_id + '/' + estudiante_id,
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
                            nota1f = element.nota1;
                            nota1 = nota1f.toFixed(2);
                            nota2f = element.nota2;
                            nota2 = nota2f.toFixed(2);
                            nota3f = element.nota3;
                            nota3 = nota3f.toFixed(2);
                            nota4f = element.nota4;
                            nota4 = nota4f.toFixed(2);
                            nota5f = element.nota5;
                            nota5 = nota5f.toFixed(2);
                            nota6f = element.nota6;
                            nota6 = nota6f.toFixed(2);
                            promediof = element.promedio;
                            promedio = promediof.toFixed(2);
                            promG += Number(promedio);
                            promF =  (Number(parseFloat(promG)) / cant);
                            promedioFinal = promF.toFixed(2);
                        
                            tr += `<tr>
                                    <td>${i}</td>
                                    <td>${element.calificaciones.materia.nombre_materia}</td>
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
                filename:     'Reporte De Calificaciones Por Parcial y Quimestre.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'ledger', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
        }
    });
}