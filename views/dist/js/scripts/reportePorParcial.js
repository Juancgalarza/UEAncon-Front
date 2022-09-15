
_init();

function _init() {
    cargarParciales();
    cargarQuimestres();
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

function cargarData(){
    $('#btn-consulta').click(function(){
        
        let parcial_id = $('#select-parcial option:selected').val();
        let quimestre_id = $('#select-quimestre option:selected').val();
        let estudiante_id = JSON.parse(localStorage.getItem('sesion-estudiante'));
        
        if(parcial_id == 0){
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Parcial',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else
        if(quimestre_id == 0){
            Swal.fire({
                title: 'Reporte',
                text: 'Debe seleccionar un Quimestre',
                icon: 'warning',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#004a43'
            });
        }else{
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'detalle_asignaciones/reportexParcialQuimestre/' + parcial_id + '/' + quimestre_id + '/' + estudiante_id,
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
                filename:     'Reporte De Calificaciones Por Parcial y Quimestre.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'ledger', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
        }
    });
}