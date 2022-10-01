<style>
.registro-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.registro-content .registro-logo {
    font-family: "Niconne";
    color: #fff;
}

.registro-content .registro-logo h1 {
    font-size: 52px;
    font-weight: 400;
}
</style>

<div>

    <body>
        <section class="material-half-bg">
            <div class="cover"></div>
        </section>
        <div class="container registro-content">
            <div class="registro-logo">
                <h1 class="text-center">Formulario de Registro</h1>
            </div>
            <div class="tile">
                <div class="tile-body">
                    <form id="form-nuevo-estudiante" method="POST" class="form-horizontal">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group row">
                                    <label for="est-cedula" class="control-label col-md-2">Cédula</label>
                                    <div class="col-md-4">
                                        <input class="form-control soloNumeros" type="text" maxlength="10"
                                            minlength="10" id="est-cedula" name="cedula">
                                    </div>
                                    <label for="est-nombres" class="control-label col-md-2">Nombre</label>
                                    <div class="col-md-4">
                                        <input class="form-control letras-vd" type="text" maxlength="100" minlength="3"
                                            id="est-nombres" name="nombres">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group row">
                                    <label for="est-apellidos" class="control-label col-md-2">Apellido</label>
                                    <div class="col-md-4">
                                        <input class="form-control letras-vd" type="text" maxlength="100" minlength="3"
                                            id="est-apellidos" name="apellidos">
                                    </div>
                                    <label for="est-telefono" class="control-label col-md-2">Celular</label>
                                    <div class="col-md-4">
                                        <input class="form-control numeros-vd" type="text" maxlength="10" minlength="10"
                                            id="est-telefono">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group row">
                                    <label class="control-label col-md-2">Sexo</label>
                                    <div class="col-md-4">
                                        <select id="select-sexo-est" class="form-control">

                                        </select>
                                    </div>
                                    <label for="est-correo" class="control-label col-md-2">Correo</label>
                                    <div class="col-md-4">
                                        <input class="form-control col-md-12" type="text" id="est-correo">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group row">
                                    <label class="control-label col-md-2">Dirección</label>
                                    <div class="col-md-4">
                                        <textarea id="est-direccion" class="form-control col-md-12"
                                            rows="2"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group row">
                                    <label class="control-label col-md-2">Usuario</label>
                                    <div class="col-md-4">
                                        <input class="form-control" id="usuario-est" type="text">
                                    </div>

                                    <label for="img-est" class="control-label col-md-2">Subir Imagen</label>
                                    <div class="col-md-4">
                                        <input class="form-control" type="file" id="img-est">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group row">
                                    <label class="control-label col-md-2">Curso</label>
                                    <div class="col-md-4">
                                        <select id="select-curso-est" class="form-control">

                                        </select>
                                    </div>
                                    <label class="control-label col-md-2">Paralelo</label>
                                    <div class="col-md-4">
                                        <select id="select-paralelo-est" class="form-control">

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group row">
                                    <label class="control-label col-md-2">Contraseña</label>
                                    <div class="col-md-4">
                                        <input class="form-control" id="est-clave" type="password">
                                    </div>
                                    <label class="control-label col-md-2">Confirmar Contraseña</label>
                                    <div class="col-md-4">
                                        <input class="form-control" id="est-conf-clave" type="password">
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 tile-footer">
                                <div class="row text-right">
                                    <div class="col-12 col-md-12 col-lg-12 col-sm-12">
                                        <button type="submit" class="btn btn-primary">
                                            <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                            Registrar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </body>
</div>

<script src="<?=BASE?>views/dist/js/scripts/registroEstudiante.js?ver=1.1.1.2"></script>