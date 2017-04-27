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
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetail } from './components/companies/companyDetail/companyDetail.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchmacchinaComponent,
    CercaCaricoComponent,
    CompaniesComponent,
    CompanyDetail
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
    ])
  ],
  providers: [macchinasService, CompanyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
