import { TestBed } from "@angular/core/testing";

import { ToastrModule } from "ngx-toastr";

import { ShowToastrService } from "./showtoastr.service";

describe("ShowToastrService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
    })
  );

  it("should be created", () => {
    const service: ShowToastrService = TestBed.get(ShowToastrService);
    expect(service).toBeTruthy();
  });
});
