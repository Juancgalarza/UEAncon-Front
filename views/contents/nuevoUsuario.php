<main class="app-content">
    <div class="app-title">
        <div>
            <h1><i class="fa fa-edit"></i> Nuevo Usuario</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
            <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
            <li class="breadcrumb-item">Gestión de Usuarios</li>
            <li class="breadcrumb-item"><a href="<?=BASE?>usuario/nuevo">Nuevo Usuario</a></li>
        </ul>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="tile">
                <h3 class="tile-title">Formulario de Registro</h3>
                <div class="tile-body">
                    <form id="form-nuevo-usuario" method="POST" class="form-horizontal">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="form-group row">
                                    <label for="cedula" class="control-label col-md-2">Cédula</label>
                                    <div class="col-md-4">
                                        <input class="form-control soloNumeros" type="text" placeholder="2400121314"
                                            maxlength="10" minlength="10" id="cedula" name="cedula">
                                    </div>
                                    <label for="persona-nombres" class="control-label col-md-2">Nombre</label>
                                    <div class="col-md-4">
                                        <input class="form-control letras-vd" type="text" placeholder="Pedro"
                                            maxlength="100" minlength="3" id="persona-nombres" name="nombres">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="persona-apellidos" class="control-label col-md-2">Apellido</label>
                                    <div class="col-md-4">
                                        <input class="form-control letras-vd" type="text" placeholder=" Villon"
                                            maxlength="100" minlength="3" id="persona-apellidos" name="apellidos">
                                    </div>
                                    <label for="persona-telefono" class="control-label col-md-2">Celular</label>
                                    <div class="col-md-4">
                                        <input class="form-control numeros-vd" type="text" placeholder="0999556677"
                                            maxlength="10" minlength="10" id="persona-telefono">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="control-label col-md-2">Sexo</label>
                                    <div class="col-md-4">
                                        <select id="select-sexo" class="form-control">

                                        </select>
                                    </div>
                                    <label for="persona-correo" class="control-label col-md-2 p-2">Correo</label>
                                    <div class="col-md-4">
                                        <input class="form-control col-md-12" type="text" placeholder="pedro@gmail.com"
                                            id="persona-correo">
                                    </div>
                                </div>
                                <div class="form-group row p-2">
                                    <label class="control-label col-md-3 p-2">Dirección</label>
                                    <div class="col-md-8">
                                        <textarea id="persona-direccion" class="form-control col-md-12" rows="2"
                                            placeholder="Escribir su dirección"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="form-group row" style="margin-bottom: 20px;">
                                    <label class="control-label col-md-2">Roles</label>
                                    <div class="col-md-4">
                                        <select id="select-cargo" class="form-control">

                                        </select>
                                    </div>
                                    <label class="control-label col-md-2">Usuario</label>
                                    <div class="col-md-4">
                                        <input class="form-control" id="usuario-us" type="text"
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
                                        <input class="form-control" id="usuario-clave" type="password"
                                            placeholder="Contraseña">
                                    </div>
                                    <label class="control-label col-md-2">Confirmar Contraseña</label>
                                    <div class="col-md-4">
                                        <input class="form-control" id="usuario-conf-clave" type="password"
                                            placeholder="Confir Contraseña">
                                    </div>
                                </div>
                                <br>
                                <div class="form-group row" style="margin-bottom: 0px;">
                                    <label for="img-usuario" class="control-label col-md-3">Subir Imagen</label>
                                    <div class="col-md-9">
                                        <input class="form-control" type="file" id="img-usuario">
                                    </div>
                                </div>
                                <br>
                                <div class="col-xs-12 tile-footer">
                                    <div class="row text-right">
                                        <div class="col-12 col-md-12 col-lg-12 col-sm-12">
                                            <button type="submit" class="btn btn-primary" type="button">
                                                <i class="fa fa-fw fa-lg fa-check-circle"></i>
                                                Registrar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

<script src="<?=BASE?>views/dist/js/scripts/nuevoUsuario.js?ver=1.1.1.5"></script>