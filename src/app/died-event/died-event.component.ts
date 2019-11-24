import { Component, OnInit, Input } from '@angular/core';
import { DiedEvent } from '../model/events';

@Component({
  selector: 'app-died-event',
  templateUrl: './died-event.component.html',
  styleUrls: ['./died-event.component.scss']
})
export class DiedEventComponent implements OnInit {

  @Input() event: DiedEvent;

  constructor() { }

  ngOnInit() {
  }

}
