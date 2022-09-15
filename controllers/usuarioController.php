<?php


class UsuarioController{
 
    public function nuevo(){
        require_once 'views/contents/nuevoUsuario.php';
    }

    public function listar(){
        require_once 'views/contents/listarUsuario.php';
    }
}