import { Pipe, PipeTransform } from '@angular/core';
import {ID} from "../intefaces/ticket.interface";

@Pipe({
  name: 'ticketId'
})
export class TicketIdPipe implements PipeTransform {

  transform(id: ID, ...args: unknown[]): unknown {
    return id.toString().slice(0, 7);
  }

}
