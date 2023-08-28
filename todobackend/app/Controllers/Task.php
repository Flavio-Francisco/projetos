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
 
    $data = $this->model->findAll();

    return $this->respond($data);
   }
  

   public function show($id = null) {
    $data = $this->model->getWhere(['user_id' => $id])->getResult();
      //  var_dump($data);
    if (!empty($data)) {
        $incompleteItems = array_filter($data, function ($item) {
            return $item->completed === 'f';
        });

        if (!empty($incompleteItems)) {
            return $this->respond($incompleteItems);
        } else {
            return $this->failNotFound('Nenhum dado incompleto encontrado com id ' . $id);
        }
    } else {
        return $this->failNotFound('Nenhum dado encontrado com id ' . $id);
    }
}
public function showCompleted($id = null) {
    $data = $this->model->getWhere(['user_id' => $id])->getResult();
      //  var_dump($data);
    if (!empty($data)) {
        $incompleteItems = array_filter($data, function ($item) {
            return $item->completed === 't';
        });

        if (!empty($incompleteItems)) {
            return $this->respond($incompleteItems);
        } else {
            return $this->failNotFound('Nenhum dado incompleto encontrado com id ' . $id);
        }
    } else {
        return $this->failNotFound('Nenhum dado encontrado com id ' . $id);
    }
}




   public function createTask($id = null){

    $modelUser = new TodoListModelUser();

    $data = $this->request->getJSON();
    
   if ($modelUser->find($id)) {

        $this->model->save($data);

           return $this->respondCreated($data, 'Task created');
    }
    return $this->failServerError('Failed to create Task');
    
   }

   public function update($id = null){

    $data = $this->request->getJSON();
    
    if($this->model->update($id,$data)){
            return $this->respond($data);
        };
        return $this->response->getBody();
    }

    public function delete($user_id = null,$id = null){

        $modelUser = new TodoListModelUser();


         if($modelUser->find($user_id)){
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
    public function drop($id = null){

        $modelUser = new TodoListModelUser();


         if($modelUser->find($id)){
            $this->model->where(['user_id'=>$id])->delete();
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