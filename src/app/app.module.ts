import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeleComponent } from './listele/listele.component';
import {BackEndService} from './back-end.service';
import {HttpClientModule} from '@angular/common/http';
import {DevExtremeModule} from 'devextreme-angular';
import { Listele2Component } from './listele2/listele2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeleComponent,
    Listele2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule
  ],
  providers: [BackEndService],
  bootstrap: [AppComponent]
})
export class AppModule { }
