/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.page.html',
  styleUrls: ['./api-error.page.scss'],
})
export class ApiErrorPage implements OnInit {

  constructor(
    public util: UtilService
  ) {

  }

  ngOnInit() {
  }

  onRefresh() {
    window.location.reload();
  }
}
