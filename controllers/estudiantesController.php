<?php


class EstudiantesController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function listar(){
        require_once 'views/contents/listarEstudiantes.php';
    }
 

}