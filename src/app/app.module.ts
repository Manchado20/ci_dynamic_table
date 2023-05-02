import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

//mis componentes
import { card_porcentajesComponent } from './components/cards-porcentajes/card-porcentajes.component';
import { button_exportComponent } from './components/buttons/button-export/button-export.component';
import { button_filterComponent } from './components/buttons/button-filter/button-filter.component';
import { button_columnsComponent } from './components/buttons/button-columns/button-columns.component';
import { button_threePointsComponent } from './components/buttons/button-threePoints/button-threePoints.component';
import { button_selectComponent } from './components/buttons/button-select/button-select.component';
import { button_searchComponent } from './components/inputs/button-search/button-search.component';
import { card_ordersComponent } from './components/cards-orders/card-orders.component';
import { tablaComponent } from './components/tabla/tabla.component';
import { SeachFilterTablePipe } from './pipes/seach-filter-table.pipe';




//componentes externos
// ###########
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    card_porcentajesComponent,
    button_exportComponent,
    button_filterComponent,
    button_columnsComponent,
    button_threePointsComponent,
    button_selectComponent,
    button_searchComponent,
    card_ordersComponent,
    tablaComponent,
    SeachFilterTablePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
