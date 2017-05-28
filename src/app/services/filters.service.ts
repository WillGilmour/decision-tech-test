import { Injectable } from '@angular/core';

export class FiltersService {
	constructor () {
		this.filters = {
			Broadband: false,
			TV: false,
			Mobile: false
		}
	}
	filters: {
		Broadband: boolean,
		TV: boolean,
		Mobile: boolean
	}
}