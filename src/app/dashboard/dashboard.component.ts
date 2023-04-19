import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { GridColsDirective } from './grid-directive'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProgressSpinnerDialogComponent } from './dashboard-components/spinner-dialog-component/progress-spinner-dialog.component';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	viewProviders: [GridColsDirective],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements AfterViewInit {
	tabForecast: ({ title: string; title_day_week: string; forecastDay: { date: string; climate: string; tempMin: string; tempMax: string, rain: string; umity: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; } }; forecastCities: { id: string; distance: string; city: string; climate: string; rain: string; icon: string; umity: string; }[]; } | { title: string; title_day_week: string; tabForecast: string; forecastDay?: undefined; forecastCities?: undefined; })[]
	//tabForecast: [{ title: string; forecastDay:{ date:string; clima: string; }; forecastCities:[{id:string; distance:string; city:string; clima:string; rain: string; umity: string}];}]
	value = "São Paulo";
	pageIndexPaginate = 0;

	//   range = new FormGroup({
    // start: new FormControl<Date | null>(null),
    // end: new FormControl<Date | null>(null),
  	// });
	constructor(
		private dialog: MatDialog
	) {
		this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
	}

	ngAfterViewInit() { }


	ngOnInit() {
		this.callAPIForecast();
	}

	myObservable(observer: any) {
		setTimeout(() => {





			observer.next("done waiting for 5 sec");
			observer.complete();
		}, 1000);
	}

	showProgressSpinnerUntilExecuted(observable: Observable<Object>) {
		let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
			panelClass: 'transparent',
			disableClose: true
		});
		let subscription = observable.subscribe(
			(response: any) => {
				subscription.unsubscribe();
				//handle response
				console.log(response);
				dialogRef.close();

			},
			(error) => {
				subscription.unsubscribe();
				//handle error
				dialogRef.close();

			}
		);
	}


	callAPIForecast() {
		this.tabForecast = [
			{
				title: "14/04/2023",
				title_day_week: 'sexta',
				forecastDay: {
					date: "14/04/2023",
					climate: "ensolarado",
					tempMin: "17",
					tempMax: "28",
					rain: "5",
					umity: "5",
					morning: {
						temperature: "18",
						climate: "ensolarado"
					},
					afternoon: {
						temperature: "25",
						climate: "nublado"
					},
					night: {
						temperature: "20",
						climate: "ceu limpo"
					}
				},
				forecastCities: [
					{
						id: "1",
						distance: "15",
						city: "Atibaia",
						climate: "ensolarado",
						rain: "15",
						icon: "wb_sunny",
						umity: "8"
					},
					{
						id: "2",
						distance: "15",
						city: "São Sebastião",
						climate: "chuvoso",
						rain: "15",
						icon: "water_drop",
						umity: "8"
					},
					{
						id: "3",
						distance: "15",
						city: "Atibaia",
						climate: "nublado",
						rain: "15",
						icon: "wb_cloudy",
						umity: "8"
					},
					{
						id: "4",
						distance: "15",

						city: "Atibaia",
						icon: "brightness_low",
						climate: "sol entre nuvens",
						rain: "15",
						umity: "8"
					}
				]
			},
			{
				title: "15/04/2023",
				title_day_week: 'sabado',
				forecastDay: {
					date: "14/04/2023",
					climate: "ensolarado",
					tempMin: "17",
					tempMax: "28",
					rain: "5",
					umity: "5",
					morning: {
						temperature: "18",
						climate: "ensolarado"
					},
					afternoon: {
						temperature: "25",
						climate: "nublado"
					},
					night: {
						temperature: "20",
						climate: "ceu limpo"
					}
				},
				forecastCities: [
					{
						id: "1",
						distance: "15",
						city: "Atibaia",
						climate: "ensolarado",
						rain: "15",
						icon: "wb_sunny",
						umity: "8"
					},
					{
						id: "2",
						distance: "15",
						city: "São Sebastião",
						climate: "chuvoso",
						rain: "15",
						icon: "water_drop",
						umity: "8"
					},
					{
						id: "3",
						distance: "15",

						city: "Atibaia",

						climate: "nublado",
						rain: "15",
						icon: "wb_cloudy",
						umity: "8"
					},
					{
						id: "4",
						distance: "15",

						city: "Atibaia",
						icon: "brightness_low",
						climate: "sol entre nuvens",
						rain: "15",
						umity: "8"
					}
				]
			},
			{
				title: "16/04/2023",
				title_day_week: 'domingo',
				forecastDay: {
					date: "14/04/2023",
					climate: "ensolarado",
					tempMin: "17",
					tempMax: "28",
					rain: "5",
					umity: "5",
					morning: {
						temperature: "18",
						climate: "ensolarado"
					},
					afternoon: {
						temperature: "25",
						climate: "nublado"
					},
					night: {
						temperature: "20",
						climate: "ceu limpo"
					}
				},
				forecastCities: [
					{
						id: "1",
						distance: "15",
						city: "Atibaia",
						climate: "ensolarado",
						rain: "15",
						icon: "wb_sunny",
						umity: "8"
					},
					{
						id: "2",
						distance: "15",
						city: "São Sebastião",
						climate: "chuvoso",
						rain: "15",
						icon: "water_drop",
						umity: "8"
					},
					{
						id: "3",
						distance: "15",

						city: "Atibaia",

						climate: "nublado",
						rain: "15",
						icon: "wb_cloudy",
						umity: "8"
					},
					{
						id: "4",
						distance: "15",

						city: "Atibaia",
						icon: "brightness_low",
						climate: "sol entre nuvens",
						rain: "15",
						umity: "8"
					}
				]
			}
		]
	}
	onEnter(city: string) {
		console.log('busca de cidade:', city)
		this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
	}
	changeFilter(event: any) {
		console.log('evento de mudança filtro:', event)
	}

	changePage(event: any) {
		console.log('evento de mudança pagina:', event)
		this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));

		this.pageIndexPaginate = event.pageIndex;
		if (event.pageIndex == 0) {
			this.callAPIForecast();
		}
		if (event.pageIndex == 1) {
			this.tabForecast = [
				{
					title: "14/04/2023",
					title_day_week: 'sexta',
					forecastDay: {
						date: "14/04/2023",
						climate: "ensolarado",
						tempMin: "17",
						tempMax: "28",
						rain: "5",
						umity: "5",
						morning: {
							temperature: "18",
							climate: "ensolarado"
						},
						afternoon: {
							temperature: "25",
							climate: "nublado"
						},
						night: {
							temperature: "20",
							climate: "ceu limpo"
						}
					},
					forecastCities: [
						{
							id: "1",
							distance: "15",
							city: "Laranjais",
							climate: "ensolarado",
							rain: "15",
							icon: "wb_sunny",
							umity: "8"
						},
						{
							id: "2",
							distance: "15",
							city: "São Sebastião",
							climate: "chuvoso",
							rain: "15",
							icon: "water_drop",
							umity: "8"
						},
						{
							id: "3",
							distance: "15",
							city: "Atibaia",
							climate: "nublado",
							rain: "15",
							icon: "wb_cloudy",
							umity: "8"
						},
						{
							id: "4",
							distance: "15",

							city: "Atibaia",
							icon: "brightness_low",
							climate: "sol entre nuvens",
							rain: "15",
							umity: "8"
						}
					]
				},
				{
					title: "15/04/2023",
					title_day_week: 'sabado',
					forecastDay: {
						date: "14/04/2023",
						climate: "ensolarado",
						tempMin: "17",
						tempMax: "28",
						rain: "5",
						umity: "5",
						morning: {
							temperature: "18",
							climate: "ensolarado"
						},
						afternoon: {
							temperature: "25",
							climate: "nublado"
						},
						night: {
							temperature: "20",
							climate: "ceu limpo"
						}
					},
					forecastCities: [
						{
							id: "1",
							distance: "15",
							city: "Atibaia",
							climate: "ensolarado",
							rain: "15",
							icon: "wb_sunny",
							umity: "8"
						},
						{
							id: "2",
							distance: "15",
							city: "São Sebastião",
							climate: "chuvoso",
							rain: "15",
							icon: "water_drop",
							umity: "8"
						},
						{
							id: "3",
							distance: "15",

							city: "Atibaia",

							climate: "nublado",
							rain: "15",
							icon: "wb_cloudy",
							umity: "8"
						},
						{
							id: "4",
							distance: "15",

							city: "Atibaia",
							icon: "brightness_low",
							climate: "sol entre nuvens",
							rain: "15",
							umity: "8"
						}
					]
				},
				{
					title: "16/04/2023",
					title_day_week: 'domingo',
					forecastDay: {
						date: "14/04/2023",
						climate: "ensolarado",
						tempMin: "17",
						tempMax: "28",
						rain: "5",
						umity: "5",
						morning: {
							temperature: "18",
							climate: "ensolarado"
						},
						afternoon: {
							temperature: "25",
							climate: "nublado"
						},
						night: {
							temperature: "20",
							climate: "ceu limpo"
						}
					},
					forecastCities: [
						{
							id: "1",
							distance: "15",
							city: "Atibaia",
							climate: "ensolarado",
							rain: "15",
							icon: "wb_sunny",
							umity: "8"
						},
						{
							id: "2",
							distance: "15",
							city: "São Sebastião",
							climate: "chuvoso",
							rain: "15",
							icon: "water_drop",
							umity: "8"
						},
						{
							id: "3",
							distance: "15",

							city: "Atibaia",

							climate: "nublado",
							rain: "15",
							icon: "wb_cloudy",
							umity: "8"
						},
						{
							id: "4",
							distance: "15",

							city: "Atibaia",
							icon: "brightness_low",
							climate: "sol entre nuvens",
							rain: "15",
							umity: "8"
						}
					]
				}
			]
		}

	}

	getDetailCity(event: any) {
		this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
		console.log('get detalhes cidade', event)
	}

}
