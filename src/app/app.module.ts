import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventLogsComponent } from './event-logs/event-logs.component';
import { EventItemComponent } from './event-item/event-item.component';
import { PlantedEventComponent } from './planted-event/planted-event.component';
import { RemovedEventComponent } from './removed-event/removed-event.component';
import { DiedEventComponent } from './died-event/died-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventLogsComponent,
    EventItemComponent,
    PlantedEventComponent,
    RemovedEventComponent,
    DiedEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
