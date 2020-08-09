import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuardService } from './guards/auth-guard.service';
import CreateEditComponent from "./components/createedit/createedit.component";

const routes: Routes = [
  {
    path: "create",
    component: CreateEditComponent,
  },
  {
    path: "edit/:id",
    component: CreateEditComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
