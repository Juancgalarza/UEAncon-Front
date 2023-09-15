<div>

    <body>
        <section class="material-half-bg">
            <div class="cover"></div>
        </section>
        <section class="login-content">
            <div class="logo">
                <h1>Unidad Educativa Ancon</h1>
            </div>
            <div class="login-box">
                <form id="form-login" method="post" class="login-form">
                    <h4 class="login-head"><i class="fa fa-lg fa-fw fa-user"></i>Iniciar Sesion</h4>
                    <div class="form-group">
                        <label class="control-label">Usuario o Correo</label>
                        <input class="form-control" type="text" placeholder="usuario o correo" id="login-usuario"
                            autofocus>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Contraseña</label>
                        <input class="form-control" type="password" placeholder="Contraseña" id="login-clave">
                    </div>
                    <div class="form-group">
                        <div class="g-recaptcha" data-sitekey="6LcwucIhAAAAAFo8DJbkqNKcXAQUOO06gyGz7g8V"></div>
                    </div>
                    <div class="form-group">
                        <div class="utility d-flex justify-content-end">
                            <p class="semibold-text mb-2"><i class="fa fa-share mr-2"></i><a href="registroEstudiante" data-toggle="flip">Soy Estudiante</a></p>
                        </div>
                    </div>
                    <div class="form-group btn-container">
                        <button type="submit" class="btn btn-primary btn-block" id="login-ingresar"><i
                                class="fa fa-sign-in fa-lg fa-fw"></i>Iniciar</button>
                    </div>
                </form>
            </div>
        </section>

    </body>

</div>

<script src="<?=BASE?>views/dist/js/scripts/login.js?ver=1.1.1.10"></script>