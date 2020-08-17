import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = "Dasboard";
  // pageTitle(){
  //   if()
  // }
  constructor() { }

  ngOnInit() {
    // page_title: 'Da',
  }
  

}
