import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class DealsService {
	constructor (private http: Http) {}

	getDeals(): Observable <any> {
	   return this.http.get('assets/deals.json')
      	.map(res => res.json())
	}
}