<main class="app-content">

    <div class="app-title">
        <div>
            <h1><i class="fa fa-dashboard"></i> Asignar Docente - Materia</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#"> Docente</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12 col-md-4 col-lg-3">
            <div class="tile">
                <h3 class="tile-title mt-1">Nueva Asignación</h3>
                <div class="tile-body">
                    <div class="col-12 form-group">
                        <label for="">Período Lectivo</label>
                        <select id="select-periodo" class="form-control">

                        </select>
                    </div>

                    <div class="col-12 d-flex mb-3">
                        <input type="hidden" id="docente-id">
                        <input type="text" class="form-control" placeholder="Docente" readonly id="docente-texto">
                        <button class="btn btn-primary" id="btn-modal-docente">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>

                    <div class="col-12 d-flex mb-3">
                        <input type="hidden" id="curso-id">
                        <input type="text" class="form-control" placeholder="Curso" readonly id="curso-texto">
                        <button class="btn btn-primary" id="btn-modal-curso">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>

                    <div class="col-12 d-flex mb-3">
                        <input type="hidden" id="materia-id">
                        <input type="text" class="form-control" placeholder="Materia" readonly id="materia-texto">
                        <button class="btn btn-primary" id="btn-modal-materia">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>

                    <div class="col-12 d-flex mb-3">
                        <input type="hidden" id="paralelo-id">
                        <input type="text" class="form-control" placeholder="Paralelo" readonly id="paralelo-texto">
                        <button class="btn btn-primary" id="btn-modal-paralelo">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>

                    <div class="row">
                        <button class="btn btn-primary w-100" id="asignar-docente-materia"><i
                                class="fa fa-check mr-2"></i>Asignar</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-8 col-lg-9">
            <div class="tile">
                <h3 class="tile-title mt-1">Lista de Asignaciones</h3>
                <div class="tile-body">
                    <div class="row">
                        <div class="col-12 col-md-5 col-lg-4">
                            <label for="">Período Lectivo</label>
                            <select id="select-periodo-visualizar" class="form-control">
                                
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-3">
                            <table id="tabla-asignacion"
                                class="table table-bordered table-striped table-sm text-center">
                                <thead>
                                    <tr class="bg-light">
                                        <th>#</th>
                                        <th>Docente</th>
                                        <th>Materia Asignada</th>
                                        <th>Curso</th>
                                        <th>Paralelo</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tbody id="asignacion-body">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</main>

<!-- MODAL DOCENTE -->
<div class="modal fade" id="modalDocente" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Docentes</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <table id="tabla-docentes" class="table table-bordered table-striped table-sm text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Docente</th>
                                    <th>Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody id="docente-body">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- MODAL MATERIA -->
<div class="modal fade" id="modalMateria" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Materias</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <table id="tabla-materias" class="table table-bordered table-striped table-sm text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Materia</th>
                                    <th>Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody id="materias-body">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- MODAL CURSO -->
<div class="modal fade" id="modalCurso" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalCursoLabel">Cursos</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <table id="tabla-cursos" class="table table-bordered table-striped table-sm text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cursos</th>
                                    <th>Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody id="cursos-body">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- MODAL PARALELO -->
<div class="modal fade" id="modalParalelo" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalParalelosLabel">Paralelos</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <table id="tabla-paralelos" class="table table-bordered table-striped table-sm text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Paralelos</th>
                                    <th>Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody id="paralelos-body">

                            </tbody>
                        </table>
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

<script src="<?=BASE?>views/dist/js/scripts/asignarDocenteMateria.js?ver=1.1.1.2"></script>