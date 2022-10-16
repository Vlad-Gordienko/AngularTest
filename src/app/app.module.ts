import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {TicketFormComponent} from './main/components/ticket-form/ticket-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {HttpClientModule} from "@angular/common/http";
import {TicketStatusDirective} from './directives/ticket-status.directive';
import { TicketDateHTMLPipe } from './pipes/ticket-date.pipe';
import { TicketIdPipe } from './pipes/ticket-id.pipe';
import { CopyToClipboardDirective } from './directives/copy-to-clipboard.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TicketFormComponent,
    TicketStatusDirective,
    TicketDateHTMLPipe,
    TicketIdPipe,
    CopyToClipboardDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    TicketStatusDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
