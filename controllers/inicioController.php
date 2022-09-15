<?php


class InicioController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function administrador(){
        require_once 'views/contents/administrador.php';
    }

    public function docente(){
        require_once 'views/contents/docente.php';
    }

    public function miscursos(){
        require_once 'views/contents/misCursos.php';
    }

    public function misEstudiantes(){
        require_once 'views/contents/misEstudiantes.php';
    }

}