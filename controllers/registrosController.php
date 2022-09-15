<?php

class RegistrosController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function nuevo(){
        require_once 'views/contents/nuevoRegistros.php';
    }

    public function asignarmateria(){
        require_once 'views/contents/asignarMateria.php';
    }
    
    public function asignardocentemateria(){
        require_once 'views/contents/asignarDocenteMateria.php';
    }
    
 

}