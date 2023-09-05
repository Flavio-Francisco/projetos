<?php

namespace App\Filters;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTAuthMiddleware implements FilterInterface
{
    use ResponseTrait;

    public function before(RequestInterface $request, $arguments = null)
    {
        $key = $_ENV['KEY'];

        // Verifique se o token está presente no cabeçalho da solicitação
        $token = $request->getServer('HTTP_AUTHORIZATION');

        if (!$token) {
            
            $response = service('response');
            $data = ['error' => 'Token não fornecido'];
            return $response->setJSON($data)->setStatusCode(401);
        }

        try {
            // Verifique o token JWT
            $decoded = JWT::decode($token, new Key($key, 'HS256'));

            // Mensagem de token Expirado
        } catch ( ExpiredException $e) {
            $response = service('response');
            $data = ['error' => 'Token expirado'];
            return $response->setJSON($data)->setStatusCode(401);
            
            // Mensagem de token invalido
        } catch (\Exception $e) {
            $response = service('response');
            $data = ['error' => 'Token inválido'];
            return $response->setJSON($data)->setStatusCode(401);
        }

       
      // Exemplo: $user = $decoded->data;

        return $request;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        
    }
}
