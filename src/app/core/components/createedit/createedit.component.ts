import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

import { CepService } from "../../services/cep.service";
import { PersonsService } from "../../services/persons.service";

import { Person } from "../../interfaces/person.interface";
import { MASK } from "../../constants/mask.constants";

import { CepInterface } from "../../interfaces/cep.interface";
import { CepErrorInterface } from "../../interfaces/cep.error.interface";
import { EDIT_PERSON, SAVE_PERSON, CEP_API_ERROR, CEP_FOUND, CEP_NOT_FOUND } from '../../constants/message.constants';
import { ShowToastrService } from '../../services/showtoastr.service';

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
    if (this.personsService.savePerson(this.selectedPerson)) {
      this.showToastrService.showToastr(
        this.personsService.isPersonById(this.selectedPerson.id)
          ? EDIT_PERSON
          : SAVE_PERSON,
        false
      );
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
}
