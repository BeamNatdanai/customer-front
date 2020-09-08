import { Component } from '@angular/core';
import { CustomerService } from './customer/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private customerService: CustomerService){
    this.fetchCustomer();
  }

  customers;
  first_name = null;
  last_name = null;
  tel_no = null;

  fetchCustomer(){
      this.customerService.fetchCustomer().subscribe((res) => {
        this.customers = res;
      });
  }

  clearForm(){
    this.first_name = null;
    this.last_name = null;
    this.tel_no = null;
  }

  addCustomer(){
      const obj = {first_name: this.first_name, last_name: this.last_name, tel_no: this.tel_no};
      this.customerService.addCustomer(obj).subscribe((res) => {
        this.customers.push(res);
        this.clearForm();
      });
  }

  delCustomer(id: number){
    this.customerService.delCustomer(id).subscribe((res) => {
      this.fetchCustomer();
    });
  }

  onChildCallback(event: any){
      this.delCustomer(event);
  }

}
