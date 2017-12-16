import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IProduct } from '../models/product';
import { IShipmentType } from '../models/shipment-type';
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

  getShipmentTypes(): Observable<IShipmentType[]> {
    return this.http.get(this.apiHost + '/api/Enums/GetShipmentTypes')
        .map((res: Response) => res.json())
        .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || 'Server error');
        });
  }

  getVoivodeships(): Observable<IVoivodeship[]> {
    return this.http.get(this.apiHost + '/api/Enums/GetVoivodeships')
        .map((res: Response) => res.json())
        .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || 'Server error');
        });
  }

  getParcelLockers(city: string): Observable<any> {
    return this.http.get('https://api-shipx-pl.easypack24.net/v1/points?type=parcel_locker_only&status=Operating&per_page=200&city=' + city)
        .map((res: Response) => res.json())
        .catch((error: any) => {
            console.log(error);
            return Observable.throw(error.json().error || 'Server error');
        });
  }
}
