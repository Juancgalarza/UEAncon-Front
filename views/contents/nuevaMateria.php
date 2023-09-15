<main class="app-content">

    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Registros</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Registros</li>
            <li class="breadcrumb-item"><a href="#">Materias</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h3 class="tile-title">Nueva Materia</h3>
                <div class="tile-body">
                    <form method="POST" id="form-nuevo-materia">
                        <div class="form-group">
                            <label for="">Materia</label>
                            <input type="text" class="form-control" placeholder="Ejemplo: Matemáticas"
                                id="form-materia">
                        </div>

                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">
                                <i class="fa fa-plus mr-2"></i>
                                Agregar Materia
                            </button>
                        </div>
                    </form>
                </div>
                <h3 class="tile-title mt-1">Listado Materias</h3>
                <div class="tile-body">
                    <table id="tabla-materias" class="table table-bordered table-striped table-sm text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Materia</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="materia-body">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL EDITAR MATERIA -->
    <div class="modal fade" id="actualizarMateria" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-light" id="modalMateriaLabel">Actualizar Materia</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <input type="hidden" id="materia-id">
                                <form method="POST" id="update-nuevo-materia">
                                    <div class="form-group">
                                        <label for="">Materia</label>
                                        <input type="text" class="form-control" placeholder="Ejemplo: Matemáticas"
                                            id="upd-form-materia">
                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <button id="btn-update-materia" class="btn btn-primary"><i
                                                class="fa fa-pencil mr-2"></i>Actualizar</button>
                                    </div>
                                </div>
                            </div>
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

<script src="<?=BASE?>views/dist/js/scripts/nuevaMateria.js"></script>