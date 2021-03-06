import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home page/header/header.component';
import { MainComponent } from './home page/main/main.component';
import { PriceComponent } from './home page/price/price.component';
import { ExpiriensComponent } from './home page/expiriens/expiriens.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DevKidsComponent } from './dev-kids/dev-kids.component';
import { RoboticsComponent } from './kids_courses/robotics/robotics.component';
import { ProgrammingComponent } from './kids_courses/programming/programming.component';
import { GamingComponent } from './kids_courses/gaming/gaming.component';
import { DesignKidsComponent } from './kids_courses/design-kids/design-kids.component';
import { WebKidsComponent } from './kids_courses/web-kids/web-kids.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      HomeComponent,
      HeaderComponent,
      MainComponent,
      PriceComponent,
      ExpiriensComponent,
      FooterComponent,
      AboutComponent,
      DevKidsComponent,
      RoboticsComponent,
      ProgrammingComponent,
      GamingComponent,
      DesignKidsComponent,
      WebKidsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FontAwesomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
