<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Cast;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

use App\Models\Account;

#[Fillable(['title', 'description', 'content', 'assets', 'sources', 'publisher', 'published_by'])]

class Post extends Model
{
    #[Cast('array')]
    protected $assets;

    #[Cast('array')]
    protected $sources;

  public function author(): BelongsTo {
    return $this->belongsTo(Account::class, 'published_by');
  }
  public function publisher(): MorphTo {
    return $this->morphTo();
  }
}
