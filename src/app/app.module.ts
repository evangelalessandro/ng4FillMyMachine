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
import { carichiService } from './Services/carichi.service';

import { CarichiComponent } from './components/carico/carichi.component';
import { caricoDetail } from './components/carico/Carico-Detail/caricoDetail.component';
import { ScrollToModule } from 'ng2-scroll-to';

import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetail } from './components/companies/companyDetail/companyDetail.component';
import { truncateTextPipe } from './Pipes/truncateText'
import { ToastyModule } from 'ng2-toasty';
import { ToastServiceUtils } from './Utils/ToastServiceUtils'
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from './Utils/confirm.component';
import { GoogleplaceDirective } from 'angular2-google-map-auto-complete/directives/googleplace.directive';

@NgModule({
  declarations: [
    AppComponent,

    truncateTextPipe,

    SearchmacchinaComponent,
    CercaCaricoComponent,

    CompaniesComponent,
    CompanyDetail,
    
    ConfirmComponent,
    CarichiComponent,
    caricoDetail,
    GoogleplaceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ///per le message a cascata
    ///https://github.com/akserg/ng2-toasty
    ToastyModule.forRoot(),
    BootstrapModalModule,

    //per lo scroll
    ScrollToModule.forRoot(),
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
  //Don't forget to add the component to entryComponents section
  entryComponents: [
    ConfirmComponent
  ],
  providers: [macchinasService, CompanyService, carichiService, ToastServiceUtils ],
  bootstrap: [AppComponent]
})
export class AppModule { }
