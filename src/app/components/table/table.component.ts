import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'customer-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input('data_list') customers = [];
  @Output() onDelCus = new EventEmitter<number>();
  constructor() {
    console.log('customers => ', this.customers);
  }

  ngOnInit(): void {
  }

  delCustomer(id: number){
    this.onDelCus.emit(id);
  }

}
