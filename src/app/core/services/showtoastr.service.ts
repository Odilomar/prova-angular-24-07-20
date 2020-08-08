import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { MessageInterface } from '../interfaces/message.interface';

@Injectable({
  providedIn: "root",
})
export class ShowToastrService {
  constructor(private toastr: ToastrService) {}

  public showToastr(messageValue: MessageInterface, isError: boolean = true) {
    const { title, message } = messageValue;

    isError ? this.toastr.error(message, title) : this.toastr.success(message);
  }
}
