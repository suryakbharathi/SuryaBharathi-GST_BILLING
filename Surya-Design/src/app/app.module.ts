import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radiobutton/radiobutton';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import {SuryaRoutingModule } from './surya-routing/surya-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { FirstpageService } from './firstpage.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http'; 

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent
  ],
  imports: [
    SuryaRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [FirstpageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
