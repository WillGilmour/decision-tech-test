import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DealsService } from './services/deals.service'

import { AppComponent } from './app.component';
import { DealGrid } from './components/dealGrid/dealGrid.component'

@NgModule({
  declarations: [
    AppComponent,
    DealGrid
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
