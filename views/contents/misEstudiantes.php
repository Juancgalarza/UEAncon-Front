<main class="app-content">
    <style>
    .box-img-usuario {
        width: 40px;
        height: 40px;
        overflow: hidden;
        margin-left: auto;
        margin-right: auto;
    }

    .box-img-usuario>img {
        width: 100% !important;
        height: 100% !important;
    }
    </style>

    <div class="app-title">
        <div>
            <h1><i class="fa fa-users"></i> Mis Estudiantes</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#"> Mis Estudiantes</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h4 class="tile-title mt-1 text-center">Estudiantes Matriculados en la Materia <span
                        class="text-primary" id="materia-en"></span> - Curso: <span class="text-primary"
                        id="curso-en"></span> Paralelo: <span class="text-primary" id="paralelo-en"></span></h4>
                <h5 class="text-center">Jornada: <span class="text-primary" id="jornada-en"></span></h5>
                <div class="tile-body">
                    <table id="tabla-estudiantes" class="table table-bordered table-striped table-sm text-center">
                        <thead>
                            <tr>
                                <th style="width: 10px">#</th>
                                <th>Avatar</th>
                                <th>Cédula</th>
                                <th>Nombre Completo</th>
                                <th>Celular</th>
                                <th>Dirección</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="estudiante-body">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- MODAL CALIFICACIONES -->
<div class="modal fade" id="calificarEstudiante" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title text-light" id="modalMateriaLabel">Calificar Estudiante</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <span class="h5">
                                <b>Estudiante:</b>
                                <span id="nombre-estudiante"> </span>
                            </span>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-12 col-md-6">
                            <span class="h5">
                                <b>Curso:</b>
                                <span id="nombre-curso">
                                </span>
                            </span>
                        </div>
                        <div class="col-12 col-md-6">
                            <span class="h5">
                                <b>Paralelo:</b>
                                <span id="nombre-paralelo">
                                </span>
                            </span>
                        </div>
                    </div>

                    <div class="row mt-2">
                        <div class="col-12">
                            <input type="hidden" id="estudiante-id">
                            <input type="hidden" id="curso-id">
                            <input type="hidden" id="paralelo-id">
                            <form method="POST" id="calificar-estudiante">
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="">Parcial</label>
                                            <select id="select-parcial" class="form-control form-control-sm">

                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="">Quimestre</label>
                                            <select id="select-quimestre" class="form-control form-control-sm">

                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="">Calificación</label>
                                            <input type="text"
                                                onkeypress="if(event.keyCode < 46 || event.keyCode > 57 || event.keyCode == 47) event.returnValue = false;"
                                                class="form-control form-control-sm" placeholder="Ejemplo: 9.50"
                                                id="calificacion-est">
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-group">
                                            <label for="">Actividad</label>
                                            <select id="select-actividad" class="form-control form-control-sm">

                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </form>
                            <div class="row">
                                <div class="col-12">
                                    <button id="btn-calificar" class="btn btn-primary"><i
                                            class="fa fa-check mr-2"></i>Calificar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/dist/js/scripts/misEstudiantes.js?ver=1.1.1.1"></script>