<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Curl\Curl;

class WikiController extends Controller
{
    function getData($q)
    {
        $q = urlencode(str_replace(' ', '_', $q));
        $curl = new Curl;
        $curl->get('http://dbpedia.org/data/'. $q . '.json');

        $resp = json_decode($curl->response, true);

        foreach ($resp as $key => $value) {
            if ($key === 'http://dbpedia.org/resource/'. $q) {
                $result = $value;
            }
        }

        return $this->parseDbpediaArtist($resp);
    }

    function parseDbpediaArtist($resp)
    {
        $result = [];
        // $result['origin'] = $resp['http://dbpedia.org/property/origin'];

        return $resp;
    }

    public function search(Request $request)
    {
        $q = $request->get('q');
        $result = $this->getData($q);

        return $result;
    }
}
