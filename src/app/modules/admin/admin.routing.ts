import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./admin-layout/admin-layout.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { ShowTableComponent } from "src/app/pages/show-table/show-table.component";

export const ADMIN_ROUTING: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'show-table', component: ShowTableComponent },
      { path: '', redirectTo: 'show-table', pathMatch: "full" },
    ]
  }
]
