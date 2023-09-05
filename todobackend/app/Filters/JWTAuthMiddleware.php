<?php

namespace App\Filters;

use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;
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
            return $this->failUnauthorized('Token não fornecido');
        }

        try {
            // Verifique o token JWT
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
        } catch (ExpiredException $e) {
            return $this->failUnauthorized('Token expirado');
        } catch (\Exception $e) {
            return $this->failUnauthorized('Token inválido');
        }

        // Você pode acessar os dados do usuário a partir de $decoded->data
      //   Exemplo: $user = $decoded->data;

        return $request;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Este método não requer implementação para autenticação JWT.
    }
}
