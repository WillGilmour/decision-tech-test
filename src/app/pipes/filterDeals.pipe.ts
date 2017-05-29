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
		return this.filter(allDeals)
	}

	private filter(array) {
		let testProductTypes = this.filtersService.filters;

		if(this.checkFilters(testProductTypes)){
			return array;
		}

		return array.filter((item) => {
			return this.testMultipleProductTypes(item.productTypes, testProductTypes)
		});
	}

	private checkFilters(productTypeStrings){
		
		let filtersAllFalse = <boolean> true;

		for (var id in productTypeStrings){
			filtersAllFalse = filtersAllFalse && !productTypeStrings[id];
		}

		return filtersAllFalse;
	}

	private testProductType(productTypes, productTypeString) {
		return productTypes.indexOf(productTypeString) > -1;
	}

	private testMultipleProductTypes(productTypes, productTypeStrings){
		let passes = <boolean> true;

		for (var id in productTypeStrings){
			passes = passes && (this.testProductType(productTypes, id) === productTypeStrings[id]);
		}

		return passes;		
	}

}