import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { SearchmacchinaComponent } from './components/search-macchina-component/search-macchina.component';
import { CercaCaricoComponent } from './components/cerca-carico/cerca-carico.component';
import { CompanyService } from './Services/companies.service';
import { macchinasService } from './Services/macchinas.service';
import { carichiService} from './Services/carichi.service';

import { CarichiComponent} from './components/carico/carichi.component';
import { caricoDetail } from './components/carico/Carico-Detail/caricoDetail.component';


import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetail } from './components/companies/companyDetail/companyDetail.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchmacchinaComponent,
    CercaCaricoComponent,

    CompaniesComponent,
    CompanyDetail,

    CarichiComponent,
    caricoDetail
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
        path: 'companies',
        component: CompaniesComponent,
      },
      
      {
        path: 'carichi',
        component: CarichiComponent,
      },      
    ])
  ],
  providers: [macchinasService, CompanyService, carichiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
