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

function populateTable() {
  var persons = [
    {
      name: "Maria Flores",
      cpf: "83321492075",
      phone: "1533283928",
      email: "maria_f@gmail.com",
      cep: "69906043",
      state: "AC",
      city: "Rio Branco",
      street: "Rua Arnaldo Aleixo (Conjunto Canaã)",
    },
    {
      name: "João Carlos",
      cpf: "31213393035",
      phone: "1532841040",
      email: "joao.c@gmail.com",
      cep: "79096766",
      state: "MS",
      city: "Campo Grande",
      street: "Rua Rodolfho José Rospide da Motta",
    },
    {
      name: "Stephanie Dias",
      cpf: "02085196020",
      phone: "1533294040",
      email: "ste.dias@gmail.com",
      cep: "23825080",
      state: "RJ",
      city: "Itaguaí",
      street: "Rua Mario Bastos Filho",
    },
    {
      name: "Mirtes Souza",
      cpf: "33764389001",
      phone: "1530178756",
      email: "irma.mirtes@gmail.com",
      cep: "40420150",
      state: "BA",
      city: "Salvador",
      street: "1ª Travessa Clóvis de Almeida Maia",
    },
  ];

  localStorage.setItem("persons", JSON.stringify(persons));
}

function get() {
  return localStorage.getItem("persons");
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
