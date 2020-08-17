import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from './../../config/auth-constants';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { ToastService } from './../../services/toast.service';

@Component({
selector: 'app-signup',
templateUrl: './signup.page.html',
styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
postData = {
first_name: '',
last_name: '',
address: '',
email: '',
phone: '',
username: '',
password: '',
confirm_password: ''
};

constructor(
private authService: AuthService,
private toastService: ToastService,
private storageService: StorageService,
private router: Router
) {}

ngOnInit() {}

// validateInputs() {
//   let first_name = this.postData.first_name.trim();
//   let last_name = this.postData.last_name.trim();
//   let address = this.postData.address.trim();
//   let email = this.postData.email.trim();
//   let phone = this.postData.phone.trim();
//   let username = this.postData.username.trim();
//   let password = this.postData.password.trim();
//   let confirm_password = this.postData.confirm_password.trim();
  
  
//   return (
//     this.postData.first_name &&
//     this.postData.last_name &&
//     this.postData.address &&
//     this.postData.email &&
//     this.postData.phone &&
//     this.postData.username &&
//     this.postData.password &&
//     this.postData.confirm_password &&
    
//     first_name.length > 0 &&
//     last_name.length > 0 &&
//     address.length > 0 &&
//     email.length > 0 &&
//     phone.length > 0 &&
//     username.length > 0 &&
//     password.length > 0 &&
//     confirm_password.length > 0
//   );
// }

signupAction() {
  let first_name = this.postData.first_name.trim();
  let last_name = this.postData.last_name.trim();
  let address = this.postData.address.trim();
  let email = this.postData.email.trim();
  let phone = this.postData.phone.trim();
  let username = this.postData.username.trim();
  let password = this.postData.password.trim();
  let confirm_password = this.postData.confirm_password.trim();
  
  if(first_name == ""){
    this.toastService.presentToast(
      'First name is required.'
    );
  }else if(last_name == ""){
    this.toastService.presentToast(
      'last name is required.'
    );
  }else if(address == ""){
    this.toastService.presentToast(
      'Please enter your Home or Office Address' 
    );
  }else if(email == ""){
    this.toastService.presentToast(
      'Email is required.'
    );
  }else if(username == ""){
    this.toastService.presentToast(
      'username is required.'
    );
  }else if(phone == ""){
    this.toastService.presentToast(
      'Phone number field cannot be blank.'
    );
  }else if(password == ""){
    this.toastService.presentToast(
      'password cannot be blank.'
    );
  }else if(confirm_password == ""){
    this.toastService.presentToast(
      'Re-confirm Password'
    );
  }else if (password !== confirm_password){
    this.toastService.presentToast(
      'Password mismatch.'
    );
  }else  {
    this.authService.signup(this.postData).subscribe(
      (res: any) => {
        if (res.userData) {
          // Storing the User data.
          this.storageService
            .store(AuthConstants.AUTH, res.userData)
            .then(res => {
              this.router.navigate(['home']);
            });
        } else {
          this.toastService.presentToast(
            'Data alreay exists, please enter new details.'
          );
        }
      },
      (error: any) => {
        this.toastService.presentToast('Network Issue.');
      }
    );
  } 
}
}