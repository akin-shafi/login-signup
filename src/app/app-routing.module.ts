import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./pages/forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
})
export class AppRoutingModule { }
