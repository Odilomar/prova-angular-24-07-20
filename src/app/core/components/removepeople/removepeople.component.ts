import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../interfaces/dialogdata.interface";
import { Person } from "../../interfaces/person.interface";
import { PersonsService } from "../../services/persons.service";

import { faTrashAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-removepeople",
  templateUrl: "./removepeople.component.html",
  styleUrls: ["./removepeople.component.scss"],
})
export default class RemovePeopleComponent implements OnInit {
  public faTrashAlt = faTrashAlt;
  public faTimes = faTimes;

  public person: Person;

  constructor(
    private dialogRef: MatDialogRef<RemovePeopleComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private personService: PersonsService
  ) {}

  ngOnInit() {
    const { id } = this.data;

    this.person = this.personService.getPersonById(id);
    this.data.isRemoved = false;
  }

  public deletePerson(){
    const { id } = this.data;

    this.personService.deletePersonById(id);
    this.data.isRemoved = true;

    this.dialogRef.close(this.data.isRemoved);
  }
}
