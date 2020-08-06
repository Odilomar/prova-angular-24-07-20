import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { isValid as isCPFValid } from "cpf";
import { validate as isEmailValid } from "email-validator";

import { PersonsService } from "../../services/persons.service";
import { CepService } from "../../services/cep.service";

import { Person } from "../../interfaces/person.interface";
import { Mask } from "../../constants/mask.constants";

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
    var cep = (event.target.value as string).replace("-", "");

    if (cep.length == 8) {
      this.loading = true;
      this.clearAddress();
      this.cepService
        .getCep(cep)
        .then((apiResponse: any) => {
          if (apiResponse.erro) {
            alert("Cep não encontrado");
          } else {
            this.selectedPerson = {
              ...this.selectedPerson,
              cep: apiResponse.cep.replace("-", ""),
              state: apiResponse.uf,
              city: apiResponse.localidade,
              street: apiResponse.logradouro,
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
      alert("Campo de nome não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.cpf == "") {
      alert("Campo de nome não informado. Informe-o e tente novamente!");
      return false;
    }

    if (!isCPFValid(this.selectedPerson.cpf)) {
      alert("Campo de cpf inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.phone == "") {
      alert("Campo de telefone não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.phone.length < 11) {
      alert("Telefone inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.email == "") {
      alert("Campo de email não informado. Informe-o e tente novamente!");
      return false;
    }

    if (!isEmailValid(this.selectedPerson.email)) {
      alert("Email inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.cep == "") {
      alert("Campo de cep não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.cep.length < 8) {
      alert("Cep inválido. Verifique-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.state == "") {
      alert("Campo de state não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.city == "") {
      alert("Campo de city não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.street == "") {
      alert("Campo de street não informado. Informe-o e tente novamente!");
      return false;
    }

    return true;
  }
}
