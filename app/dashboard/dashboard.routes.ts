import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {path: "", component: DashboardComponent}
];

const dashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);

export {dashboardRouting};