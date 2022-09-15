<main class="app-content">

    <style>
    table.table-bordered.dataTable tbody td {
        white-space: nowrap !important;
        font-size: 13px !important;
    }

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
            <h1><i class="fa fa-users"></i> Listar Usuario</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión de Usuarios</li>
            <li class="breadcrumb-item"><a href="<?=BASE?>usuario/listar">Listar Usuario</a></li>
        </ul>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">Listado de Usuarios</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div style="overflow: auto;">
                                <table id="tabla-usuario"
                                    class="table table-bordered table-striped table-sm text-center">
                                    <thead>
                                        <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Imagen</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Celular</th>
                                            <th>Dirección</th>
                                            <th>Usuario</th>
                                            <th>Correo</th>
                                            <th>Rol</th>
                                            <th>Sexo</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        </tfoot>
                                </table>
                            </div>
                        </div>
                        <!-- /.card-body -->
                    </div>
                </div>
            </div>
            <!-- /.row -->

        </div><!-- /.container-fluid -->
    </div>

    <!-- Modales -->
    <div class="modal fade" id="actualizar_usuario">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h4 class="modal-title text-light">Actualizar Usuario</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="contanier-fluid">
                        <form id="update-cliente" method="post">
                            <input type="hidden" id="usuario-id">
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
                                    <label for="">Usuario</label>
                                    <input id="upda-usuario" type="text" class="form-control">
                                </div>
                                <input type="hidden" id="rol-id">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Roles</label>
                                    <select id="upd-cargo" class="form-control" disabled>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Correo</label>
                                    <input id="upd-correo" type="text" class="form-control">
                                </div>
                                <div class="col-12 col-md-6 form-group">
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

<script src="<?=BASE?>views/dist/js/scripts/listaUsuario.js?ver=1.1.1.4"></script>