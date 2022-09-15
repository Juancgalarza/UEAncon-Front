_init();

function _init() {
    cargaData();
}

function cargaData(){
    let docente_id = JSON.parse(localStorage.getItem('sesion-docente')); 
    $.ajax({
        // la URL para la petición
        url : urlServidor + 'docente_materia/materiaCursoParalelo/' + docente_id,
        // especifica si será una petición POST o GET
        type : 'GET',
        // el tipo de información que se espera de respuesta
        dataType : 'json',
        success : function(response) {
            console.log(response);
            let div = '';
            if(response.status){
                response.docente_materia.forEach(element => {
                    let img = urlCliente + 'views/dist/img/escolar.jpeg';
                    div += `<div class="col-md-4 text-center border mt-3 p-4 bg-light" >
                    <div class="card m-2 shadow-lg" style="width: 23em;">
                    <img src="${img}" class="card-img-top">
                    <div class="card-body">
                        <h4 class="card-title text-center">${element.materia.nombre_materia}</h4>
                        <h5 class="card-title">Curso <kbd class="bg-info">${element.curso.nombre_curso}</kbd> - Paralelo <kbd class="bg-info">${element.paralelo.tipo}</kbd> </h5>
                        <button class="btn btn-primary" onclick="verEstudiantes(${element.curso.id},${element.paralelo.id},${element.materia.id})">
                            <i class="fa fa-eye mr-2"></i>
                            Ver Estudiantes
                        </button>
                    </div>
                </div>
                </div>`;
                });
            }else{
                div = `<div class="col-12">
                <div class="bs-component">
                  <div class="alert alert-dismissible alert-danger">
                    <strong>No se encuentran Materias Asignadas al Docente</strong> 
                  </div>
                </div>
              </div>`;
            }      
            $('#data-docente').html(div);
        },
        error : function(jqXHR, status, error) {
            console.log('Disculpe, existió un problema');
        },
        complete : function(jqXHR, status) {
            // console.log('Petición realizada');
        }
    });
}

function verEstudiantes(curso_id,paralelo_id,materia_id) {
    localStorage.setItem('_curso_id', curso_id);
    localStorage.setItem('_paralelo_id', paralelo_id);
    localStorage.setItem('_materia_id', materia_id);
    window.location.href = urlCliente + 'inicio/misEstudiantes';
}