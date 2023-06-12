<?php
/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stores extends Model
{
    protected $table = 'store';

    public $timestamps = true; //by default timestamp false

    protected $fillable = ['uid','name','mobile','lat','lng','verified','address','descriptions','images',
    'cover','commission','open_time','close_time','isClosed','certificate_url','certificate_type',
    'rating','total_rating','cid','zipcode','status','extra_field'];

    protected $hidden = [
        'updated_at', 'created_at','commission'
    ];

    protected $casts = [
        'status' => 'integer',
        'verified' => 'integer',
        'isClosed' => 'integer',
    ];
}
