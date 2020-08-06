import { Component, OnInit } from "@angular/core";

import { PersonsService } from "src/app/core/services/persons.service";
import { Person } from "src/app/core/interfaces/person.interface";
import { MASK } from "../../core/constants/mask.constants";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  public cpfMask: string;
  public phoneMask: string;
  public cepMask: string;

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
    const { cpf, phone, cep } = MASK;

    this.cpfMask = cpf;
    this.phoneMask = phone;
    this.cepMask = cep;

    this.persons = this.personsService.getAllPersons();
  }

  deletePerson(personId: string) {
    this.persons = this.personsService.deletePersonById(personId);
  }
}
