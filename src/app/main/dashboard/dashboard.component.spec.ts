import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToastrModule } from "ngx-toastr";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import DashboardComponent from "./dashboard.component";
import { MainRoutingModule } from "../main-routing.module";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        NgxMaskModule.forRoot(maskConfig),
        FontAwesomeModule,
        CommonModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        MainRoutingModule,
        ToastrModule.forRoot(),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
