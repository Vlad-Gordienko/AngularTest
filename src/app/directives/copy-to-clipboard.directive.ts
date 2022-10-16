import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {delay, of, take} from "rxjs";

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {

  @Input() appCopyToClipboard: string = '';

  @HostListener('click') onClick() {
    this.copy();
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.cursor = 'pointer';
    this.el.nativeElement.style.color = '#514AD1';
    this.el.nativeElement.style.transition = 'opacity .2s'
  }

  copy() {
    const input = document.createElement('input');
    input.style.display = 'none';
    input.type = 'text';
    input.value = this.appCopyToClipboard;

    document.body.append(input);

    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);

    this.el.nativeElement.style.opacity = '30%';

    of(null).pipe(
      delay(300),
      take(1),
    ).subscribe(() => {
      this.el.nativeElement.style.opacity = '100%';
    });

    input.remove();
  }

}
