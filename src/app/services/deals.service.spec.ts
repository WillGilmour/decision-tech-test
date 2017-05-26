import { TestBed, async, inject } from '@angular/core/testing';

import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MockBackend } from '@angular/http/testing';
import { DealsService } from './deals.service';
import { DealsStub } from './deals.stub'

describe('DealsService', () => {
        
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        DealsService,
        DealsStub,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    }).compileComponents();
  }));

  describe('getDeals', () => {
    it('should provide an object containing a populated deals array', inject([DealsService, XHRBackend, DealsStub], (dealsService, mockBackend, dealsStub) => {

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: dealsStub.data
          })));
        });

        dealsService.getDeals().subscribe( (data) => {
        	expect(data.deals).toBeDefined(); 
        	expect(data.deals.length).toBeDefined(); 
        	expect(data.deals.length).not.toBeLessThan(1);
        });
    }));
  });

});