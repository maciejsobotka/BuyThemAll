import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from '../models/product';
import { IVoivodeship } from '../models/voivodeship';

@Injectable()
export class DataService {
  private apiHost = 'http://localhost:50126';

  constructor(private http: Http) {}

  getProducts(apiUrl: string): Observable<IProduct[]> {
    return this.http.get(this.apiHost + apiUrl)
        .map((res: Response) => res.json())
        .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || 'Server error');
        });
  }

  getProduct(prodId: string): Observable<IProduct> {
    return this.http.get(this.apiHost + '/api/Products/GetProduct/' + prodId)
        .map((res: Response) => res.json())
        .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || 'Server error');
        });
  }

  getVoivodeships(): Observable<IVoivodeship[]> {
    return this.http.get(this.apiHost + '/api/Voivodeships/GetVoivodeships')
    .map((res: Response) => res.json())
    .catch((error: any) => {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    });
  }
}
