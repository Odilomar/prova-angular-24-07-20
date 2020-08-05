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
    this.persons = this.personsService.getAllPersons();
  }

  deletePerson(personId: string) {
    this.persons = this.personsService.deletePersonById(personId);
  }
}
