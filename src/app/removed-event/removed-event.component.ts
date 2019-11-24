import { Component, OnInit, Input } from '@angular/core';
import { RemovedEvent } from '../model/events';

@Component({
  selector: 'app-removed-event',
  templateUrl: './removed-event.component.html',
  styleUrls: ['./removed-event.component.scss']
})
export class RemovedEventComponent implements OnInit {

  @Input() event: RemovedEvent;

  constructor() { }

  ngOnInit() {
  }

}
