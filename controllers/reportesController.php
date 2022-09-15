<?php

class ReportesController{

    public function __construct(){
        // echo "InicioController instanciado";
    }

    public function estudiante(){
        require_once 'views/contents/reportePorEstudiante.php';
    }

    public function parcial(){
        require_once 'views/contents/reportePorParcial.php';
    }

}