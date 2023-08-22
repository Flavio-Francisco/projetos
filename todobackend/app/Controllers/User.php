<?php
namespace App\Controllers;


use App\Models\TodoListModelUser;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class User extends ResourceController
{
    use ResponseTrait;

    protected $model;

    public function __construct(){

        $this->model =  new TodoListModelUser();
        
    }

   public function get(){

     $data = $this->model->findAll();
     return $this->respond($data);
   }
  

   public function show($id=null){
  
        $data = $this->model->getWhere(['id'=>$id])->getResult();
        if($data){
            return $this->respond($data);
        }
        return $this->failNotFound('Nenhum dado encontrado com id '.$id); 
   }

   public function create(){

    $data = $this->request->getJSON();
    
    if ( $this->model->save($data)) {
        return $this->respondCreated($data, 'User created');
    }
    return $this->failServerError('Failed to create user');
    
   }

   public function update($id = null){

    
    $data = $this->request->getJSON();
    var_dump($data);
    if($this->model->find($id)){
    
         $this->model->update($id,$data);
          $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Dados Atualizados com sucesso!!'
            ]
            ];
        
        return$this->respondUpdated($response);
    }
    return $this->failNotFound('Nenhum dado encontrado com id '.$id); 
  }

    public function delete($id = null){
        $data = $this->model->find($id);

         if($data){
            $this->model->delete($id);
            $response = [
                'status'   => 200,
                'error'    => null,
                'messages' => [
                    'success' => 'Dados removidos'
                ]
            ];
            return $this->respondDeleted($response);
        }
        
        return $this->failNotFound('Nenhum dado encontrado com id '.$id); 
    }

}



?>