import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { AppComponent } from './app.component';
import { DealsService } from './services/deals.service'
import { FiltersService } from './services/filters.service'
import { MockFiltersService } from './services/mocks/mockFilters.service'
import { DealGridComponent } from './components/dealGrid/dealGrid.component'
import { FiltersComponent } from './components/filters/filters.component'
import { FilterDealsPipe } from './pipes/filterDeals.pipe'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, FormsModule],
      declarations: [
        AppComponent,
        DealGridComponent,
        FiltersComponent,
        FilterDealsPipe
      ],
      providers: [        
        { provide: XHRBackend, useClass: MockBackend },
        DealsService,
        { provide: FiltersService, useClass: MockFiltersService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'start'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('start');
  }));

});
