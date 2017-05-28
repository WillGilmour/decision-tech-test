import { async, TestBed, inject } from '@angular/core/testing';
import { dealsDataStub } from '../services/deals.stub';
import { FilterDealsPipe } from './filterDeals.pipe'
import { FiltersService } from '../services/filters.service'
import { MockFiltersService } from '../services/mocks/mockFilters.service'

describe('FilterDealsPipe', () => {

	let deals =  JSON.parse(dealsDataStub).deals;

	beforeEach(async() => {
		TestBed.configureTestingModule({
			providers: [
        		{ provide: FiltersService, useClass: MockFiltersService }
			]
		});
	});

	it('GIVEN results WHEN filtering by Broadband THEN show the 3 broadband only deals', inject([FiltersService], (filtersService) => {
		
		filtersService.filters.Broadband = true;
		filtersService.filters.Mobile = false;
		filtersService.filters.TV = false;

		let pipe = new FilterDealsPipe(filtersService);
		let results = pipe.transform(deals);
		expect(results.length).toBe(3);
		for(let result of results){
			expect(result.productTypes.indexOf("Broadband")).not.toBeLessThan(0);
			expect(result.productTypes.indexOf("Mobile")).toBeLessThan(0);
			expect(result.productTypes.indexOf("TV")).toBeLessThan(0);
		}
	}));

	it('GIVEN results WHEN filtering by Broadband AND Tv THEN show the 2 deals for broadband' , inject([FiltersService], (filtersService) => {
		
		filtersService.filters.Broadband = true;
		filtersService.filters.Mobile = false;
		filtersService.filters.TV = true;

		let pipe = new FilterDealsPipe(filtersService);
		let results = pipe.transform(deals);
		expect(results.length).toBe(2);
		for(let result of results){
			expect(result.productTypes.indexOf("Broadband")).not.toBeLessThan(0);
			expect(result.productTypes.indexOf("Mobile")).toBeLessThan(0);
			expect(result.productTypes.indexOf("TV")).not.toBeLessThan(0);
		}
	}));


	it('GIVEN results WHEN filtering by Broadband AND Mobile THEN show the single deal for broadband and Mobile only' , inject([FiltersService], (filtersService) => {
		
		filtersService.filters.Broadband = true;
		filtersService.filters.Mobile = true;
		filtersService.filters.TV = false;

		let pipe = new FilterDealsPipe(filtersService);
		let results = pipe.transform(deals);
		expect(results.length).toBe(1);
		for(let result of results){
			expect(result.productTypes.indexOf("Broadband")).not.toBeLessThan(0);
			expect(result.productTypes.indexOf("Mobile")).not.toBeLessThan(0);
			expect(result.productTypes.indexOf("TV")).toBeLessThan(0);
		}
	}));


});