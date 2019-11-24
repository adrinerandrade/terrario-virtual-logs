import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from "firebase/app";
import { Event } from '../model/events';
import { parseEvents } from '../utils/event-parser';

@Component({
  selector: 'app-event-logs',
  templateUrl: './event-logs.component.html',
  styleUrls: ['./event-logs.component.scss']
})
export class EventLogsComponent implements OnInit, OnDestroy {

  database: firebase.database.Database;
  reference: firebase.database.Reference;
  executionId: string;
  events: Event[];
  autoScroll = false;
  isLoading = false;

  constructor() {
    this.database = firebase.database();
  }

  ngOnInit() {}

  search() {
    this.isLoading = true;
    this.unsubscribeReference();
    if (!this.executionId) {
      this.events = null;
      return;
    }
    this.reference = this.database.ref()
      .root
      .child('events')
      .child(this.executionId);

    this.reference.on("value", snapshot => {
      const value = snapshot.val();
      this.events = parseEvents(value);
      this.isLoading = false;
      if (this.autoScroll) {
        setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 0);
      }
    }, errorObject => {
      console.log("The read failed: " + errorObject.code);
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.unsubscribeReference();
  }

  unsubscribeReference() {
    if (this.reference) {
      this.reference.off();
    }
  }

}
