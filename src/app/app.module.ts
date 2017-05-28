import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DealsService } from './services/deals.service';
import { FiltersService } from './services/filters.service';


import { AppComponent } from './app.component';
import { DealGridComponent } from './components/dealGrid/dealGrid.component';
import { FiltersComponent } from './components/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    DealGridComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DealsService, FiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
