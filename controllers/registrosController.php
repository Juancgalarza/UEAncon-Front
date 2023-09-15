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

    public function nuevoPeriodo(){
        require_once 'views/contents/nuevoPeriodo.php';
    }

    public function nuevoCurso(){
        require_once 'views/contents/nuevoCurso.php';
    }

    public function nuevoParalelo(){
        require_once 'views/contents/nuevoParalelo.php';
    }

    public function nuevaMateria(){
        require_once 'views/contents/nuevaMateria.php';
    }
    

}