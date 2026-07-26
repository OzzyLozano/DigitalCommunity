<?php

namespace App\Models;

use App\Models\Account\Role;
use App\Models\Post;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

#[Fillable(['name', 'lastname', 'email', 'phone', 'password', 'role_id', 'belongs_to_id', 'belongs_to_type'])]
#[Hidden(['password', 'two_factor_secret', 'two_factor_recovery_codes', 'remember_token'])]

class Account extends Authenticatable {
  use HasFactory, Notifiable;

  protected function casts(): array {
    return [
      'email_verified_at' => 'datetime',
      'password' => 'hashed',
      'two_factor_confirmed_at' => 'datetime',
    ];
  }

  public function role() {
    return $this->belongsTo(Role::class, 'role_id');
  }
  public function belongs_to(): MorphTo {
    return $this->morphTo();
  }
  public function posts() {
    return $this->hasMany(Post::class, 'published_by');
  }
}
