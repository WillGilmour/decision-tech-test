import { Component, Input } from '@angular/core';
import { FiltersService } from '../../services/filters.service'

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent {
	constructor (filtersService: FiltersService ) {
		this.filters = filtersService.filters;
	}
	filters: any
}