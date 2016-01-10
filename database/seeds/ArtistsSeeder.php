<?php

use App\Artist;
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
        Artist::create([
            'name' => 'Muse',
            'origin' => 'Teignmouth, Devon, England',
            'label' => 1,
            'activeFrom' => Carbon::create(1994),
            'activeTo' => null,
        ]);
    }
}
