import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'first',component: ChildOneComponent},
  {path: 'second',component: ChildTwoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
