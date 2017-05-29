import { Pipe, PipeTransform } from '@angular/core';
import { FiltersService } from '../services/filters.service'

@Pipe({
    name: 'filterdeals',
    pure: false
})


export class FilterDealsPipe implements PipeTransform {
	
	constructor( private filtersService: FiltersService){

	}
	
	transform(deals) {
		deals = this.filterByProductType(deals);
		deals = this.filterBySelection(deals);
		return deals;
	}

	private filterBySelection(array) {
		let testSelections = this.filtersService.selections;
		return array.filter((item) => {
			return this.testSpeed(item, testSelections.speed) && this.testData(item, testSelections.data)
		});
	}

	private testSpeed(item, selection){
		return selection === "Any" || item.speed.label === selection;
	}

	private testData(item, selection){
		if(!item.mobile && selection !== "Any"){
			return false;
		}
		return selection === "Any" || item.mobile.data.label === selection;
	}

	private filterByProductType(array) {
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