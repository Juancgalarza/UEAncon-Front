<main class="app-content">

    <div class="app-title">
        <div>
            <h1><i class="fa fa-clipboard"></i> Reporte Anual</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item"><a href="<?=BASE?>reportes/anualDoc"> Reporte Anual</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-6 col-md-3 col-lg-3 form-group ">
            <label for="">Materias</label>
            <select id="select-materia" class="form-control">

            </select>
        </div>
        <div class="col-6 col-md-3 col-lg-3 form-group">
            <label for="">Curso</label>
            <select id="select-curso" class="form-control">

            </select>
        </div>
        <div class="col-6 col-md-3 col-lg-3 form-group">
            <label for="">Paralelo</label>
            <select id="select-paralelo" class="form-control">

            </select>
        </div>
        <div class="col-6 col-md-4 col-lg-3 form-group">
            <button class="btn btn-dark" id="btn-consulta" style="margin-top: 28px;">
                <i class=" fa fa-search "></i></button>
            <button class="btn btn-primary" id="btn-imprimir" style="margin-top: 28px;">
                <i class="fa fa-file-pdf-o"></i> </button>
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
                    <h6>Reporte Anual</h6>
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
                                            <th>Estudiante</th>
                                            <th>COMP</th>
                                            <th>Quimestre 1</th>
                                            <th>Quimestre 2</th>
                                            <th>Promedio</th>
                                            <th>OBS</th>
                                        </tr>
                                    </thead>
                                    <tbody id="body-reporte-data">

                                    </tbody>
                                    <tfoot>
                                        <th></th>
                                        <th class="text-primary">Promedio General: </th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th id="total-prom" class="text-primary"></th>
                                        <th></th>
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

<script src="<?=BASE?>views/plugins/datatables/jquery.dataTables.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="<?=BASE?>views/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="<?=BASE?>views/plugins/jszip/jszip.min.js"></script>
<script src="<?=BASE?>views/plugins/pdfmake/pdfmake.min.js"></script>
<script src="<?=BASE?>views/plugins/html2pdf/html2pdf.bundle.js"></script>

<script src="<?=BASE?>views/dist/js/scripts/reporteAnualDocente.js?ver=1.1.1"></script>