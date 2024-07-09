import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { DashboardComponent } from './layout/pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'callback', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
