import { Component, OnInit, Input } from '@angular/core';
import { PlantedEvent } from '../model/events';

@Component({
  selector: 'app-planted-event',
  templateUrl: './planted-event.component.html',
  styleUrls: ['./planted-event.component.scss']
})
export class PlantedEventComponent implements OnInit {

  @Input() event: PlantedEvent;

  constructor() { }

  ngOnInit() {
  }

}
