import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineTestComponent } from './online-test.component';

const routes: Routes = [{
  path:'angular', component:OnlineTestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineTestRoutingModule { }
