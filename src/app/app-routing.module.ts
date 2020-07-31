import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DevKidsComponent } from './dev-kids/dev-kids.component';
import { RoboticsComponent } from './kids_courses/robotics/robotics.component';
import { ProgrammingComponent } from './kids_courses/programming/programming.component';
import { GamingComponent } from './kids_courses/gaming/gaming.component';
import { DesignKidsComponent } from './kids_courses/design-kids/design-kids.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'kids', component: DevKidsComponent},
  {path: 'robotics_kids', component: RoboticsComponent},
  {path: 'programming_kids', component: ProgrammingComponent},
  {path: 'gaming_kids', component: GamingComponent},
  {path: 'design_kids', component: DesignKidsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
