import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';


// import { AppComponent } from './app.component';

@NgModule({
  // declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCokSl0rUpbldTsD-sfTJmHW5y6EqwO8r4'
    // })
  ],
 
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {}
