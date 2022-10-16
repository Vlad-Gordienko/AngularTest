import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketDateHTML'
})
export class TicketDateHTMLPipe implements PipeTransform {

  transform(date: Date, ...args: unknown[]): unknown {
    const prefix = (digit: number | string): string => digit.toString().length === 1 ? '0' + digit : digit.toString();
    return `
        <b>${prefix(date.getDate())}.${prefix(date.getMonth() + 1)}.${date.getFullYear().toString().slice(-2)}</b>
        <br> ${prefix(date.getHours())}:${prefix(date.getMinutes())}
    `;
  }

}
