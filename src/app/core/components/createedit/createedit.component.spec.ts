import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import CreateEditComponent from "./createedit.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatDialogModule, MatInputModule } from "@angular/material";
import { CoreRoutingModule } from "../../core-routing.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

describe("CreateEditComponent", () => {
  let component: CreateEditComponent;
  let fixture: ComponentFixture<CreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditComponent],
      imports: [
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        NgxMaskModule.forRoot(maskConfig),
        CommonModule,
        FontAwesomeModule,
        MatDialogModule,
        CoreRoutingModule,
        MatInputModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
