import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { SearchmacchinaComponent } from './search-macchina-component/search-macchina.component';
import { CercaCaricoComponent } from './cerca-carico/cerca-carico.component';
import { CompaniesService } from './Services/companies.service';
import { macchinasService } from './Services/macchinas.service';
import { CompanyListComponent } from './company-list/company-list.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchmacchinaComponent,
    CercaCaricoComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'searchmacchina',
        component: SearchmacchinaComponent,
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
  providers: [macchinasService, CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
