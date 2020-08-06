import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { CepService } from "./core/services/cep.service";
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
    HttpClientModule,
    MainModule,
    CoreModule,
  ],
  providers: [CepService],
  bootstrap: [AppComponent],
})
export class AppModule {}
