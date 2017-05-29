import { FiltersService } from '../filters.service'

export class MockFiltersService extends FiltersService {
	filters: {
		Broadband: false,
		TV: false,
		Mobile: false
	}
	selections: {
		speed: "Any",
		data: "Any"
	}
}