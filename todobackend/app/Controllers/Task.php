<?php
namespace App\Controllers;


use App\Models\TodoListModelTask;
use App\Models\TodoListModelUser;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class Task extends ResourceController
{
    use ResponseTrait;

    protected $model;

    public function __construct(){

        $this->model =  new TodoListModelTask();

        
    }

   public function get(){
    
  #pega todos os dados do banco
    $data = $this->model->findAll();
    return $this->respond($data);
   }
   // buscar 1 usuario

   public function show($id=null){
        
        $data = $this->model->getWhere(['id'=>$id])->getResult();
        if($data){
            return $this->respond($data);
        }
        return $this->failNotFound('Nenhum dado encontrado com id '.$id); 
   }

   public function createTask($id=null){

    $modelUser =  new TodoListModelUser();

     $modelUser->getwhere(['id'=>$id]);

    $data = $this->request->getJSON();
    
        #Olha esse metodo

    if ( $this->model->getWhere(['user_id'=>$id])-> save($data)) {
        return $this->respondCreated($data, 'User created');
    }
    return $this->failServerError('Failed to create user');
    
   }

   public function update($id = null){

    
    $data = $this->request->getJSON();
    
    if($this->model->update($id,$data)){
    
       
            return $this->respond($data);
        };
        return $this->response->getBody();
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