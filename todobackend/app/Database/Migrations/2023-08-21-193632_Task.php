<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class Task extends Migration
{    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => true,
                'auto_increment' => true,
            ],
            'name' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            'completed' => [
                'type' => 'TINYINT',
                'constraint' => '1',
            ],
          
        ]);
        $this->forge->addPrimaryKey('id');
        $this->forge->createTable('task');

    }

    public function down()
    {
        $this->forge->dropTable('task');
    }
}
