import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ShipmentModalComponent } from './../shipment-modal/shipment-modal.component';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  
  shipments = [
    {
      Recipient:  "Prince Jide Sandsify limited",
      Address: "Kenneth Agbakuru Street, Lagos, Nigeria",
      waybillNo: "102026",
      shpstatus: "delieverd",
      created_on: "3/11/2020"
    },
    {
      Recipient:  "Fadelia Obina",
      Address: "Simson Street, Abule Egba Lagos, Nigeria",
      waybillNo: "101929",
      shpstatus: "Pending",
      created_on: "3/11/2020"
    }
  ];
  // public authUser: any;
  constructor(private modalCtr: ModalController) {}

  async openModal() {
    const modal = await this.modalCtr.create({
      component: ShipmentModalComponent
    });

    await modal.present();
  }
  

  ngOnInit() {
  }

}
