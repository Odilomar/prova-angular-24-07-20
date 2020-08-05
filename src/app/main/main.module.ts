import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatTableModule, MatInputModule, FormsModule, MainRoutingModule],
})
export class MainModule {}
