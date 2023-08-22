<?php

namespace App\Models;

use CodeIgniter\Model;

class TodoListModelTask extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'task';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'name',
        'completed',
        'user_id'

    ];

    //relacionamento entre as tabelas
    public function usuario()
    {
        return $this->belongsTo(TodoListModelUser::class, 'user_id');
    }



}
