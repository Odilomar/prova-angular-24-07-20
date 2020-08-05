import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainRoutingModule } from "./main/main-routing.module";
import { CoreRoutingModule } from "./core/core-routing.module";

const routes: Routes = [{ path: "**", redirectTo: "dashboard" }];

@NgModule({
  imports: [MainRoutingModule, CoreRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
