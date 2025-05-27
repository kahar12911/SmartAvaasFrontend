import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./auth/components/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/components/register-form.component').then(
        (m) => m.RegisterFormComponent
      ),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./auth/components/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'rent',
    loadComponent: () =>
      import('./rent/rent-payment.component').then(
        (m) => m.RentPaymentComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard', //To do : update default component
  },
];
