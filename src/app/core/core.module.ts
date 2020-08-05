import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateeditComponent } from "./components/createedit/createedit.component";
import { CoreRoutingModule } from "./core-routing.module";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CreateeditComponent],
  imports: [CommonModule, CoreRoutingModule, MatInputModule, FormsModule],
})
export class CoreModule {}
