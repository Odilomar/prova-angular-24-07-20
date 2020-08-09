import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

import { PersonsService } from "src/app/core/services/persons.service";
import { Person } from "src/app/core/interfaces/person.interface";
import { MASK } from "../../core/constants/mask.constants";
import { ShowToastrService } from "src/app/core/services/showtoastr.service";
import { REMOVE_PERSON } from "src/app/core/constants/message.constants";

import { faPlus, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import RemovePeopleComponent from "src/app/core/components/removepeople/removepeople.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export default class DashboardComponent implements OnInit {
  public faPlus = faPlus;
  public faEdit = faEdit;
  public faTrashAlt = faTrashAlt;

  public cpfMask: string;
  public phoneMask: string;
  public cepMask: string;

  public persons: Person[];
  public columns = [
    "name",
    "cpf",
    "phone",
    "email",
    "cep",
    "state",
    "city",
    "street",
    "actions",
  ];

  constructor(
    private personsService: PersonsService,
    private showToastrService: ShowToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    const { cpf, phone, cep } = MASK;

    this.cpfMask = cpf;
    this.phoneMask = phone;
    this.cepMask = cep;

    this.persons = this.personsService.getAllPersons();
  }

  deletePerson(personId: string) {
    const dialogRef = this.dialog.open(RemovePeopleComponent, {
      data: { id: personId, isRemoved: false },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.showToastrService.showToastr(REMOVE_PERSON, false);
        this.persons = this.personsService.getAllPersons();
      }
    });
  }
}
