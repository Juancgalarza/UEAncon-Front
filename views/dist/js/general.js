$(function(){

    _init();

    function _init(){
        iniciaNombres();
        cargarMenus();
        salir();
        soloNumeros();
        validaciones_generales();
    }

    function getSesion(){
      let sesion = JSON.parse(localStorage.getItem('sesion'));
      return sesion;
    }

    function iniciaNombres(){
 
      let sesion = getSesion();
        if(sesion){

            let nombres = sesion.persona.nombres + ' ' + sesion.persona.apellidos;

            $('#sesion-usuario').html(nombres);
            $('#sesion-rol').html(sesion.rol.cargo);

            let src = urlServidor+'resources/usuarios/'+sesion.img;
            $('#img-user-avatar').attr('src', src);
        }
    } 

     function cargarMenus(){

      if(getSesion()){
        let rol = getSesion().rol.id;
  
        $.ajax({
          url : urlServidor + 'permiso/rol/' + rol,
          type : 'GET',
          dataType : 'json',
          success : function(response) {
            // console.log(response);
            
            let menu = '';
            let i = 0;
  
            // console.log(response);
            // <i class="far fa-circle nav-icon"></i>
            response.forEach(element => {
              
              //recorre menus hijos
              let hijos = "";
              element.menus_hijos.forEach(hijo => {
                hijos += 
                `<li>
                  <a class="treeview-item" href="${urlCliente}${hijo.url}">
                    <i class="icon fa fa-circle-o"></i> ${hijo.nombre}
                  </a>
                </li>
                  `;
              });
  
              if(i == 0){
                menu += `
                <li class="treeview">
                  <a class="app-menu__item" href="#">
                      <i class="app-menu__icon ${element.icono}"></i>
                      <span class="app-menu__label">${element.nombre}</span>
                      <i class="treeview-indicator fa fa-angle-right"></i>
                  </a>

                  <ul class="treeview-menu">
                    ${hijos}
                  </ul>
                </li>
                `;
              }else{
                menu += `
                <li class="treeview">
                  <a class="app-menu__item" href="#" data-toggle="treeview">
                    <i class="app-menu__icon fa ${element.icono}"></i>
                    <span class="app-menu__label">${element.nombre}</span>
                    <i class="treeview-indicator fa fa-angle-right"></i>
                  </a>

                  <ul class="treeview-menu">
                    ${hijos}
                  </ul>
                </li>
                `;
              }
              i++;
            });
  
            $('#menus-padres').html(menu);
            //Dar funcioamiento del click para aparecer los menus hijos
            abrirMenu();

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

    function abrirMenu(){
      let menus = document.querySelectorAll('.treeview');
      
      if(menus.length > 0){
        menus.forEach(element => {
          element.addEventListener('click', ()=>{
            element.classList.toggle('is-expanded');
          });
        });
      }
    }

    function salir(){
        $('#salir-app').click(function(){
            Swal.fire({
                title: 'Cerrar sesion?',
                text: "Desea salir de la aplicación!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#004a43',
                cancelButtonColor: '#d33',
                cancelButtonText: 'No',
                confirmButtonText: 'Salir'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title:'Exit!',
                    text: 'Su sesión ha finalizado',
                    confirmButtonColor: '#004a43',
                });

                  localStorage.clear();
                  $(location).attr('href', urlCliente + 'login');
                }
              })
        });

    }

    function soloNumeros(){
      $('.soloNumeros').keydown(function(e) {
        var key = e.charCode || e.keyCode || 0;
        // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
        return (
          key == 8 ||
          key == 9 ||
          key == 46 ||
          (key >= 37 && key <= 40) ||
          (key >= 48 && key <= 57) ||
          (key >= 96 && key <= 105));
      });
    }

    function validaciones_generales(){
      $('.letras-vd').validCampoFranz(' abcdefghijklmnñopqrstuvwxyzáéiou');
      //Para escribir solo numeros    
      $('.numeros-vd').validCampoFranz('0123456789'); 

    }

});
