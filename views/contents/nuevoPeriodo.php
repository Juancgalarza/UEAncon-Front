<main class="app-content">

    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Registros</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Registros</li>
            <li class="breadcrumb-item"><a href="#">Período</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h3 class="tile-title">Nuevo Período</h3>
                <div class="tile-body">
                    <form method="POST" id="form-nuevo-periodo">
                        <div class="form-group">
                            <label for="">Período</label>
                            <input type="text" class="form-control numeros-vd" minlength="4" maxlength="4"
                                placeholder="Ejemplo: 2022" id="form-periodo">
                        </div>

                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">
                                <i class="fa fa-plus mr-2"></i>
                                Agregar Período
                            </button>
                        </div>
                    </form>
                </div>
                <h3 class="tile-title mt-1">Listado Períodos</h3>
                <div class="tile-body">
                    <table id="tabla-periodos" class="table table-bordered table-striped table-sm text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Períodos</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="periodo-body">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL EDITAR PERIODO -->
    <div class="modal fade" id="actualizarPeriodo" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-light" id="modalMateriaLabel">Actualizar Período</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <input type="hidden" id="periodo-id">
                                <form method="POST" id="update-periodo-val">
                                    <div class="form-group">
                                        <label for="">Período</label>
                                        <input type="text" class="form-control numeros-vd" placeholder="Ejemplo: 2022"
                                            id="upd-periodo-form" minlength="4" maxlength="4">
                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <button id="btn-update-periodo" class="btn btn-primary"><i
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

<script src="<?=BASE?>views/dist/js/scripts/nuevoPeriodo.js?ver=1.1.1.1"></script>