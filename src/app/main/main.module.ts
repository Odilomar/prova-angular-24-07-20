import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";

import { NgxMaskModule, IConfig } from "ngx-mask";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import DashboardComponent from "./dashboard/dashboard.component";
import { MainRoutingModule } from "./main-routing.module";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    FontAwesomeModule,
    CommonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MainRoutingModule,
  ],
})
export class MainModule {}
