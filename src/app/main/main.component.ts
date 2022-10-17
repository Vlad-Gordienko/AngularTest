import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TicketFormComponent} from "./components/ticket-form/ticket-form.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ITicket} from "../intefaces/ticket.interface";
import {TicketRepositoryMockService} from "../services/ticket-repository.mock.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tickets = new MatTableDataSource<ITicket>([]);
  initialPageSize = 20;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
              private ticketRepository: TicketRepositoryMockService) {
  }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets() {
    this.ticketRepository.getAll({size: this.initialPageSize, page: 0}).subscribe(tickets => {
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
