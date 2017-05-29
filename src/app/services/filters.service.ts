import { Injectable } from '@angular/core';

export class FiltersService {
	constructor () {
		this.filters = {
			Broadband: false,
			TV: false,
			Mobile: false,
		}
		this.selections = {
			speed: "Any",
			data: "Any"
		}
	}
	filters: {
		Broadband: boolean,
		TV: boolean,
		Mobile: boolean,
	}
	selections: {
		speed: string,
		data: string
	}
}