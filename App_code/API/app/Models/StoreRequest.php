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

class StoreRequest extends Model
{
    protected $table = 'store_request';

    public $timestamps = true; //by default timestamp false

    protected $fillable = [
        'email', 'password', 'first_name','last_name','mobile','country_code','cover','lat','lng','address','name','descriptions',
        'open_time','close_time','cid','zipcode','extra_field','status'
    ];

    protected $hidden = [
        'password'
    ];

    protected $casts = [
        'status' => 'integer',
    ];
}
