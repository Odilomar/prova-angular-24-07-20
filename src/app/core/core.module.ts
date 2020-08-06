import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateeditComponent } from "./components/createedit/createedit.component";
import { CoreRoutingModule } from "./core-routing.module";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

import { NgxMaskModule, IConfig } from "ngx-mask";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [CreateeditComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    CommonModule,
    CoreRoutingModule,
    MatInputModule,
    FormsModule,
  ],
})
export class CoreModule {}
