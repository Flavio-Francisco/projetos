<?php
namespace App\Controllers;

use App\Models\TodoListModelUser;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use Firebase\JWT\JWT;


class Login extends ResourceController{

use ResponseTrait;

//where('name',$query->name )->first()
public function __construct(){

    $this->model =  new TodoListModelUser();
    
}

public function authJwt(){
    
  

    $query = $this->request->getJSON();
    $data = $this->model->where('name',$query->name )->first();

    if($data['name'] ==$query->name && $data['password'] == $query->password){

        $payload =[
            // temp de expiração
            "exp"=>time() + 3600,
            //data de criação
            "iat"=> time(),
            //dados do usuario
            "data" =>$data  
        ];

        $encode= JWT::encode($payload, $_ENV['KEY'],"HS256");

        return $this->respond($encode);

    }

    
    
}


}

?>