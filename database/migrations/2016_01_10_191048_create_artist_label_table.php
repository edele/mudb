<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArtistLabelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artist_label', function (Blueprint $table) {
            $table->integer('artist_id')->unsigned();
            $table->foreign('artist_id')->references('id')->on('artists')->onDelete('cascade');
            $table->integer('label_id')->unsigned();
            $table->foreign('label_id')->references('id')->on('labels')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('artist_label', function(Blueprint $table){
            $table->dropForeign('artist_label_artist_id_foreign');
            $table->dropForeign('artist_label_label_id_foreign');
        });

        Schema::drop('artist_label');
    }
}
