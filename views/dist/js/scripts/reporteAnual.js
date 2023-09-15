
_init();

function _init() {
    cargarData();
    imprimir();
}

function cargarData(){
    $('#btn-consulta').click(function(){
        let estudiante_id = JSON.parse(localStorage.getItem('sesion-estudiante'));
        
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'calificaciones/reporteAnual/' + estudiante_id,
            // especifica si será una petición POST o GET
            type : 'GET',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) { 
                console.log(response);
                if(response.length > 0){
                    let tr = ''; let td = ''; let obs = '';
                    let i = 1; let j = 1; 
                    let promfQ1 = 0; let promQ1 = 0;  let promfQ2 = 0; let promQ2 = 0; let promedioFinal = 0;
                    let examen201 = 0;  let examen202 = 0; let nexamen1 = 0; let nexamen2 = 0; let acumParcial1 = 0; let acumParcial2 = 0;
                    let promG = 0; let promF = 0; let nexamen201 = 0; let nexamen202 = 0;
                    let promParcialfTotal1 = 0; let promParcialf80Total1 = 0; let promParcialTotal1 = 0;
                    let promParcialfTotal2 = 0; let promParcialf80Total2 = 0; let promParcialTotal2 = 0;

                    let cant = response.length;

                    response.forEach(element => { 
                        
                        element.examen.forEach(ex => {
                            if (ex.quimestre_id == 1) {
                                examenf1 = ex.nota;
                                nexamen1 = examenf1.toFixed(2);
                                examen201 = nexamen1 * 0.20;
                                nexamen201 = examen201.toFixed(2);
                            } else if (ex.quimestre_id == 2) {
                                examenf2 = ex.nota;
                                nexamen2 = examenf2.toFixed(2);
                                examen202 = nexamen2 * 0.20;
                                nexamen202 = examen202.toFixed(2);
                            }     
                        });

                        element.calificaciones.forEach(e => {
                            if (e.quimestre_id == 1) {
                                parcialf1 = e.promedio_parcial;
                                nparcial1 = parcialf1.toFixed(2);
                                acumParcial1 += Number(nparcial1);
                                promParcialfTotal1 = Number(acumParcial1) / 3;
                                promParcialf80Total1 = promParcialfTotal1 * 0.80;
                                promParcialTotal1 = promParcialf80Total1.toFixed(3);  
                            } else if (e.quimestre_id == 2) {
                                parcialf2 = e.promedio_parcial;
                                nparcial2 = parcialf2.toFixed(2);
                                acumParcial2 += Number(nparcial2);
                                promParcialfTotal2 = Number(acumParcial2) / 3;
                                promParcialf80Total2 = promParcialfTotal2 * 0.80;
                                promParcialTotal2 = promParcialf80Total2.toFixed(3);  
                            }  
                        });

                        console.log(promParcialTotal1);
                        console.log(promParcialTotal2);
                        console.log(nexamen201);
                        console.log(nexamen202);

                        //quimestre 1
                        promfQ1 = Number(promParcialTotal1) + Number(nexamen201);
                        promQ1 = promfQ1.toFixed(2);
                        promediof1 = Number(promQ1);
                        promedio1 = promediof1.toFixed(2);
                        //quimestre 2
                        promfQ2 = Number(promParcialTotal2) + Number(nexamen202);
                        promQ2 = promfQ2.toFixed(2);
                        promediof2 = Number(promQ2);
                        promedio2 = promediof2.toFixed(2);

                        promQuif = Number(promedio1) + Number(promedio2);
                        promQuifs = promQuif / 2;
                        promQui = promQuifs.toFixed(2);

                        promG += Number(promQui);
                        promF =  (Number(parseFloat(promG)) / cant);
                        promedioFinal = promF.toFixed(2);

                        if (promQui > 7) {
                            obs = 'APROBADO';
                        } else {
                            obs = 'REPROBADO';
                        }

                        if (promedio1 >= 9 && promedio2 >=9) {
                            comp = 'A';
                        } else if (promedio1 >= 7 && promedio1 >8 && promedio2 >= 7 && promedio2 >8){
                            comp = 'B';
                        } else {
                            comp = 'C';
                        }
                        
                        tr += `<tr>
                                <td>${i}</td>
                                <td>${element.materia}</td>
                                <td>${comp}</td>
                                <td>${promedio1}</td>
                                <td>${promedio2}</td>
                                <td>${promQui}</td>
                                <td>${obs}</td>
                            </tr>`;
                        i++; 
                        acumParcial1 = 0;
                        acumParcial2 = 0;
                        promParcialTotal1 = 0;
                        promParcialTotal2 = 0;
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
                filename:     'Reporte De Calificaciones Anual.pdf',
                image:        { type: 'jpeg', quality: 3 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'ledger', orientation: 'portrait' }
                };
                html2pdf().set(opt).from(element).save();
        }
    });
}