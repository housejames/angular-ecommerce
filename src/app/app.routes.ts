import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./features/home/home/home.component').then(m => m.HomeComponent) },
  { path: '**', redirectTo: 'home' } // Wildcard route for unknown paths
];
