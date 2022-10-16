import {AfterViewInit, Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {TicketStatus} from "../intefaces/ticket.interface";

@Directive({
  selector: '[appTicketStatus]'
})
export class TicketStatusDirective implements AfterViewInit, OnChanges {

  @Input() appTicketStatus!: TicketStatus;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = '6px 75px';
    this.el.nativeElement.style.marginRight = '25px';
    this.el.nativeElement.style.textAlign = 'center';
  }

  ngOnChanges() {
    this.update();
  }

  ngAfterViewInit() {
    this.update();
  }

  update() {
    this.el.nativeElement.innerText = this.appTicketStatus;

    if (this.appTicketStatus === TicketStatus.new) {
      this.el.nativeElement.style.color = '#00A9E0';
      this.el.nativeElement.style.backgroundColor = '#E5F6FC';
    } else if (this.appTicketStatus === TicketStatus.edited) {
      this.el.nativeElement.style.color = '#F79E1B';
      this.el.nativeElement.style.backgroundColor = '#FEF5E8';
    }
  }

}
