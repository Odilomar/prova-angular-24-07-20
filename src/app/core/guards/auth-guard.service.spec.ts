import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AuthGuardService } from "./auth-guard.service";
import { Router } from "@angular/router";
import { PersonsService } from "../services/persons.service";

describe("AuthGuardService", () => {
  let guard: AuthGuardService;
  let routerMock = { navigate: jasmine.createSpy("navigate") };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService, { provide: Router, useValue: routerMock }],
      imports: [RouterTestingModule.withRoutes([])],
    });
    guard = TestBed.get(AuthGuardService);
  });

  it("should be created", () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  });

  it("should redirect an inexistence id to dashboard route", () => {
    const routeMock: any = { params: { id: "some-id" } };
    expect(guard.canActivate(routeMock, null)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(["dashboard"]);
  });

  it("should allow access edit component if id params exists", () => {
    const personService: PersonsService = TestBed.get(PersonsService);
    personService.populateTable();
    const { id } = personService.getAllPersons()[0];

    const routeMock: any = { params: { id } };

    expect(guard.canActivate(routeMock, null)).toEqual(true);
    expect(routerMock.navigate).toHaveBeenCalledWith([`edit/${id}`]);
  });
});
