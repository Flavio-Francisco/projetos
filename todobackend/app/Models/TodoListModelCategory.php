<?php

namespace App\Models;

use CodeIgniter\Model;

class TodoListModelCategory extends Model
{
    protected $DBGroup          = 'default';
    protected $table            = 'category';
    protected $primaryKey       = 'id';
    protected $useAutoIncrement = true;
    protected $returnType       = 'array';
    protected $useSoftDeletes   = false;
    protected $protectFields    = true;
    protected $allowedFields    = [
        'name',
        'icon',
        'task_id'

    ];

    //relacionamento entre as tabelas
    public function task()
    {
        return $this->belongsTo(TodoListModelTask::class, 'task_id');
    }



}
