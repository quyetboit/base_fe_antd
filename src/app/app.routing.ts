import { Routes } from "@angular/router";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren:  () => import('./modules/admin/admin.routing').then(m => m.ADMIN_ROUTING),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
]
