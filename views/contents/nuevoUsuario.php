<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-edit"></i> Nuevo Usuario</h1>
            <!-- <p>Sample forms</p> -->
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión de Usuarios</li>
            <li class="breadcrumb-item"><a href="#">Nuevo Usuario</a></li>
        </ul>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <a class="btn btn-primary" href="<?=BASE?>usuario/listar">
                <i class="fa fa-hand-pointer-o mr-2"></i>
                Listar Usuario</a>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6">
            <div class="tile">
                <h3 class="tile-title">Datos Personales</h3>
                <div class="tile-body">
                    <form id="form-nuevo-persona" class="form-horizontal">
                        <div class="form-group row">
                            <label for="cedula" class="control-label col-md-2">Cédula</label>
                            <div class="col-md-4">
                                <input class="form-control soloNumeros" type="text" placeholder="2400121314"
                                    maxlength="10" minlength="10" id="cedula" name="cedula" required>
                            </div>
                            <label for="persona-nombres" class="control-label col-md-2">Nombre</label>
                            <div class="col-md-4">
                                <input class="form-control letras-vd" type="text" placeholder="Pedro" maxlength="100"
                                    minlength="3" id="persona-nombres" name="nombres" required>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="persona-apellidos" class="control-label col-md-2">Apellido</label>
                            <div class="col-md-4">
                                <input class="form-control letras-vd" type="text" placeholder=" Villon" maxlength="100"
                                    minlength="3" id="persona-apellidos" name="apellidos" required>
                            </div>
                            <label for="persona-telefono" class="control-label col-md-2">Teléfono</label>
                            <div class="col-md-4">
                                <input class="form-control numeros-vd" type="text" placeholder="0999556677"
                                    maxlength="10" minlength="10" id="persona-telefono" name="telefono">
                            </div>
                        </div>
                        <div class="form-group row p-2">
                            <label for="persona-correo" class="control-label col-md-3 p-2">Correo</label>
                            <div class="col-md-8">
                                <input class="form-control col-md-12" type="email" placeholder="pedro@gmail.com"
                                    maxlength="150" minlength="4" id="persona-correo" name="correo" required>
                            </div>
                            <label class="control-label col-md-3 p-2">Dirección</label>
                            <div class="col-md-8">
                                <textarea id="persona-direccion" class="form-control col-md-12" rows="2"
                                    placeholder="Escribir su dirección"></textarea>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="tile-footer">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-3">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="tile">
                <h3 class="tile-title">Datos del Usuario</h3>
                <div class="tile-body">
                    <form id="form-nuevo-usuario" action="" method="post" class="form-horizontal">
                        <div class="form-group row" style="margin-bottom: 20px;">
                            <label class="control-label col-md-2">Roles</label>
                            <div class="col-md-4">
                                <select id="select-cargo" class="form-control">
                                    <!-- <option value="0">Seleccione un Cargo</option> -->
                                </select>
                            </div>
                            <label class="control-label col-md-2">Usuario</label>
                            <div class="col-md-4">
                                <input class="form-control error" name="usuario" id="usuario-us" type="text"
                                    placeholder="Usuario">
                            </div>
                        </div>

                        <div class="form-group row d-none" style="margin-bottom: 20px;" id="datos-estudiantes">
                            <label class="control-label col-md-2">Curso</label>
                            <div class="col-md-4">
                                <select id="select-curso" class="form-control">

                                </select>
                            </div>
                            <label class="control-label col-md-2">Paralelo</label>
                            <div class="col-md-4">
                                <select id="select-paralelo" class="form-control">

                                </select>
                            </div>
                        </div>

                        <div class="form-group row" style="margin-bottom: 5px;">
                            <label class="control-label col-md-2">Contraseña</label>
                            <div class="col-md-4">
                                <input class="form-control" name="clave" id="usuario-clave" type="password"
                                    placeholder="Contraseña">
                            </div>
                            <label class="control-label col-md-2">Confirmar Contraseña</label>
                            <div class="col-md-4">
                                <input class="form-control" name="confclave" id="usuario-conf-clave" type="password"
                                    placeholder="Confir Contraseña">
                            </div>
                        </div>
                        <br>
                        <div class="form-group row" style="margin-bottom: 0px;">
                            <label for="img-usuario" class="control-label col-md-3">Subir Imagen</label>
                            <div class="col-md-9">
                                <input class="form-control" type="file" name="img" id="img-usuario">
                            </div>
                        </div>
                        <br>
                        <div class="col-xs-12 tile-footer">
                            <div class="row">
                                <div class="col-12 col-md-12 col-lg-12 col-sm-12">
                                    <button type="submit" class="btn btn-primary" type="button">
                                        <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                        Registrar
                                    </button>
                                    <button class="btn btn-secondary" type="button">
                                        <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                        cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
<script src="<?=BASE?>views/plugins/jquery.validate.js"></script>
<script src="<?=BASE?>views/dist/js/scripts/nuevoUsuario.js?ver=1.1.1.1"></script>