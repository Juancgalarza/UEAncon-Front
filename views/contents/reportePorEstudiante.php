<main class="app-content">

    <div class="app-title">
        <div>
            <h1><i class="fa fa-clipboard"></i> Reporte Por Estudiante</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="#"> Reporte Por Estudiante</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-6 col-md-3 col-lg-2 form-group ">
            <input type="hidden" id="estudiante-id">
            <label for="">Estudiantes</label>
            <input id="estudiante-texto" readonly type="text" class="form-control">
        </div>
        <div class="col-6 col-md-4 col-lg-1 form-group">
            <button class="btn btn-primary" id="buscar-datos-estudiantes" style="margin-top: 28px;">
                <i class="fa fa-search"></i> </button>
        </div>
        <div class="col-6 col-md-4 col-lg-3 form-group ">
            <button class="btn btn-dark" id="btn-consulta" style="margin-top: 28px;">
                <i class=" fa fa-search  "></i> Consultar</button>
            <button class="btn btn-primary" id="btn-imprimir" style="margin-top: 28px;">
                <i class="fa fa-file-pdf-o"></i> PDF</button>
        </div>
    </div>

    <div class="row d-none" id="tabla-reporte-data">
        <div class="col-12 mt-2">
            <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-2">
                    <img src="<?=BASE?>views/dist/img/logo.png" width="100px">
                </div>
                <div class="col-12 col-md-6 text-center">
                    <h3><b>UNIDAD EDUCATIVA "ANCÓN"</b></h3>
                    <h6>Reporte Por Estudiante</h6>
                </div>
                <div class="col-12 col-md-2">
                    <img src="<?=BASE?>views/dist/img/logo.png" width="100px">
                </div>
            </div>

            <div class="row mt-1">
                <div class="col-12 text-center">
                    <div class="mt-3">
                        <div class="card">
                            <div class="card-body table-responsive p-0">
                                <table class="table table-bordered text-center">
                                    <thead>
                                        <tr class="bg-light">
                                            <th>#</th>
                                            <th>Materias</th>
                                            <th>Actividad</th>
                                            <th>Calificación</th>
                                        </tr>
                                    </thead>
                                    <tbody id="body-reporte-data">

                                    </tbody>
                                    <tfoot>
                                        <th></th>
                                        <th></th>
                                        <th class="text-primary">Promedio: </th>
                                        <th id="total-prom" class="text-primary"></th>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<!-- MODAL ESTUDIANTES -->
<div class="modal fade" id="modalEstudiante" data-backdrop="static" data-keyboard="false" tabindex="-1"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title" id="modalMateriaLabel">Estudiantes Disponibles</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <table id="tabla-estudiantes" class="table table-bordered table-striped table-sm text-center">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Estudiante</th>
                                    <th>Seleccionar</th>
                                </tr>
                            </thead>
                            <tbody id="estudiante-body">

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
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>

<script src="<?=BASE?>views/dist/js/scripts/reportePorEstudiante.js"></script>