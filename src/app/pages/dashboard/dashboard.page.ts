import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { EstimateModalComponent } from './../estimate-modal/estimate-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

services =  [
  {id: "1", service_type: "Local Delivery (Lagos Only)", image: "delivery.png"},
  {id: "2", service_type: "Nation Wide Delivery", image: "nation-d.png"},
  {id: "3", service_type: "Export International", image: "export-int.png"},
  // {id: "4", service_type: "Terms and Condition", image: "terms.png"}
];
  public authUser: any;

  constructor(
    private router: Router,
    private auth: AuthService, 
    private modalCtr: ModalController
  ) {}

  async getEstimateModal(service) {
    const modal = await this.modalCtr.create({
      component: EstimateModalComponent,
      componentProps: {
        id: service.id, 
        service_type: service.service_type
      }
    });
    await modal.present();
    // console.log(this.o_addressInput);
    // let element = event.target.id;
    // if(id == 1){
    //   console.log(this.o_addressInput)
    // }
  }
  

  
// feed.page.html
  ngOnInit() {
    this.auth.userData$.subscribe((res:any) => {
      this.authUser = res;
    });
  }
  

}
