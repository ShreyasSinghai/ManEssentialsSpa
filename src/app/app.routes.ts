import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SectionDetailComponent } from './components/section-detail/section-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Home as default route
  { path: 'section/:id', component: SectionDetailComponent }, // Dynamic route for sections
  { path: '**', redirectTo: '' }, // Wildcard redirects to home
];
