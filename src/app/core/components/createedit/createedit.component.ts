import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { isValid as isCPFValid } from "cpf";
import { validate as isEmailValid } from "email-validator";

import { PersonsService } from "../../services/persons.service";
import { CepService } from "../../services/cep.service";

import { Person } from "../../interfaces/person.interface";
import { MASK } from "../../constants/mask.constants";
import { CepInterface } from "../../interfaces/cep.interface";
import { CepErrorInterface } from "../../interfaces/cep.error.interface";
import { ToastrService } from "ngx-toastr";

import { CEP_NOT_FOUND, CEP_FOUND, CEP_API_ERROR, CEP_INVALID, CEP_NOT_INFORMED } from "../../constants/cep.constants";
import { MessageInterface } from "../../interfaces/message.interface";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const { cpf, cep, phone } = MASK;

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
            this.showToastr(CEP_NOT_FOUND);
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

            this.showToastr(CEP_FOUND, false);
          }
        })
        .catch((error) => {
          this.showToastr(CEP_API_ERROR);
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
      this.showToastr(CEP_NOT_INFORMED);
      return false;
    }

    if (this.selectedPerson.cep.length < 8) {
      this.showToastr(CEP_INVALID);
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

  private showToastr(messageValue: MessageInterface, isError: boolean = true) {
    const { title, message } = messageValue;

    isError ? this.toastr.error(message, title) : this.toastr.success(message);
  }
}
