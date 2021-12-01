import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ISensorListView } from 'src/app/interfaces/isensor-list-view';
import { ISensorListEventHandler } from 'src/app/interfaces/isensor-list-event-handler';
import { SensorListEventHandler  } from 'src/app/presenters/sensor-presenter/sensor-list-event-handler';
import { IAddSensorEventHandler } from 'src/app/interfaces/iadd-sensor-event-handler';
import { AddSensorEventHandler } from 'src/app/presenters/sensor-presenter/add-sensor-event-handler';
import { SensorProxy } from 'src/app/proxy/sensor-proxy';
import { SensorAPI } from 'src/app/interfaces/sensor-api';
import { IAddSensorView } from 'src/app/interfaces/iadd-sensor-view';

@Component({
  selector: 'app-sensor-window',
  templateUrl: './sensor-window.component.html',
  styleUrls: ['./sensor-window.component.css']
})
export class SensorWindowComponent implements OnInit, AfterViewInit {
  @ViewChild('sensorList') 
  private sensorList: ISensorListView|undefined;
  @ViewChild('addSensorDialog') 
  private addSensorDialog: IAddSensorView|undefined;

  sensorListEventHandler: ISensorListEventHandler;
  addSensorEventHandler: IAddSensorEventHandler;

  sensorProxy: SensorAPI;

  constructor(private http: HttpClient) {
    this.sensorProxy = new SensorProxy(http);
    this.sensorListEventHandler = new SensorListEventHandler(this.sensorProxy);
    this.addSensorEventHandler = new AddSensorEventHandler(this.sensorProxy);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sensorListEventHandler.init(this.sensorList!, this.addSensorEventHandler!);
    this.addSensorEventHandler.init(this.addSensorDialog!);
  }
}
