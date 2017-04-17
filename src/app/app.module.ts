import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { SearchTruckComponent } from './search-truck-component/search-truck.component';
import { CercaCaricoComponent } from './cerca-carico/cerca-carico.component';
import { CompaniesService } from './Services/companies.service';
import { TrucksService } from './Services/trucks.service';
import { CompanyListComponent } from './company-list/company-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchTruckComponent,
    CercaCaricoComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'searchTruck',
        component: SearchTruckComponent,
      },
      {
        path: 'searchThings',
        component: CercaCaricoComponent,
      },

      {
        path: 'companylist',
        component: CompanyListComponent,
      },
      
    ])
  ],
  providers: [TrucksService, CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
