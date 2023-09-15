<main class="app-content">

    <div class="app-title">
        <div>
            <h1><i class="fa fa-tags"></i> Registros</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Registros</li>
            <li class="breadcrumb-item"><a href="#">Paralelos</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h3 class="tile-title">Nuevo Paralelo</h3>
                <div class="tile-body">
                    <form method="POST" id="form-nuevo-paralelo">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Paralelo</label>
                                    <input type="text" class="form-control" minlength="1" maxlength="1"
                                        placeholder="Ejemplo: A" id="form-paralelo">
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Capacidad</label>
                                    <input type="text" class="form-control numeros-vd" placeholder="Ejemplo: 100"
                                        id="form-capacidad">
                                </div>
                            </div>
                        </div>

                        <div class="d-flex justify-content-end">
                            <button type="submit" class="btn btn-primary">
                                <i class="fa fa-plus mr-2"></i>
                                Agregar Paralelo
                            </button>
                        </div>
                    </form>
                </div>
                <h3 class="tile-title mt-1">Listado Paralelos</h3>
                <div class="tile-body">
                    <table id="tabla-paralelos" class="table table-bordered table-striped table-sm text-center">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Paralelo</th>
                                <th>Capacidad</th>
                                <th>Total Estudiantes</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="paralelo-body">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL EDITAR PARALELO -->
    <div class="modal fade" id="actualizarParalelo" data-backdrop="static" data-keyboard="false" tabindex="-1"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title text-light" id="modalMateriaLabel">Actualizar Paralelo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <input type="hidden" id="paralelo-id">
                                <form method="POST" id="update-nuevo-paralelo">
                                    <div class="form-group">
                                        <label for="">Paralelo</label>
                                        <input type="text" class="form-control" minlength="1" maxlength="1"
                                            placeholder="Ejemplo: A" id="upd-form-paralelo">
                                    </div>
                                    <div class="form-group">
                                        <label for="">Capacidad</label>
                                        <input type="text" class="form-control numeros-vd" placeholder="Ejemplo: 100"
                                            id="upd-form-capacidad">
                                    </div>
                                </form>
                                <div class="row">
                                    <div class="col-12">
                                        <button id="btn-update-paralelo" class="btn btn-primary"><i
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

<script src="<?=BASE?>views/dist/js/scripts/nuevoParalelo.js"></script>