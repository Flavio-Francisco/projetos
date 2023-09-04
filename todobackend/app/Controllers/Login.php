<?php
namespace App\Controllers;

use App\Models\TodoListModelUser;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;


class Login extends ResourceController{

use ResponseTrait;



public function auth(){
    
    $model = new TodoListModelUser();

    $query = $this->request->getJSON();
    $data = $model->where('name',$query->name )->first();

    if($data['name'] ==$query->name && $data['password'] == $query->password){

        return $this->respond($data);

    }

    
    
}


}

?>