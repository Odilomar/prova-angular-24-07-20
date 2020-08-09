import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialogModule, MatInputModule } from "@angular/material";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { ToastrModule } from 'ngx-toastr';

import { CoreRoutingModule } from "../../core-routing.module";
import CreateEditComponent from "./createedit.component";

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
