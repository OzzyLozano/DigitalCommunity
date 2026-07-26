<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Account\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ([
            'administrator',
            'publisher',
            'editor',
        ] as $role) {
            Role::firstOrCreate([
                'type' => $role,
            ]);
        }
    }
}
