import { TestBed } from "@angular/core/testing";

import { PersonsService } from "./persons.service";
import { Person } from "../interfaces/person.interface";

import { v4 as uuidv4 } from "uuid";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

type PersonWhitoutID = Omit<Person, "id">;

describe("PersonsService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), BrowserAnimationsModule],
    })
  );

  it("should be created", () => {
    const personService: PersonsService = TestBed.get(PersonsService);
    expect(personService).toBeTruthy();
  });
  it("should populate and retrive all persons", () => {
    const personService: PersonsService = TestBed.get(PersonsService);
    personService.populateTable();
    const persons = personService.getAllPersons().map((person) => {
      delete person.id;
      return person as PersonWhitoutID;
    });
    const defaultPersons: PersonWhitoutID[] = [
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
    expect(persons).toEqual(defaultPersons);
  });

  it("should be able to create a person", () => {
    console.log("should be able to create a person");
    const personService: PersonsService = TestBed.get(PersonsService);
    const person = createPerson();
    const { id } = person;
    expect(personService.getPersonById(id)).toEqual(person);
    personService.deletePersonById(id);
  });

  it("should be able to edit a person", () => {
    console.log("should be able to edit a person");
    const personService: PersonsService = TestBed.get(PersonsService);
    const savedPerson = createPerson();
    const person: Person = { ...savedPerson, cpf: "78303355163" };
    const { id } = savedPerson;
    personService.savePerson(person);
    expect(personService.getPersonById(id)).toEqual(person);
    personService.deletePersonById(id);
  });

  it("should not be able to create a person with the same cpf", () => {
    console.log("should not be able to create a person with the same cpf");
    const personService: PersonsService = TestBed.get(PersonsService);
    personService.populateTable();

    const person = personService.getAllPersons()[0];
    const id = uuidv4();

    delete person.id;

    expect(personService.savePerson({ id, ...person })).toEqual(false);
  });

  it("should be able to delete a person", () => {
    const personService: PersonsService = TestBed.get(PersonsService);
    const { id } = createPerson();
    personService.deletePersonById(id);
    expect(personService.isPersonById(id)).toEqual(false);
  });

  function createPerson(): Person {
    const personService: PersonsService = TestBed.get(PersonsService);
    personService.populateTable();
    const person: Person = {
      id: uuidv4(),
      name: "Raul César Drumond",
      cpf: "69599933699",
      phone: "82994940448",
      email: "rrebecalouisealmeida@gmail.com",
      cep: "57010788",
      city: "Maceió",
      state: "AL",
      street: "Rua N",
    };

    const isPersonCreated = personService.savePerson(person);

    expect(isPersonCreated).toEqual(true);

    return person;
  }
});
