import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CepService } from "./cep.service";
import { MainModule } from "./main/main.module";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MainModule,
    CoreModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
