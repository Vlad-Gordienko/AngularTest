import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
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
export class TicketRepositoryService {

  private api = `${environment.apiUrl}/api/ticket`;

  constructor(private http: HttpClient) {
  }

  getAll(queryParams?: QueryParams): Observable<ITicket[]> {
    // return this.http.get<ITicket[]>(this.api, {params: queryParams})

    // SIMPLE! MOCK GET ALL
    return of(queryParams?.size ? TICKETS.splice(0, queryParams.size) : TICKETS);
  }


}

// MOCK DATA
const TICKETS: ITicket[] = [
  {
    id: 'ab0d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.financialDepartment
  },
  {
    id: 'ab1d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.projectVerificationDepartment
  },
  {
    id: 'ab2d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.technicalDepartment
  },
  {
    id: 'ab3d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.salesDepartment
  },
  {
    id: 'ab4d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.accountVerificationDepartment
  },
  {
    id: 'ab5d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.complianceRiskDepartment
  },
  {
    id: 'ab6d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.projectVerificationDepartment
  },
  {
    id: 'ab7d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.withdrawalDepartment
  },
  {
    id: 'ab8d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.technicalDepartment
  },
  {
    id: 'ab9d253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.new,
    department: Department.securityDepartment
  },
  {
    id: 'ab1a253340er9ws76f9fv78dyf9sf',
    created: new Date(),
    updated: new Date(),
    title: 'Lorem ipsum dolor sit amet',
    status: TicketStatus.edited,
    department: Department.salesDepartment
  },
]
