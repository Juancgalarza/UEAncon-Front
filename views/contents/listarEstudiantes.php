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