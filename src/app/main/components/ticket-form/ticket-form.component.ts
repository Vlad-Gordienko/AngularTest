import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ITicket} from "../../../intefaces/ticket.interface";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent {

  constructor(
    public dialogRef: MatDialogRef<TicketFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITicket,
  ) {
  }

  onClose() {
    this.dialogRef.close();
  }

}
