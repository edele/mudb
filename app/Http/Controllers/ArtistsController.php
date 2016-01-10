<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use App\Artist;

class ArtistsController extends Controller
{
    public function index(Request $request)
    {
        $artists = Artist::paginate();

        return $artists;
    }

    public function store(Request $request)
    {
        $artist = new Artist($request->all());
        $artist->save();

        return ['ok'];
    }

    public function show($id)
    {
        $artist = Artist::find($id);
        $artist->load('labels');

        return $artist;
    }

    // public function update(Request $request, $id)
    // {
    //     $artist = Artist::find($id);

    //     $artist->update($request->all());
    //     $artist->curators()->sync($request->get('curators'));

    //     $request->session()->flash('status', 'Проект успешно изменен');
    //     return redirect('artists');
    // }

    // public function destroy($id)
    // {
    //     $artist = Artist::find($id);

    //     $artist->delete();

    //     return redirect('artists');
    // }
}
