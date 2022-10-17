import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ITicket} from "../intefaces/ticket.interface";
import {Observable} from "rxjs";

export interface QueryParams extends HttpParams {
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

  getAll(queryParams?: QueryParams) {
    return this.http.get<ITicket[]>(this.api, {params: queryParams})
  }

  create(ticket: ITicket): Observable<null> {
    return this.http.post<null>(this.api, ticket);
  }

  update(ticket: ITicket): Observable<null> {
    return this.http.put<null>(this.api, ticket);
  }
}
