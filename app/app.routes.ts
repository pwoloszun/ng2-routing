import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  {path: '', loadChildren: 'app/dashboard/dashboard.module'},
  {path: 'users', loadChildren: 'app/users/users.module'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
