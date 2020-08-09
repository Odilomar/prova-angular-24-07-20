import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateeditComponent } from "./components/createedit/createedit.component";
import { CoreRoutingModule } from "./core-routing.module";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

import { NgxMaskModule, IConfig } from "ngx-mask";
import { RemovePeopleComponent } from "./components/removepeople/removepeople.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [CreateeditComponent, RemovePeopleComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    CommonModule,
    FontAwesomeModule,
    MatDialogModule,
    CoreRoutingModule,
    MatInputModule,
    FormsModule,
  ],
  entryComponents: [RemovePeopleComponent],
})
export class CoreModule {}
