import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatMenuTrigger } from '@angular/material/menu';
import { PageEvent } from '@angular/material/paginator';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { ServiceComponent } from '../../dashboard-http/service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast-carousel-mobile',
  templateUrl: './forecast-carousel-mobile.component.html',
  styleUrls: ['./forecast-carousel-mobile.component.scss']
})
export class ForecastCarouselMobileComponent implements OnInit {
  @Input() forecastCities!: { id: string; distance: string; latitudeCity: number; longitudeCity: number; city: string; tempMin: string; tempMax: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; }; url_image: string; rain: string; umity: string; icon: string; }[] | [];

	private service: ServiceComponent;
  private httpClient2: HttpClient;

  constructor(public dialog: MatDialog, httpClient2: HttpClient) { 
    this.httpClient2 = httpClient2;
    this.service = new ServiceComponent(this.httpClient2);
  }

  ngOnInit(): void {
    // if (this.forecastCities?.length != undefined)
    //   this.length = this.forecastCities?.length
  }

  async openDialogTourism(lat: number, long: number){

    let dataReturn:any = await this.getTouristicPoints(lat, long);
    console.log('pontos turisticos:', dataReturn);
    for (let index = 0; index < dataReturn.results.length; index++) {
      const element = dataReturn.results[index];
      let dataCity = await this.getImageCity(element.vicinity);
      console.log('dataCity:', dataCity);

      if(dataCity.candidates != undefined 
        && dataCity.candidates.length > 0
        && dataCity.candidates[0].photos != undefined
        && dataCity.candidates[0].photos.length > 0
        && dataCity.candidates[0].photos[0].photo_reference != undefined){

        
        dataReturn.results[index].reference = dataCity.candidates[0].photos[0].photo_reference
        
      }
      else{
        dataReturn.results[index].reference = ""
      }
    }

    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      width: '100vw',
      maxWidth: '95vw',
      data: dataReturn,
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getTouristicPoints(lat:number, long:number){
    return this.service.buscaPontosTuristicosProximos(lat,long).toPromise();
  }

  getImageCity(cidade:string):Promise<any>{
		//let url_foto_city:any;
		return this.service.buscaCidadeGoogle(cidade).toPromise()
  }

}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {

  constructor( @Inject(MAT_DIALOG_DATA) public dataContent: any ) {
    
  }
  
}