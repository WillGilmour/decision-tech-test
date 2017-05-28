import { Component, Input } from '@angular/core';
import { DealsService } from '../../services/deals.service'

@Component({
  selector: 'deal-grid',
  templateUrl: './dealGrid.component.html',
  styleUrls: ['./dealGrid.component.scss']
})

export class DealGridComponent {

  @Input() deals: any[]

}