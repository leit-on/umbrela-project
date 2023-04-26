import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatMenuTrigger } from '@angular/material/menu';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-forecast-carousel-desktop',
  templateUrl: './forecast-carousel-desktop.component.html',
  styleUrls: ['./forecast-carousel-desktop.component.scss']
})
export class ForecastCarouselDesktopComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // if (this.forecastCities?.length != undefined)
    //   this.length = this.forecastCities?.length
  }


}
