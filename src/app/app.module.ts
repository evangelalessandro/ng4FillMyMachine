import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { SearchTruckComponent } from './search-truck-component/search-truck.component';
import { CercaCaricoComponent } from './cerca-carico/cerca-carico.component';
 
@NgModule({
  declarations: [
    AppComponent,
    SearchTruckComponent,
    CercaCaricoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
      path: 'searchTruck',
      component: SearchTruckComponent,
    } ,
    {
      path: 'searchThings',
      component: CercaCaricoComponent,
    } ,
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
