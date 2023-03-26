import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmarioComponent } from './armario.component';

const routes: Routes = [{
  path: "",
  component: ArmarioComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArmarioRoutingModule { }
