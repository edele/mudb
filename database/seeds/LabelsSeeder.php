<?php

use App\Label;
use Illuminate\Database\Seeder;

class LabelsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // muse
        Label::create(['name' => 'Warner Bros.']);
        Label::create(['name' => 'Helium 3']);
        Label::create(['name' => 'Taste']);
        Label::create(['name' => 'Mushroom']);
        Label::create(['name' => 'East West']);
        Label::create(['name' => 'Dangerous']);

        // radiohead
        Label::create(['name' => 'XL']);
        Label::create(['name' => 'Ticker Tape Ltd.']);
        Label::create(['name' => 'Hostess']);
        Label::create(['name' => 'TBD']);
        Label::create(['name' => 'Parlophone']);
        Label::create(['name' => 'Capitol']);

        // avenged sevengfold
        Label::create(['name' => 'Hopeless']);
        Label::create(['name' => 'Good Life']);
    }
}
