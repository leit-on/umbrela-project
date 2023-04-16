import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forecast-wheater',
  templateUrl: './forecast-wheater.component.html',
})
export class ForecastWhetherComponent implements OnInit {
  @Output() changeFilter = new EventEmitter();

  constructor() { }
  @Input() forecastDay!: { date: string; climate: string; tempMin: string; tempMax: string, rain: string; umity: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; } } | undefined;
  ngOnInit(): void {
  }

}
