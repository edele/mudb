<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Label extends Model
{
    protected $guarded = ['id', 'created_at', 'updated_at'];

    public function artists()
    {
        return $this->belongsToMany('App\Artist');
    }
}
