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
    $data = $this->model->getWhere(['user_id' => $id, 'completed' => 'f'])->getResult();
      //  var_dump($data);
    if (!empty($data)) {

        if (!empty($data)) {
            return $this->respond($data);
        } else {
            return $this->failNotFound('Nenhum dado incompleto encontrado com id ' . $id);
        }
    } else {
        return $this->failNotFound('Nenhum dado encontrado com id ' . $id);
    }
}
public function showCompleted($id = null) {
    $data = $this->model->getWhere(['user_id' => $id,  'completed' => 't'])->getResult();
      //  var_dump($data);
    if (!empty($data)) {
       
        if (!empty($data)) {
            return $this->respond($data);
        } else {
            return $this->failNotFound('Nenhum dado incompleto encontrado com id ' . $id);
        }
    } else {
        return $this->failNotFound('Nenhum dado encontrado com id ' . $id);
    }
}
 public function showAtera($name=null) {

    $data = $this->request->getJSON();
    if ( $this->model->where('name', $name )->set(['completed' => $data->completed])->update()) {
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Dados alterados com sucesso'
            ]
        ];
        return $this->response->setJSON($response);
    }
   
    return $this->respond("dados invalidos");

     
    
   
}

    public function updateCategory($name = null)
    {
       
        // Obtém os dados JSON do corpo da requisição
        $data = $this->request->getJSON();

        // Procura a categoria com base no nome
        $category = $this->model->where('name', $name)->first();

        if (!$category) {
            // Categoria não encontrada, retorna um erro
            $response = [
                'status'   => 404,
                'error'    => 'Categoria não encontrada',
                'messages' => []
            ];
            return $this->response->setJSON($response);
        }

        // Atualiza as propriedades da categoria com os dados do corpo da requisição
        $category->category = $data->category;
        $category->color = $data->color;
     
        // Salva a categoria atualizada no banco de dados
       $this->model->save($category);

        // Resposta de sucesso
        $response = [
            'status'   => 200,
            'error'    => null,
            'messages' => [
                'success' => 'Dados alterados com sucesso'
            ]
        ];

        return $this->response->setJSON($response);
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