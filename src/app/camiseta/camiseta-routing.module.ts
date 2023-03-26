import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamisetaComponent } from './camiseta.component';

const routes: Routes = [{
  path: "",
  component: CamisetaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CamisetaRoutingModule { }
