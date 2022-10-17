import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appDragFile]'
})
export class DragFileDirective {

  @HostListener('dragover', ['$event']) onDragover(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event']) onDragenter(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    if (event?.dataTransfer?.files?.length) {
      this.onSelectFile.emit(event.dataTransfer.files);
    }

    event.preventDefault();
  }

  @Output() onSelectFile = new EventEmitter<FileList>();

}
