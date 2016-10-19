import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {dashboardRouting} from './dashboard.routes';
import {DashboardComponent} from './dashboard.component';

@NgModule({
  imports: [CommonModule, dashboardRouting],
  declarations: [DashboardComponent]
})
export default class DashboardModule {
}
