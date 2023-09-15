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

    public function quimestral(){
        require_once 'views/contents/reporteQuimestral.php';
    }

    public function anual(){
        require_once 'views/contents/reporteAnual.php';
    }

    public function parcialDoc(){
        require_once 'views/contents/reportePorParcialDocente.php';
    }

    public function quimestralDoc(){
        require_once 'views/contents/reporteQuimestralDocente.php';
    }

    public function anualDoc(){
        require_once 'views/contents/reporteAnualDocente.php';
    }


}