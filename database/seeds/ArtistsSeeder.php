<?php

use App\Artist;
use App\Label;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ArtistsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $muse = new Artist([
            'name' => 'Muse',
            'origin' => 'Teignmouth, Devon, England',
            'activeFrom' => Carbon::create(1994),
            'activeTo' => null,
            'source' => 'wikipedia',
        ]);

        $muse->save();
        $muse->labels()->attach([
            Label::where(['name' => 'Warner Bros.'])->first()->id,
            Label::where(['name' => 'Helium 3'])->first()->id,
            Label::where(['name' => 'Taste'])->first()->id,
            Label::where(['name' => 'Mushroom'])->first()->id,
            Label::where(['name' => 'East West'])->first()->id,
            Label::where(['name' => 'Dangerous'])->first()->id
        ]);

        $radiohead = new Artist([
            'name' => 'Radiohead',
            'origin' => 'Abingdon, Oxfordshire, England',
            'activeFrom' => Carbon::create(1985),
            'activeTo' => null,
            'source' => 'wikipedia',
        ]);

        $radiohead->save();
        $radiohead->labels()->attach([
            Label::where(['name' => 'XL'])->first()->id,
            Label::where(['name' => 'Ticker Tape Ltd.'])->first()->id,
            Label::where(['name' => 'Hostess'])->first()->id,
            Label::where(['name' => 'TBD'])->first()->id,
            Label::where(['name' => 'Parlophone'])->first()->id,
            Label::where(['name' => 'Capitol'])->first()->id
        ]);

        $a7x = new Artist([
            'name' => 'Avenged Sevenfold',
            'origin' => 'Huntington Beach, California, U.S.',
            'activeFrom' => Carbon::create(1999),
            'activeTo' => null,
            'source' => 'wikipedia',
        ]);

        $a7x->save();
        $a7x->labels()->attach([
            Label::where(['name' => 'Warner Bros.'])->first()->id,
            Label::where(['name' => 'Hopeless'])->first()->id,
            Label::where(['name' => 'Good Life'])->first()->id,
        ]);
    }
}
