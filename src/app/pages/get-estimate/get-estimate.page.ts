import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-get-estimate',
  templateUrl: './get-estimate.page.html',
  styleUrls: ['./get-estimate.page.scss'],
})
export class GetEstimatePage implements OnInit {
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmiCalPage');

  }
  ngOnInit() {
  }

}
