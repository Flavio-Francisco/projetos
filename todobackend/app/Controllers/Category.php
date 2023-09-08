<?php
namespace App\Controllers;

use App\Models\TodoListModelCategory;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;



class Category extends ResourceController{

    use ResponseTrait;
    
    protected $model;

   public function __construct(){
        $this->model = new TodoListModelCategory();
    }

    public function create(){

        $data = request()->getJSON();
        
        if ($this->model->save($data)) {
            return $this->respondCreated($data, 'Categoria Adicionada!');
        }
        return $this->failServerError($data, 'Dados Invalidos');
    }


    public function showCategory(){

      $data =$this->model->findAll();

      if ($data) {
        return $this->respond($data);
      }
    }

    public function update($id = null){

        $query = $this->model->getWhere(['id'=> $id])->getResult();
          
        $data = request()->getJSON();

        if ($query) {
          $this->model->update($id,$data);

          return $this->respondUpdated($data,"Dados Atualizados com sucesso!!");
        }

        return $this->failServerError("Dados invalidos");
     }
     public function deleteCategory($id = null){

        $data = $this->model->getWhere(['id'=> $id])->getResult();

        if ($data) {
          $this->model->delete($id);

         return $this->respondUpdated($data,"Dados deletados com sucesso!!");
        }
        return $this->failServerError("Dados não encontrads!!");
     }
     


    }