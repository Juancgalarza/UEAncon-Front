$(function(){
   
    _init();

    function _init(){

        let sesion = JSON.parse(localStorage.getItem('sesion'));

        if(sesion){
            redirigir(sesion.rol_id);
        }else{
            loguear();
        }
    }

    function loguear(){
        $('#login-ingresar').click(function(e){
            e.preventDefault();

            let usuario = $('#login-usuario').val();
            let clave = $('#login-clave').val();
            let captcha = $('.g-recaptcha-response').val();

            if(usuario.length == 0){
                Swal.fire({
                    title: 'Error!',
                    text: 'Ingrese usuario o correo',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                  })
            }else
            if(usuario.length < 4){
                Swal.fire({
                    title: 'Error!',
                    text: 'El usuario o correo debe tener más de 4 carácteres',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                  })
            }
            else
            if(clave.length == 0){
                Swal.fire({
                    title: 'Error!',
                    text: 'Ingrese una contraseña',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                  })
            }else
            if(clave.length < 4){
                Swal.fire({
                    title: 'Error!',
                    text: 'La clave debe tener mínimo 4 carácteres',
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#004a43'
                  })
            }
            else{
                let json = {
                    "login":{
                        "entrada":usuario, 
                        "clave": clave,
                        "captcha": captcha
                    }
                }
                conexion(json);
            }
        });
    }

    function conexion(json){
        $.ajax({
            // la URL para la petición
            url : urlServidor + 'usuario/login',
            data : "data=" + JSON.stringify(json),
            // especifica si será una petición POST o GET
            type : 'POST',
            // el tipo de información que se espera de respuesta
            dataType : 'json',
            success : function(response) {

                console.log(response);
                if(response.status){
                    Swal.fire({
                        title:'Bienvenido!',
                        text: response.mensaje,
                        confirmButtonColor: '#004a43',
                    });
                    
                    $('#form-login')[0].reset();

                    let sesion = response.usuario;
                    let est_id = response.estudiante;
                    let doc_id = response.docente;
                    localStorage.setItem('sesion', JSON.stringify(sesion));
                    localStorage.setItem('sesion-estudiante', JSON.stringify(est_id));
                    localStorage.setItem('sesion-docente', JSON.stringify(doc_id));
                
                    redirigir(sesion.rol_id);
                    //console.log(sesion);
                }else{
                    Swal.fire({
                        title: 'Error!',
                        text: response.mensaje,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#004a43'
                      })
                }
            },
            error : function(jqXHR, status, error) {
                console.log('Disculpe, existió un problema');
            },
            complete : function(jqXHR, status) {
                // console.log('Petición realizada');
            }
        });
    }

    function redirigir(rol){
        switch(rol){
            case 1:
                //Administrador 
                $(location).attr('href', urlCliente + 'inicio/administrador');
                break;
            case 2:
                //Docente 
                $(location).attr('href', urlCliente + 'reportes/parcial');
                break;
            case 3:
                //Docente 
                $(location).attr('href', urlCliente + 'inicio/miscursos');
                break;
            default:
                //Default
        }
    }
});