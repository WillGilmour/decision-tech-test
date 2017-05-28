import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { By } from '@angular/platform-browser';
import { DealGridComponent } from './dealGrid.component';
import { dealsDataStub } from '../../services/deals.stub';


import { FiltersService } from '../../services/filters.service';
import { MockFiltersService } from '../../services/mocks/mockFilters.service';

describe('DealGridComponent', () => {

	let html: HTMLElement;
	let fixture: ComponentFixture<DealGridComponent>;
	let comp: DealGridComponent;
	let dbTable: DebugElement
	let dbTableCell: DebugElement



	beforeEach(async() => {
		TestBed.configureTestingModule({
			declarations: [ DealGridComponent]
			providers: [
        		{ provide: FiltersService, useClass: MockFiltersService },
			]
		}).compileComponents();
	});

	beforeEach(() => {
	    fixture = TestBed.createComponent(DealGridComponent);
	    comp = fixture.componentInstance;
	    comp.deals = JSON.parse(dealsDataStub).deals;
	    dbTable = fixture.debugElement.query(By.css("table.deal-grid"));
	    fixture.detectChanges();
	    dbTableCell = fixture.debugElement.query(By.css(".deal-grid__body > tr:first-child > td:first-child"));
	  });

	it('should render a table', () => {
		expect(dbTable).not.toBeNull();
	});

	it('should render deals content', ()=> {
		expect(dbTableCell.nativeElement.textContent).toContain("Unlimited Broadband & Weekend Calls");
	});
})

