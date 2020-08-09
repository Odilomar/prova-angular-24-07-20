import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { CepService } from "./core/services/cep.service";

import { MainModule } from "./main/main.module";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";

import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatTableModule,
    HttpClientModule,
    MainModule,
    CoreModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
