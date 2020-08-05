import { Component, OnInit } from "@angular/core";
import { Person } from "../../interfaces/person.interface";
import { v4 as uuidv4 } from "uuid";
import { PersonsService } from "../../services/persons.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-createedit",
  templateUrl: "./createedit.component.html",
  styleUrls: ["./createedit.component.scss"],
})
export class CreateeditComponent implements OnInit {
  public selectedPerson: Person;

  constructor(private personsService: PersonsService, private route: Router) {}

  ngOnInit() {
    this.selectedPerson = this.personsService.getDefaultPerson();
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

  private validateForm(): boolean {

    if (this.selectedPerson.name == "") {
      alert("Campo de nome não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.cpf == "") {
      alert("Campo de cpf não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.phone == "") {
      alert("Campo de telefone não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.email == "") {
      alert("Campo de email não informado. Informe-o e tente novamente!");
      return false;
    }

    if (this.selectedPerson.cep == "") {
      alert("Campo de cep não informado. Informe-o e tente novamente!");
      return false;
    }

    return true;
  }
}
