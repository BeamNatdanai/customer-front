import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerService } from './customer/customer.service';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
