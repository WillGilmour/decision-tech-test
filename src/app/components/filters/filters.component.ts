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
		this.selections = filtersService.selections;
		this.speedOptions = [
			"Any",
			"17",
			"52",
			"76"
		]
		this.mobileDataOptions = [
			"Any",
			"2 GB",
			"5 GB"
		]
	}
	filters: any
	selections: any
	speedOptions: string[]
	mobileDataOptions: string[]
}