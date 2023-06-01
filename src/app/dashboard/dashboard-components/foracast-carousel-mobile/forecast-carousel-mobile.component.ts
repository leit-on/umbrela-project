import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatMenuTrigger } from '@angular/material/menu';
import { PageEvent } from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-forecast-carousel-mobile',
  templateUrl: './forecast-carousel-mobile.component.html',
  styleUrls: ['./forecast-carousel-mobile.component.scss']
})
export class ForecastCarouselMobileComponent implements OnInit {
  @Input() forecastCities!: { id: string; distance: string; city: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; }; url_image: string; rain: string; umity: string; icon: string; }[] | [];


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // if (this.forecastCities?.length != undefined)
    //   this.length = this.forecastCities?.length
  }

  openDialogTourism(){
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '100vw',
      maxWidth: '95vw',
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}