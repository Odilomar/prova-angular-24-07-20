import { Component, OnInit } from "@angular/core";
import { CepService } from "src/app/core/services/cep.service";
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
  public selectedPerson;

  constructor(
    private cep: CepService,
    private personsService: PersonsService
  ) {}

  ngOnInit() {
    const persons = this.personsService.get();

    if (!persons || !JSON.parse(persons).length)
      this.personsService.populateTable();
    this.persons = JSON.parse(persons);
  }

  addPerson() {
    this.selectedPerson = {};
  }

  editPerson(person) {
    this.selectedPerson = { ...person };
  }

  deletePerson(person: Person) {
    const persons = JSON.parse(localStorage.getItem("persons")) as Person[];
    const filteredPersons = persons.filter(
      (personTmp) => personTmp.cpf != person.cpf
    );

    localStorage.setItem("persons", JSON.stringify(filteredPersons));
    this.persons = filteredPersons;
  }
}
