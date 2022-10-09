import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TicketFormComponent} from "./components/ticket-form/ticket-form.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ITicket} from "../intefaces/ticket.interface";
import {TicketRepositoryService} from "../services/ticket-repository.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tickets = new MatTableDataSource<ITicket>([]);
  initialPageSize = 5;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog,
              private ticketRepository: TicketRepositoryService) {
  }

  ngOnInit(): void {
    this.ticketRepository.getAll({size: this.initialPageSize, page: 0}).subscribe(tickets => {
      this.tickets.data = tickets;
    })
  }

  ngAfterViewInit() {
    this.tickets.paginator = this.paginator;
    this.tickets.sort = this.sort;
  }

  openTicketForm(element?: unknown): void {
    const dialogRef = this.dialog.open(TicketFormComponent, {
      width: '250px',
      data: {name: ''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

}
