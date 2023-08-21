<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AddForeignKeyToTable extends Migration
{
    public function up()
    {
        $this->db->query('ALTER TABLE task ADD CONSTRAINT fk_task FOREIGN KEY (user_id) REFERENCES user(id)');
    }

    public function down()
    {
        $this->db->query('ALTER TABLE task DROP FOREIGN KEY fk_task');
    }
}
