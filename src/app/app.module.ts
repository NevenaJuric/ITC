import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home page/header/header.component';
import { MainComponent } from './home page/main/main.component';
import { PriceComponent } from './home page/price/price.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      HomeComponent,
      HeaderComponent,
      MainComponent,
      PriceComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
