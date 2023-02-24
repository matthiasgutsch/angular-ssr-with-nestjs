import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

import {HttpClientModule} from "@angular/common/http";
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';
import { enableProdMode } from '@angular/core';


enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'https://ict-group.it/wp-json/wp/v2' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
