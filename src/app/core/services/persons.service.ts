import { Injectable } from "@angular/core";

import { v4 as uuidv4 } from "uuid";

import { Person } from "../interfaces/person.interface";

@Injectable({
  providedIn: "root",
})
export class PersonsService {
  constructor() {}

  public populateTable() {
    const persons: Person[] = [
      {
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
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
        id: uuidv4(),
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

    this.savePersonsInLocalStorage(persons);
  }

  public getDefaultPerson(): Person {
    const defaultPerson = {
      id: uuidv4(),
      name: "",
      cep: "",
      city: "",
      cpf: "",
      email: "",
      phone: "",
      state: "",
      street: "",
    };

    return defaultPerson;
  }

  public getAllPersons() {
    const persons = JSON.parse(localStorage.getItem("persons")) as Person[];

    return persons;
  }

  public getPersonById(personId: string): Person {
    const persons = this.getAllPersons();
    const person = persons.find((person) => person.id == personId);

    return person;
  }

  public isPersonById(personId: string): boolean {
    const isPerson = this.getPersonById(personId) ? true : false;

    return isPerson;
  }

  public deletePersonById(personId: string) {
    const persons = this.getAllPersons();
    const filteredPerson = persons.filter((person) => person.id != personId);

    this.savePersonsInLocalStorage(filteredPerson);
  }

  public savePerson(person: Person) {
    const allPersons = this.getAllPersons();
    const personIndex = allPersons.findIndex(
      (personTmp) => personTmp.id == person.id
    );

    if (personIndex > -1) allPersons[personIndex] = person;

    const persons = personIndex == -1 ? [...allPersons, person] : allPersons;

    this.savePersonsInLocalStorage(persons);
  }

  private savePersonsInLocalStorage(persons: Person[]) {
    localStorage.removeItem("persons");
    localStorage.setItem("persons", JSON.stringify(persons));
  }
}
