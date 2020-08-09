import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import DashboardComponent from "./dashboard.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MainRoutingModule } from "../main-routing.module";
import { ToastrModule } from "ngx-toastr";
import { MatDialogModule } from "@angular/material/dialog";

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
