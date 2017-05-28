import { Pipe, PipeTransform } from '@angular/core';
import { FiltersService } from '../services/filters.service'

@Pipe({
    name: 'filterdeals',
    pure: false
})


export class FilterDealsPipe implements PipeTransform {
	
	constructor( private filtersService: FiltersService){

	}
	
	transform(allDeals) {
		return allDeals
	}

}