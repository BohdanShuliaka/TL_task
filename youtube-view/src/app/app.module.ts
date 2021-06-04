import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ApiService } from './api/services/youtube-data-service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material-module';
import {FormsModule} from '@angular/forms';
import {ChannelsStateFacade} from './api/services/channels.facade';
import {StateService} from './api/services/state.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [ApiService, ChannelsStateFacade, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
