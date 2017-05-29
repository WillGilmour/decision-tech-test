import { Component } from '@angular/core';
import { DealsService } from './services/deals.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private dealsService: DealsService) {
    dealsService.getDeals().subscribe( data => { this.deals = data.deals } );
  }

  toggleMenu(){
  	this.menuOn = !this.menuOn;
  }

  menuOn = <boolean> false
  title = "start"
  deals = []
}
