import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { isValid as isCPFValid } from "cpf";
import { validate as isEmailValid } from "email-validator";

import { PersonsService } from "../../services/persons.service";
import { CepService } from "../../services/cep.service";

import { Person } from "../../interfaces/person.interface";
import { Mask } from "../../constants/mask.constants";
import { CepInterface } from "../../interfaces/cep.interface";
import { CepErrorInterface } from "../../interfaces/cep.error.interface";

@Component({
  selector: "app-createedit",
  templateUrl: "./createedit.component.html",
  styleUrls: ["./createedit.component.scss"],
})
export class CreateeditComponent implements OnInit {
  public selectedPerson: Person;
  public loading: boolean;

  public cpfMask: string;
  public phoneMask: string;
  public cepMask: string;

  constructor(
    private personsService: PersonsService,
    private route: Router,
    private cepService: CepService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { cpf, cep, phone } = Mask;

    this.cpfMask = cpf;
    this.phoneMask = phone;
    this.cepMask = cep;

    var routeId: string = "";

    this.activatedRoute.params.subscribe((params) => (routeId = params["id"]));
    this.selectedPerson =
      routeId == "" || !routeId
        ? this.personsService.getDefaultPerson()
        : this.personsService.getPersonById(routeId);
    this.loading = false;
  }

  public changeCep(event) {
    const cep = (event.target.value as string)
      .replace("-", "")
      .replace("_", "");

    if (cep.length == 8) {
      this.loading = true;
      this.clearAddress();
      this.cepService
        .getCep(cep)
        .then((returnedCEP: any) => {
          if ((returnedCEP as CepErrorInterface).erro) {
            alert("Cep não encontrado");
          } else {
            const {
              cep,
              uf,
              localidade,
              logradouro,
            } = returnedCEP as CepInterface;

            this.selectedPerson = {
              ...this.selectedPerson,
              cep: cep.replace("-", ""),
              state: uf,
              city: localidade,
              street: logradouro,
            };
          }
        })
        .catch((error) => {
          alert("Erro ao buscar o cep");
          console.error(error);
        })
        .finally(() => (this.loading = false));
    }
  }

  public save() {
    if (this.validateForm()) {
      this.personsService.savePerson(this.selectedPerson);
      this.returnToDashboard();
    }
  }

  public returnToDashboard() {
    this.route.navigate(["/dashboard"]);
  }

  private clearAddress() {
    this.selectedPerson.state = "";
    this.selectedPerson.city = "";
    this.selectedPerson.street = "";
  }

  private validateForm(): boolean {
    if (this.selectedPerson.name == "") {
      alert("Campo de Nome não informado. Informe-o e tente novamente!");
      return false;
    }

    if (
      this.selectedPerson.cpf == "" ||
      this.selectedPerson.cpf
        .replace("_", "")
        .replace(".", "")
        .replace("-", "") == ""
    ) {
      alert("Campo de CPF não informado. Informe-o e tente novamente!");
      return false;
    }

    if (!isCPFValid(this.selectedPerson.cpf)) {
      alert("Campo de CPF inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (
      this.selectedPerson.phone == "" ||
      this.selectedPerson.phone
        .replace("(", "")
        .replace("_", "")
        .replace(")", "")
        .replace(" ", "")
        .replace("-", "") == ""
    ) {
      alert("Campo de Telefone não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.phone.length < 10) {
      alert("Telefone inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.email == "") {
      alert("Campo de Email não informado. Informe-o e tente novamente!");
      return false;
    }

    if (!isEmailValid(this.selectedPerson.email)) {
      alert("Email inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (
      this.selectedPerson.cep == "" ||
      this.selectedPerson.cep.replace("_", "").replace("-", "") == ""
    ) {
      alert("Campo de Cep não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.cep.length < 8) {
      alert("Cep inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.state == "") {
      alert("Campo de Estado não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.city == "") {
      alert("Campo de Cidade não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.street == "") {
      alert("Campo de Rua não informado. Informe-o e tente novamente!");
      return false;
    }

    return true;
  }
}
