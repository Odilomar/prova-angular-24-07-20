import { Component } from "@angular/core";
import { CepService } from "./core/services/cep.service";
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

function save(person) {
  var persons = JSON.parse(localStorage.getItem("persons"));
  var index = persons.findIndex(
    (foundPerson) => Number(foundPerson.cpf) == Number(person.cpf)
  );
  if (index == -1) index = persons.length;
  persons[index] = person;
  localStorage.setItem("persons", JSON.stringify(persons));
}

function remove(person) {
  var persons = JSON.parse(localStorage.getItem("persons"));
  var cpf = Number(person.cpf);
  var index = persons.findIndex(
    (foundPerson) => foundPerson.cpf == String(cpf)
  );
  persons.splice(index, 1);
  localStorage.setItem("persons", JSON.stringify(persons));
}
