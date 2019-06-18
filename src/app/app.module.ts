import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SavedlistComponent } from './savedlist/savedlist.component';
import { ItemsComponent } from './items/items.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SavedListDetailComponent } from './savedlist/savedlistdetail/saved-list-detail/saved-list-detail.component';
import {ToastrModule} from 'ngx-toastr'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemListComponent,
    ItemDetailComponent,
    HomeComponent,
    SavedlistComponent,
    ItemsComponent,
    SavedListDetailComponent
  
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'calisthenics', component: ItemListComponent,children:[
        {path: ':id', component: ItemDetailComponent}
      ]},
      {path: 'yourworkout', component: SavedlistComponent, children:[
        {path: ':id', component: SavedListDetailComponent}
      ]}
    ])
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
