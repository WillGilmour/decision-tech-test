import { Component } from '@angular/core';
import { DealsService } from './services/deals.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private dealsService: DealsService) {
    dealsService.getDeals().subscribe( deals => { this.deals = deals } );
  }

  title = "start"
  deals = []

}
