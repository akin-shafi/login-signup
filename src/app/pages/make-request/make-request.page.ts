import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-make-request',
  templateUrl: './make-request.page.html',
  styleUrls: ['./make-request.page.scss'],
})
export class MakeRequestPage implements OnInit {
  constructor(private authService: AuthService) {}


  ngOnInit() {
  }
  logoutAction() {
    this.authService.logout();
  }

}
