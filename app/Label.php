<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Label extends Model
{
    public function label()
    {
        return $this->hasMany('App\Artist');
    }
}
