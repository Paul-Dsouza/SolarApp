import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductServiceComponent } from './product-service/product-service.component';
import { CmComponent } from './cm/cm.component';
import { PmComponent } from './pm/pm.component';
import { ExecuteComponent } from './execute/execute.component';
import { StatusInstallationComponent } from './status-installation/status-installation.component';
import { QueriesComponent } from './queries/queries.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-service', pathMatch: 'full' },
  { path: 'product-service', component: ProductServiceComponent },
  { path: 'product-service/cm', component: CmComponent },
  { path: 'product-service/pm', component: PmComponent },
  { path: 'execute', component: ExecuteComponent },
  { path: 'status-installation', component: StatusInstallationComponent },
  { path: 'queries', component: QueriesComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
