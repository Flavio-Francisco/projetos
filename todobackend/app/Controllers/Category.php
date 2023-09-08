<?php

use App\Models\TodoListModelCategory;
use CodeIgniter\RESTful\ResourceController;



class Category extends ResourceController{


    function __construct(){
        $model = new TodoListModelCategory();
    }

    function createCategory(){

        $data = request()->getJSON();
        
        if ($this->model->save($data)) {
            return $this->respondCreated($data, 'Categoria Adicionada! ');
        }
        return $this->failServerError($data, ' Dados Invalidos');
    }




}
?>


