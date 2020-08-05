import { Component, OnInit } from "@angular/core";
import { PersonsService } from "src/app/core/services/persons.service";
import { Person } from "src/app/core/interfaces/person.interface";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public persons: Person[];
  public columns = [
    "name",
    "cpf",
    "phone",
    "email",
    "cep",
    "state",
    "city",
    "street",
    "actions",
  ];

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    const persons = this.personsService.getAllPersons();

    if (!persons || !persons.length)
      this.personsService.populateTable();
    this.persons = this.personsService.getAllPersons();
  }

  deletePerson(person: Person) {
    this.persons = this.personsService.deletePersonById(person.id);
  }
}
