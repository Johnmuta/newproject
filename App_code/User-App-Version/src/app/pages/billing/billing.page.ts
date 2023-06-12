/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery Delivery App  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2021-present initappz.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.page.html',
  styleUrls: ['./billing.page.scss'],
})
export class BillingPage implements OnInit {
  orders: any[] = [];
  stores: any[] = [];
  status: any[] = [];
  constructor(
    private modalController: ModalController,
    private navParam: NavParams,
    public util: UtilService
  ) {
    this.orders = this.navParam.get('orders');
    this.stores = this.navParam.get('stores');
    this.status = this.navParam.get('status');
    console.log(this.orders, this.stores, this.status);
  }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  getStoreName(id) {
    const item = this.stores.filter(x => x.uid === id);
    if (item && item.length) {
      return item[0].name;
    }
    return 'Store';
  }

  getOrderStatus(id) {
    const item = this.status.filter(x => x.id === id);
    if (item && item.length) {
      return this.util.translate(item[0].status);
    }
    return 'created';
  }

  getTotalBilling(item) {
    const total = item.orderItemTotal + item.orderTaxAmount + item.shippingPrice;
    const discount = item.orderDiscount + item.orderWalletDiscount;
    return total - discount > 0 ? total - discount : 0;
  }
}
