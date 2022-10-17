import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TicketFormComponent} from "./components/ticket-form/ticket-form.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Department, ID, ITicket, TicketStatus} from "../intefaces/ticket.interface";
import {TicketRepositoryMockService} from "../services/ticket-repository.mock.service";
import {FormControl, FormGroup} from "@angular/forms";
import {clearNull} from "../utils/utils";

interface IFilterForm {
  id: FormControl<ID | null>;
  created: FormControl<Date | null>;
  updated: FormControl<Date | null>;
  department: FormControl<Department | null>;
  title: FormControl<string | null>;
  status: FormControl<TicketStatus | null>;
}

interface IFilter {
  id?: string;
  created?: string;
  updated?: string;
  department?: string;
  title?: string;
  status?: string;
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tickets = new MatTableDataSource<ITicket>([]);
  initialPageSize = 20;
  showFilter: boolean = false;
  departments: string[] = Object.values(Department);
  statuses: string[] = Object.values(TicketStatus);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  filterForm!: FormGroup<IFilterForm>;

  constructor(public dialog: MatDialog,
              private ticketRepository: TicketRepositoryMockService) {
  }

  ngOnInit(): void {
    this.getTickets();
    this.filterForm = new FormGroup<IFilterForm>({
      id: new FormControl<ID>(null!),
      created: new FormControl<Date>(null!),
      updated: new FormControl<Date>(null!),
      department: new FormControl<Department>(null!),
      title: new FormControl<string>(null!),
      status: new FormControl<TicketStatus>(null!),
    })

    this.filterForm.valueChanges.subscribe(filter => {
      clearNull(filter);
    })
  }

  getTickets(filter?: IFilter) {
    this.ticketRepository.getAll({
      size: this.tickets.paginator?.pageSize || this.initialPageSize,
      page: this.tickets.paginator?.pageIndex || 0,
      ...filter
    }).subscribe(tickets => {
      this.tickets.data = tickets;
    });
  }

  ngAfterViewInit() {
    this.tickets.paginator = this.paginator;
    this.tickets.sort = this.sort;
  }

  openTicketForm(ticket?: ITicket): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      data: ticket,
    });

    dialogRef.afterClosed().subscribe(ticket => {
      if (ticket?.id) {
        this.ticketRepository.update(ticket).subscribe(() => this.getTickets());
      } else if (ticket) {
        this.ticketRepository.create(ticket).subscribe(() => this.getTickets());
      }
    });
  }

}
