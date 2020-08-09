import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from "@angular/router";
import { PersonsService } from "../services/persons.service";

type CanActivateType =
  | boolean
  | UrlTree
  | import("rxjs").Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>;

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  constructor(private personService: PersonsService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): CanActivateType {
    const { id } = route.params;
    const isValid = this.personService.isPersonById(id);

    if (!isValid) {
      this.route.navigate(["dashboard"]);
    }

    return isValid;
  }
}
