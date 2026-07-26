<?php

namespace App\Models\News;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Relations\MorphMany;

use App\Models\Account;
use App\Models\Post;

#[Fillable(['name', 'description', 'address', 'email', 'phone'])]

class NewsNetwork extends Model {
  public function accounts(): MorphMany {
    return $this->morphMany(Account::class, 'belongs_to');
  }
  public function posts(): MorphMany {
    return $this->morphMany(Post::class, 'publisher');
  }
}
