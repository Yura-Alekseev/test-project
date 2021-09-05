import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './features/navigation/navigation.component';
import { BlocksPageComponent } from './pages/blocks-page/blocks-page.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SearchComponent } from './shared/search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BlocksPageComponent,
    TablePageComponent,
    DetailPageComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
