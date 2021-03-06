import { Component } from "@angular/core";

import { PersonsService } from "./core/services/persons.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personsService.populateTable();
  }
}
