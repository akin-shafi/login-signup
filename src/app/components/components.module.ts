import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular'; 


@NgModule({
  declarations: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    HeaderComponent
  ],
  exports: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule 
  ]
})
export class ComponentsModule { }
