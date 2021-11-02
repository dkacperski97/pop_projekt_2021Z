import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IForestryShower } from 'src/app/interfaces/iforestry-shower';
import { IForestryPresenter } from 'src/app/interfaces/iforestry-presenter';
import { ForestryPresenter } from 'src/app/presenters/forestry-presenter/forestry-presenter';

@Component({
  selector: 'app-forestry-window',
  templateUrl: './forestry-window.component.html',
  styleUrls: ['./forestry-window.component.css']
})
export class ForestryWindowComponent implements OnInit, AfterViewInit {
  @ViewChild('forestryView') 
  private forestryView: IForestryShower|undefined;
  forestryPresenter: IForestryPresenter;

  constructor(private http: HttpClient) {
    this.forestryPresenter = new ForestryPresenter(http);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.forestryPresenter.init(this.forestryView!);
  }
}
