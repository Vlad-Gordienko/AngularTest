import {Injectable} from '@angular/core';
import {Department, ITicket, TicketStatus} from "../intefaces/ticket.interface";
import {Observable, of} from "rxjs";

export interface QueryParams {
  size: number;
  page: number;
  sortBy?: keyof ITicket;
  sortOrder?: 'desc' | 'asc';
}

@Injectable({
  providedIn: 'root'
})
export class TicketRepositoryMockService {
  getAll(queryParams?: QueryParams): Observable<ITicket[]> {
    return of(queryParams?.size ? TICKETS.slice(0, queryParams.size) : TICKETS);
  }

  create(ticket: ITicket): Observable<null> {
    ticket = {
      ...ticket,
      id: 'aff' + Math.random().toString().slice(2),
      created: new Date(),
      updated: new Date(),
      status: TicketStatus.new,
    }
    TICKETS.push(ticket);
    return of(null);
  }

  update(ticket: ITicket): Observable<null> {
    const index = TICKETS.findIndex(item => item.id === ticket.id);
    if (index !== -1) {
      TICKETS[index] = {
        ...TICKETS[index],
        ...ticket,
        status: TicketStatus.edited,
        updated: new Date(),
      }
    }
    return of(null);
  }

}

// MOCK DATA
const TICKETS: ITicket[] = [
  {
    id: 'ab0d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.financialDepartment
  },
  {
    id: 'ab1d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.projectVerificationDepartment
  },
  {
    id: 'ab2d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.technicalDepartment
  },
  {
    id: 'ab3d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.salesDepartment
  },
  {
    id: 'ab4d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.accountVerificationDepartment
  },
  {
    id: 'ab5d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.complianceRiskDepartment
  },
  {
    id: 'ab6d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.projectVerificationDepartment
  },
  {
    id: 'ab7d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.withdrawalDepartment
  },
  {
    id: 'ab8d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.technicalDepartment
  },
  {
    id: 'ab9d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.securityDepartment
  },
  {
    id: 'ab1a253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    name: 'Name',
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.salesDepartment
  },
]
