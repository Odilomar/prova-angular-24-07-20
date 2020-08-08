import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MainModule,
    CoreModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
