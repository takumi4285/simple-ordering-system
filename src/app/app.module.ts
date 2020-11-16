import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { CustomerListComponent } from './maintenance/customer-list/customer-list.component';
import { EmployeeListComponent } from './maintenance/employee-list/employee-list.component';
import { RouterModule} from '@angular/router';
import { MainMenuComponent } from './common/main-menu/main-menu.component';
import { OrderEntryComponent } from './maintenance/order-entry/order-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainMenuComponent,
    CustomerListComponent,
    EmployeeListComponent,
    OrderEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: MainMenuComponent },
      { path: 'customer', component: CustomerListComponent },
      { path: 'employee', component: EmployeeListComponent },
      { path: 'order', component: OrderEntryComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
