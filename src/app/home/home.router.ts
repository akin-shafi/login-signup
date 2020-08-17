import { HomePage } from './home.page';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeGuard } from "./../guards/home.guard";
import { UserDataResolver } from "../resolvers/user-data.resolver";


const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("../pages/dashboard/dashboard.module").then((m) => m.DashboardPageModule),
      },
      {
        path: "get-estimate",
        loadChildren: () =>
          import("../pages/get-estimate/get-estimate.module").then((m) => m.GetEstimatePageModule),
      },
      {
        path: "wallet",
        loadChildren: () =>
          import("../pages/wallet/wallet.module").then((m) => m.WalletPageModule),
      },
      {
        path: "make-request",
        loadChildren: () =>
          import("../pages/make-request/make-request.module").then((m) => m.MakeRequestPageModule),
      },
      {
        path: "transaction",
        loadChildren: () =>
          import("../pages/transaction/transaction.module").then((m) => m.TransactionPageModule),
      },
      
      {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouter { }
