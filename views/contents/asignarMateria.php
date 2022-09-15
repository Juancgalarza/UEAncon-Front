<main class="app-content">

    <div class="app-title">
        <div>
            <h1><i class="fa fa-dashboard"></i> Asignar Curso - Materia</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#"> Docente</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12 col-md-6">
            <div class="tile">
                <h3 class="tile-title mt-1">Listado De Cursos</h3>
                <input type="hidden" id="curso-id">
                <div class="tile-body">
                    <table id="tabla-cursos" class="table table-bordered table-striped table-sm text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Curso</th>
                                <th>Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody id="curso-body">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="tile">
                <h3 class="tile-title mt-1">Listado De Materias</h3>
                <input type="hidden" id="materia-id">
                <div class="tile-body">
                    <table id="tabla-materias" class="table table-bordered table-striped table-sm text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Materia</th>
                                <th>Seleccionar</th>
                            </tr>
                        </thead>
                        <tbody id="materia-body">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="row justify-content-md-center">
        <div class="col-12 col-md-8">
            <div class="tile">
                <h3 class="tile-title mt-1">Asignaciones</h3>
                <div class="tile-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="widget-small info coloured-icon"><i class="icon fa fa-building fa-3x"></i>
                                <div class="info">
                                    <h4>Curso</h4>
                                    <p id="curso-seleccionado"><b>----------------</b></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="widget-small primary coloured-icon"><i class="icon fa fa-book fa-3x"></i>
                                <div class="info">
                                    <h4>Materia</h4>
                                    <p id="materia-seleccionado"><b>----------------</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-end">
                        <button class="btn btn-primary" id="asignar-curso-materia"><i
                                class="fa fa-check mr-2"></i>Asignar</button>
                    </div>
                    <div class="row">
                        <div class="col-12 mt-3">
                            <h3> <b>Lista de Asignaciones</b></h3>
                            <table id="tabla-asignacion"
                                class="table table-bordered table-striped table-sm text-center">
                                <thead>
                                    <tr class="bg-light">
                                        <th>#</th>
                                        <th>Curso</th>
                                        <th>Materia Asignada</th>
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


<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>

<script src="<?=BASE?>views/dist/js/scripts/asignarMateria.js?ver=1.1.1.2"></script>