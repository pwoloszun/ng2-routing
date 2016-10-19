import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from "./users.component";
import {UserDetailsComponent} from "./user-details.component";
import {CanActivateViaPermissionsGuard} from "./can-activate-via-permissions.guard";
import {UnsavedDeactivateGuard} from "./unsaved-deactivate.guard";
import {EditUserComponent} from "./edit-user.component";
import {AlwaysCanActivateGuard} from "./always-can-activate.guard";
import {LogDeactivateGuard} from "./log-can-deactivate.guard";

const routes: Routes = [
  {path: "", component: UsersComponent},
  {
    path: "details/:id",
    component: UserDetailsComponent,
    canActivate: [
      AlwaysCanActivateGuard
    ],
    canDeactivate: [
      LogDeactivateGuard
    ]
  },
  {
    path: "edit/:id",
    component: EditUserComponent,
    canActivate: [
      CanActivateViaPermissionsGuard
    ],
    canDeactivate: [
      UnsavedDeactivateGuard
    ]
  }
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(routes);