import { TestBed } from "@angular/core/testing";

import { ShowToastrService } from "./showtoastr.service";
import { ToastrModule } from 'ngx-toastr';

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
