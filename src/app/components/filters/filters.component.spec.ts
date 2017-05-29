import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { FiltersComponent } from './filters.component';
import { FiltersService } from '../../services/filters.service';
import { MockFiltersService } from '../../services/mocks/mockFilters.service';

describe('FiltersComponent', () => {

	let html: HTMLElement;
	let fixture: ComponentFixture<FiltersComponent>;
	let comp: FiltersComponent;
	let dbFilterPanel: DebugElement

	beforeEach(async() => {
		TestBed.configureTestingModule({
			declarations: [ FiltersComponent],
			imports: [FormsModule]
			providers: [
        		{ provide: FiltersService, useClass: MockFiltersService },
			]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FiltersComponent);
		comp = fixture.componentInstance;
		dbFilterPanel = fixture.debugElement.query(By.css(".filters"));
	});

	it('Visibility class should not be applied when visibility toggle is set to false', ()=> {
		comp.on = false;
		fixture.detectChanges();
		expect(dbFilterPanel.classes['filters--on']).toBe(false);
	})


	it('Visibility class should be applied when visibility toggle is set to true', ()=> {
		comp.on = true;
		fixture.detectChanges();
		expect(dbFilterPanel.classes['filters--on']).toBe(true);
	})
})

