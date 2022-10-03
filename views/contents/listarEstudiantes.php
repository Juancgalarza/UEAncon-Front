<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-address-card"></i> Listar Estudiantes</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#"> Docente</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h3 class="tile-title mt-1">Listado De Estudiantes</h3>
                <div class="tile-body">
                    <table id="tabla-estudiantes" class="table table-bordered table-striped table-sm text-center">
                        <thead>
                            <tr>
                                <th style="width: 10px">#</th>
                                <th>Cédula</th>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Celular</th>
                                <th>Dirección</th>
                                <th>Sexo</th>
                                <th>Curso</th>
                                <th>Paralelo</th>
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

    <!-- Modales -->
    <div class="modal fade" id="actualizar_estudiante">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title text-light">Actualizar Estudiante</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <form id="update-est" method="post">
                            <input type="hidden" id="estudiante-id">
                            <div class="row">
                                <input type="hidden" id="upd-persona-id">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Cédula</label>
                                    <input id="upd-cedula" type="text" readOnly class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Nombres</label>
                                    <input id="upd-nombres" type="text" class="form-control letras-vd">
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Apellidos</label>
                                    <input id="upd-apellidos" type="text" class="form-control letras-vd">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Sexo</label>
                                    <select id="upd-sexo" class="form-control">
                                    </select>
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Celular</label>
                                    <input id="upd-celular" type="text" class="form-control numeros-vd">
                                </div>
                            </div>  
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Curso</label>
                                    <select id="upd-curso" class="form-control">
                                    </select>
                                </div>
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Paralelo</label>
                                    <select id="upd-paralelo" class="form-control">
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 form-group">
                                    <label for="">Dirección</label>
                                    <textarea id="upd-direccion" class="form-control" rows="2"
                                        placeholder="Escribir su dirección"></textarea>
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-12">
                                <button id="btn-update" class="btn btn-primary"><i
                                        class="fa fa-pencil-square mr-2"></i>Actualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer justify-content-between">
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
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

<script src="<?=BASE?>views/dist/js/scripts/listaEstudiantes.js"></script>