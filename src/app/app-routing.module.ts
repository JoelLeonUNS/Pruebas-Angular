import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListadorComponent } from './listador/listador.component';
import { AuthGuard } from './services/autenticacion/guardias/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent}, 
  {path:'listador', component: ListadorComponent, canActivate: [AuthGuard]},
  {path:'', redirectTo:'/login', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
