import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Department, ITicket} from "../../../intefaces/ticket.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface ITicketForm {
  name: FormControl<string | null>;
  department: FormControl<string | null>;
  title: FormControl<string | null>;
  attachment: FormControl<FileList | null>;
}

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent {

  form: FormGroup;
  departments: string[] = Object.values(Department);

  get attachments(): FormControl {
    return this.form.get('attachment') as FormControl;
  }

  constructor(
    public dialogRef: MatDialogRef<TicketFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITicket,
  ) {
    this.form = new FormGroup<ITicketForm>({
      name: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      attachment: new FormControl(null),
    })

    if (this.data) {
      this.form.get('name')?.setValue(this.data.name, {emitEvent: false});
      this.form.get('department')?.setValue(this.data.department, {emitEvent: false});
      this.form.get('title')?.setValue(this.data.title, {emitEvent: false});
      this.form.get('attachment')?.setValue(this.data.attachment, {emitEvent: false});
    }

    this.form.valueChanges.subscribe(value => {
      this.data = {
        ...this.data,
        ...value
      };
    })
  }

  onClose() {
    this.dialogRef.close(this.data);
  }

  setAttachment(attachment: FileList) {
    this.attachments.setValue(attachment);
  }

  onChangeInputFile($event: any) {
    if ($event?.target?.files) {
      this.setAttachment($event.target.files);
    }
  }

  removeAttachment(attachment: File): void {
    this.attachments.setValue(
      Array.from(this.attachments.value).filter(item => item !== attachment)
    );
  }
}
