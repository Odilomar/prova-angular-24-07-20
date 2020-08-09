import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxMaskModule, IConfig } from "ngx-mask";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { CoreRoutingModule } from "./core-routing.module";
import CreateEditComponent from "./components/createedit/createedit.component";
import { RemovePeopleComponent } from "./components/removepeople/removepeople.component";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [CreateEditComponent, RemovePeopleComponent],
  imports: [
    NgxMaskModule.forRoot(maskConfig),
    BrowserAnimationsModule,
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
