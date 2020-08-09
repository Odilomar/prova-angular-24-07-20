import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import RemovePeopleComponent from "./removepeople.component";
import { NgxMaskModule, IConfig } from "ngx-mask";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatDialogModule, MatDialogRef, MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";

const maskConfig: Partial<IConfig> = {
  validation: false,
};

describe("RemovePeopleComponent", () => {
  let component: RemovePeopleComponent;
  let fixture: ComponentFixture<RemovePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemovePeopleComponent],
      imports: [
        NgxMaskModule.forRoot(maskConfig),
        CommonModule,
        FontAwesomeModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MatDialog,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
     ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
