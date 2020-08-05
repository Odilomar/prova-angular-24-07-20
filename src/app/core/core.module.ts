import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateeditComponent } from "./components/createedit/createedit.component";
import { CoreRoutingModule } from "./core-routing.module";

@NgModule({
  declarations: [CreateeditComponent],
  imports: [CoreRoutingModule],
})
export class CoreModule {}
