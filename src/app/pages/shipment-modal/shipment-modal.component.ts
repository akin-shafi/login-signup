import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shipment-modal',
  templateUrl: './shipment-modal.component.html',
  styleUrls: ['./shipment-modal.component.scss'],
})
export class ShipmentModalComponent {

  constructor(private modalCtrl: ModalController) { }
  
  dismissModal(){
    this.modalCtrl.dismiss();
  }
  onDeposit(){}
}
