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
    const persons = this.personsService.get();

    if (!persons || !JSON.parse(persons).length)
      this.personsService.populateTable();
    this.persons = JSON.parse(this.personsService.get());
  }

  deletePerson(person: Person) {
    const persons = JSON.parse(localStorage.getItem("persons")) as Person[];
    const filteredPersons = persons.filter(
      (personTmp) => personTmp.id != person.id
    );

    localStorage.setItem("persons", JSON.stringify(filteredPersons));
    this.persons = filteredPersons;
  }
}
