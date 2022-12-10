import { NgModule } from '@angular/core';
import { ExtraOptions ,RouterModule, Routes } from '@angular/router';
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const routes: Routes = [{ path: 'admin-module', loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) }, { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
