$(function(){
    
    _init();

    function _init(){
        cargar_datos();
        
    }

    function cargar_datos(){

        contar_usuario();

        function contar_usuario(){
            $.ajax({
                // la URL para la petición
                url : urlServidor + 'usuario/contar',
                // especifica si será una petición POST o GET
                type : 'GET',
                // el tipo de información que se espera de respuesta
                dataType : 'json',
                success : function(response) {
                    if(response.status){
                        $('#conta-usu').text(response.cantidad);
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

    }

});