<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    public function label()
    {
        return $this->belongsTo('App\Label');
    }
}
