<main class="app-content">

    <style>
    .box-img-usuario {
        width: 88px;
        height: 90px;
        overflow: hidden;
        text: center;
    }

    .box-img-usuario>img {
        width: 100% !important;
        height: 100% !important;
    }
    </style>

    <div class="app-title">
        <div>
            <h1><i class="fa fa-users"></i> Listar Usuario</h1>
            <!-- <p>Sample forms</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión de Usuarios</li>
            <li class="breadcrumb-item"><a href="#">Listar Usuario</a></li>
        </ul>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div class="row mb-3">
                <div class="col-12">
                    <a class="btn btn-primary" href="<?=BASE?>usuario/nuevo">
                        <i class="fa fa-hand-pointer-o mr-2"></i>
                        Agregar Usuario</a>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="card card-success">
                        <div class="card-header">
                            <h3 class="card-title">Usuarios</h3>
                        </div>
                        <!-- /.card-header -->
                        <div class="card-body">
                            <div class="div" style="overflow: auto;">
                                <table id="tabla-usuario" class="table table-bordered table-striped table-sm text-center">
                                    <thead>
                                        <tr>
                                            <th style="width: 10px">#</th>
                                            <th>Imagen</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Usuario</th>
                                            <th>Cargo</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <!--  <tr>
                                            <td class="pt-25">1</td>
                                            <td class="pt-25">imagen.jpg</td>
                                            <td class="pt-25">Burro</td>
                                            <td class="pt-25">Hourse</td>
                                            <td class="pt-25">Bu</td>
                                            <td class="pt-25">Tuuu crees</td>
                                            <td class="pt-25">
                                                <div class="btn-group">
                                                    <button class="btn btn-warning  fa-lg">
                                                        <i class="fa fa-pencil-square fa-lg"></i>
                                                    </button>
                                                    <button class="btn btn-danger fa-lg">
                                                        <i class="fa fa-trash fa-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr> -->
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
                    <h4 class="modal-title">Actualizar Usuario</h4>
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
                                    <label for="">Usuario</label>
                                    <input id="upda-usuario" type="text" class="form-control">
                                </div>
                                <input type="hidden" id="rol-id">
                                <div class="col-12 col-md-6 form-group">
                                    <label for="">Roles</label>
                                    <select id="upd-cargo" class="form-control">
                                        <!-- <option value="0">Seleccione un Cargo</option> -->
                                    </select>
                                </div>
                            </div>

                        </form>
                        <div class="row">
                            <div class="col-12">
                                <button id="btn-update" class="btn btn-primary"><i
                                        class="fas fa-pencil-alt mr-2"></i>Actualizar</button>
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


<script src="<?=BASE?>views/dist/js/scripts/listaUsuario.js?ver=1.1.1.2"></script>