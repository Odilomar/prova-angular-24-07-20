import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { isValid as isCPFValid } from "cpf";
import { validate as isEmailValid } from "email-validator";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

import { CepService } from "../../services/cep.service";
import { PersonsService } from "../../services/persons.service";

import { Person } from "../../interfaces/person.interface";
import { MASK } from "../../constants/mask.constants";

import { CepInterface } from "../../interfaces/cep.interface";
import { CepErrorInterface } from "../../interfaces/cep.error.interface";

import {
  CEP_NOT_FOUND,
  CEP_FOUND,
  CEP_API_ERROR,
  CEP_INVALID,
  CEP_NOT_INFORMED,
  NAME_NOT_FOUND,
  CPF_NOT_FOUND,
  CPF_INVALID,
  PHONE_NOT_FOUND,
  PHONE_INVALID,
  EMAIL_NOT_FOUND,
  EMAIL_INVALID,
  STATE_NOT_FOUND,
  CITY_NOT_FOUND,
  STREET_NOT_FOUND,
  SAVE_PERSON,
  EDIT_PERSON,
} from "../../constants/message.constants";
import { ShowToastrService } from "../../services/showtoastr.service";

@Component({
  selector: "app-createedit",
  templateUrl: "./createedit.component.html",
  styleUrls: ["./createedit.component.scss"],
})
export default class CreateEditComponent implements OnInit {
  public title: string;
  public faSave = faSave;
  public faTimes = faTimes;

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
    private showToastrService: ShowToastrService
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
    this.title =
      routeId == "" || !routeId ? "Nova pessoa" : "Edição de dados cadastrais";
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
            this.showToastrService.showToastr(CEP_NOT_FOUND);
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

            this.showToastrService.showToastr(CEP_FOUND, false);
          }
        })
        .catch((error) => {
          this.showToastrService.showToastr(CEP_API_ERROR);
        })
        .finally(() => (this.loading = false));
    }
  }

  public save() {
    if (this.validateForm()) {
      this.showToastrService.showToastr(
        this.personsService.isPersonById(this.selectedPerson.id)
          ? EDIT_PERSON
          : SAVE_PERSON,
        false
      );
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
      this.showToastrService.showToastr(NAME_NOT_FOUND);
      return false;
    }

    if (
      this.selectedPerson.cpf == "" ||
      this.selectedPerson.cpf
        .replace("_", "")
        .replace(".", "")
        .replace("-", "") == ""
    ) {
      this.showToastrService.showToastr(CPF_NOT_FOUND);
      return false;
    }

    if (!isCPFValid(this.selectedPerson.cpf)) {
      this.showToastrService.showToastr(CPF_INVALID);
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
      this.showToastrService.showToastr(PHONE_NOT_FOUND);
      return false;
    }

    if (this.selectedPerson.phone.length < 10) {
      this.showToastrService.showToastr(PHONE_INVALID);
      return false;
    }

    if (this.selectedPerson.email == "") {
      this.showToastrService.showToastr(EMAIL_NOT_FOUND);
      return false;
    }

    if (!isEmailValid(this.selectedPerson.email)) {
      this.showToastrService.showToastr(EMAIL_INVALID);
      return false;
    }

    if (
      this.selectedPerson.cep == "" ||
      this.selectedPerson.cep.replace("_", "").replace("-", "") == ""
    ) {
      this.showToastrService.showToastr(CEP_NOT_INFORMED);
      return false;
    }

    if (this.selectedPerson.cep.length < 8) {
      this.showToastrService.showToastr(CEP_INVALID);
      return false;
    }

    if (this.selectedPerson.state == "") {
      this.showToastrService.showToastr(STATE_NOT_FOUND);
      return false;
    }

    if (this.selectedPerson.city == "") {
      this.showToastrService.showToastr(CITY_NOT_FOUND);
      return false;
    }

    if (this.selectedPerson.street == "") {
      this.showToastrService.showToastr(STREET_NOT_FOUND);
      return false;
    }

    return true;
  }
}
