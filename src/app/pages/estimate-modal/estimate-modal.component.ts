// import { element } from 'protractor';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component,  Input, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-estimate-modal',
  templateUrl: './estimate-modal.component.html',
  styleUrls: ['./estimate-modal.component.scss'],
})
export class EstimateModalComponent {
  postData = {
    o_state: '',d_state: '',
  };

  @ViewChild('myDiv') myDiv: ElementRef;
  @ViewChild('dSCountry') dSCountry: ElementRef;
  @ViewChild('ItemWeight') ItemWeight: ElementRef;
  @ViewChild('oStateWrapper') oStateWrapper: ElementRef;
  @ViewChild('dStateWrapper') dStateWrapper: ElementRef;

  requireAll(){
    return this.validations_form = this.formBuilder.group({
      o_state: new FormControl('', Validators.required),
      d_state: new FormControl('', Validators.required),
      d_country: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required)
    });
  }
  localDelivery(){
        this.postData.o_state = "Lagos";
        this.postData.d_state = "Lagos";
        this.dSCountry.nativeElement.style.display = "none";
        this.ItemWeight.nativeElement.style.display = "none";
        this.oStateWrapper.nativeElement.style.display = "none";
        this.dStateWrapper.nativeElement.style.display = "none";
  }
  
  ngAfterViewInit() {
      let eID = this.myDiv.nativeElement;
      if(eID.innerHTML == 1){
        this.localDelivery();
      }else if(eID.innerHTML == 2){
        this.postData.o_state = "Lagos";
        this.requireAll();
      }else if(eID.innerHTML == 3){
        this.requireAll();
      }
  }
  @Input() id: number;
  @Input() service_type: string;
  
  validations_form: FormGroup;
 

  
  constructor(
    private modalCtrl: ModalController,  
    public formBuilder: FormBuilder
  ) { }
  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      o_addressInput: new FormControl('', Validators.required),
      d_addressInput: new FormControl('', Validators.required),
      o_state: new FormControl('', null),
      d_state: new FormControl('', null),
      d_country: new FormControl('', null),
      weight: new FormControl('', null)
      
    });
  
    // console.log(id)
    
  }
 
  validation_messages = {
    'o_addressInput': [
      { type: 'required', message: 'Origin Address is required.' }
    ],
    
    'd_addressInput': [
      { type: 'required', message: 'Destination Address is required.' }
    ],
    'o_state': [
      { type: '', message: '' }
    ],
    'd_state': [
      { type: '', message: '' }
    ],
    'd_country': [
      { type: '', message: '' }
    ],
    'weight': [
      { type: '', message: '' }
    ],

  };
  dismissModal(){
    this.modalCtrl.dismiss();
  }
  onSubmit(values){
    console.log(values.o_addressInput);
    // this.router.navigate(["/user"]);
  }

  

  

}
