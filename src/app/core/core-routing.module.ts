import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateeditComponent } from "./components/createedit/createedit.component";
import { AuthGuardService } from './guards/auth-guard.service';

const routes: Routes = [
  {
    path: "create",
    component: CreateeditComponent,
  },
  {
    path: "edit/:id",
    component: CreateeditComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
