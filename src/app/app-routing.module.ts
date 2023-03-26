import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { HomeComponent } from './home/home.component';
import { ArmarioComponent } from './armario/armario.component';
import { CamisetaComponent } from './camiseta/camiseta.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { WifiComponent } from './wifi/wifi.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'aluno',component: AlunoComponent},
  {path: 'armario',component: ArmarioComponent},
  {path: 'camiseta',component: CamisetaComponent},
  {path: 'pagamento',component: PagamentoComponent},
  {path: 'wifi',component: WifiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
