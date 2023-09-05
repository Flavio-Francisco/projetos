<?php
namespace App\Controllers;

use App\Models\TodoListModelUser;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;


class Login extends ResourceController{

use ResponseTrait;


public function __construct(){

    $this->model =  new TodoListModelUser();
    
}

public function authJwt(){
    
  

    $query = $this->request->getJSON();
    $data = $this->model->where('name',$query->name )->first();
    $key = $_ENV['KEY'];

    if($data['name'] ==$query->name && $data['password'] == $query->password){

    
        $payload =[
            // tempo de expiração
            "exp"=>time() + 100,
            //data de criação
            "iat"=> time(),
            //dados do usuario
            "data" =>$data  
        ];
                // gerando o token
        $jwt = JWT::encode($payload, $key, 'HS256');
        
                //criando uma nova chave com o token
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
        
        return $this->respond($jwt);

    }

    
    
}


}

?>