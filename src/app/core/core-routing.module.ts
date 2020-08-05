import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateeditComponent } from "./components/createedit/createedit.component";

const routes: Routes = [
  {
    path: "create",
    component: CreateeditComponent,
  },
  {
    path: "edit/:id",
    component: CreateeditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
