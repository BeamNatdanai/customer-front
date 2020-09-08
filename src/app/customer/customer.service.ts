import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {
    constructor(private http: HttpClient){}

    fetchCustomer(): Observable<Object> {
        return this.http.get('http://127.0.0.1:3000/customer/');
    }

    addCustomer(obj: object): Observable<Object> {
        return this.http.post('http://127.0.0.1:3000/customer/', obj);
    }

    delCustomer(id: number): Observable<Object> {
        return this.http.delete(`http://127.0.0.1:3000/customer/${id}`);
    }

}
