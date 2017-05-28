import { TestBed, async } from '@angular/core/testing';
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
import { DealGridComponent } from './components/dealGrid/dealGrid.component'



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [
        AppComponent,
        DealGridComponent
      ],
      providers: [        
        { provide: XHRBackend, useClass: MockBackend },
        DealsService
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
