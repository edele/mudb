<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Label;

class LabelsController extends Controller
{
    public function index(Request $request)
    {
        $labels = Label::paginate();

        return $labels;
    }

    public function show($id)
    {
        $labels = Label::find($id);
        $labels->load('artists');

        return $labels;
    }
}
