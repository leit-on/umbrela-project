import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { GridColsDirective } from './grid-directive'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { ProgressSpinnerDialogComponent } from './dashboard-components/spinner-dialog-component/progress-spinner-dialog.component';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceComponent } from './dashboard-http/service';
import { HttpClient } from '@angular/common/http';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	viewProviders: [GridColsDirective],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements AfterViewInit {
	tabForecast: ({ title: string; title_day_week: string; forecastDay: { date: string; climate: string; tempMin: string; tempMax: string; rain: string; umity: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; } }; forecastCities: { id: string; distance: string; city: string; latitudeCity: number; longitudeCity: number; tempMin: string; tempMax: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; }; url_image: string; rain: string; icon: string; umity: string; }[]; } | { title: string; title_day_week: string; forecastDay?: undefined; forecastCities?: undefined; })[]
	//tabForecast: [{ title: string; forecastDay:{ date:string; clima: string; }; forecastCities:[{id:string; distance:string; city:string; clima:string; rain: string; umity: string}];}]
	value = "São Paulo";
	pageIndexPaginate = 0;
	latitude: any;
	longitude: any;

	private httpClient2: HttpClient;

	private service: ServiceComponent;


	//   range = new FormGroup({
	// start: new FormControl<Date | null>(null),
	// end: new FormControl<Date | null>(null),
	// });
	constructor(
		private dialog: MatDialog, httpClient2: HttpClient
	) {
		this.httpClient2 = httpClient2;
		this.service = new ServiceComponent(this.httpClient2);
		//this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
	}

	ngAfterViewInit() { }


	async ngOnInit() {
		let latitude = -23.5489;
		let longitude = -46.6388;
		try {
			const position: any = await this.getCoordinates();
			latitude = position.coords.latitude;
			longitude = position.coords.longitude;
			this.callAPIForecast(latitude, longitude);
		} catch (error) {
			this.callAPIForecast(latitude, longitude);
		}
	}
	getCoordinates() {
		return new Promise(function (resolve, reject) {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	}

	successFunction(position: { coords: { latitude: any; longitude: any; }; }) {
		const lat = position.coords.latitude;
		const long = position.coords.longitude;
		//this.latitude = lat;
		//longitude = long;
		return position;
		console.log('Your latitude is :' + lat + ' and longitude is ' + long);
	}

	myObservable(observer: any) {
		setTimeout(() => {

			observer.next("done waiting for 5 sec");
			observer.complete();
		}, 4000);
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


	async callAPIForecast(lat: number, long: number): Promise<void> {

		let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> = this.dialog.open(ProgressSpinnerDialogComponent, {
			panelClass: 'transparent',
			disableClose: true
		});

		let itemsPrevisao: any = [];
		let listaCidadesProximas = await this.callAPIGetCidadesProximas(lat, long);
		console.log('lista de cidades para consulta da previsao:', listaCidadesProximas);
		for (let index = 0; index < (<any>listaCidadesProximas).length; index++) {
			const element = (<any>listaCidadesProximas)[index];
			console.log('elemento:', element.title.split(',')[0]);


			let previsaoByCity = await this.callAPIGetPrevisaoByCity(element.title.split(',')[0]);
			if (previsaoByCity != undefined) {
				itemsPrevisao.push(previsaoByCity);
			}
		}


		setTimeout(async () => {
			console.log('chegou até aqui');
			await this.formatArrayObjectToView(itemsPrevisao, lat, long);
			if (this.tabForecast != undefined
				&& this.tabForecast != null
				&& this.tabForecast.length > 0) {
				console.log('consulta efetuada com sucesso:', this.tabForecast)
				dialogRef.close();
			} else {
				console.log('consulta efetuada com falha, timeout:')
				this.tabForecast = [];
				dialogRef.close();
			}
		}, 15000);
	}

	async formatArrayObjectToView(ListPrevisoes: any, lat: number, long: number) {
		let daysCity: any = [];
		let daysCity0: any = [];
		let cities: { id: string; distance: string; latitudeCity: number; longitudeCity: number; city: string; tempMin: string; tempMax: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; }; url_image: string; rain: string; icon: string; umity: string; }[] = [];
		this.tabForecast = [];
		return new Promise(async resolve => {

			for (let index0 = 0; index0 < 15; index0++) {
				console.log('passa o dia');
				daysCity0 = [];
				for (let index = 0; index < (<any>ListPrevisoes).length; index++) {
					const element = (<any>ListPrevisoes)[index];
					console.log('element', element);
					let dayCity = {
						city_name: element.address,
						latitude: element.latitude,
						longitude: element.longitude,
						data: element.days[index0].datetime,
						previsao: element.days[index0]
					}
					daysCity0.push(dayCity);
				}
				daysCity.push(daysCity0);
			}

			console.log('revisionado', daysCity0, daysCity);
			for (let index = 0; index < daysCity.length; index++) {
				const element = daysCity[index];
				let data = "";
				let d = new Date();
				cities = [];
				for (let i = 0; i < element.length; i++) {
					const result = element[i];
					data = result.data;
					d = new Date(data);

					let reference_image = await this.getImageCity(result.city_name);
					console.log('passou do await');
					let maxTemp = this.getMaxTemp(result.previsao.hours).toString();
					let minTemp = this.getMinTemp(result.previsao.hours).toString();
					let city = {
						id: "1",
						distance: this.getDistanceFromLatLonInKm(lat, long, result.latitude, result.longitude).toString(),//"15",
						city: result.city_name, //(<any>itemsPrevisao).address, //"Atibaia",
						latitudeCity: result.latitude,
						longitudeCity: result.longitude,
						morning: {
							temperature: result.previsao.hours[9].temp,//"18",
							climate: result.previsao.hours[9].conditions,//"ensolarado"
						},
						afternoon: {
							temperature: result.previsao.hours[16].temp,//"25",
							climate: result.previsao.hours[16].conditions,//"nublado"
						},
						night: {
							temperature: result.previsao.hours[20].temp,//"20",
							climate: result.previsao.hours[20].conditions,// "ceu limpo"
						},
						tempMax: maxTemp,
						tempMin: minTemp,
						url_image: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=280&photo_reference=' + reference_image.candidates[0].photos[0].photo_reference + '&key=AIzaSyAne-rZLXFZVkgizh98YEjPfmr6JqE4_AM', //await this.getImageCity(result.city_name),//'https://images.pexels.com/photos/16317494/pexels-photo-16317494.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
						rain: "15",
						icon: "wb_sunny",
						umity: "8"
					}
					cities.push(city);
				}

				var days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
				let elementItem = {
					title: data,
					title_day_week: days[d.getDay()],
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
					forecastCities: cities
				}

				this.tabForecast.push(elementItem);
				console.log('tabForecast ficou', this.tabForecast)

			}
			resolve(this.tabForecast);
		})
	}

	callAPIGetCidadesProximas(lat: number | undefined, long: number | undefined) {

		let listCidadesProximas: any = [];

		return new Promise(resolve => {
			this.service.listarCidadesProximas(lat, long)
				.subscribe(
					{
						next: (data: any) => {
							console.log('data', data)
							listCidadesProximas = data.items;
							resolve(listCidadesProximas);
							console.log('items', listCidadesProximas)
						},
						error: error => {
							console.error('There was an error!', error);
							resolve([]);
						}
					}
				)
		})
	}

	callAPIGetPrevisaoByCity(city: string) {

		let cityPrevisao: any = undefined;
		return new Promise(resolve => {
			this.service.previsaoTempoCity(city).subscribe(
				{
					next: (responsePrevisao: any) => {
						console.log('dataPrevisao', responsePrevisao)
						cityPrevisao = responsePrevisao;
						console.log('previsao City', cityPrevisao);
						resolve(cityPrevisao);
					},
					error: error => {
						console.error('There was an error!', error);
						resolve(undefined)
					}
				})
		})
	}

	onEnter(city: string) {
		console.log('busca de cidade:', city)
		//this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
	}
	changeFilter(event: any) {
		console.log('evento de mudança filtro:', event)
	}

	changePage(event: any) {
		console.log('evento de mudança pagina:', event)
		//this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));

		this.pageIndexPaginate = event.pageIndex;
		if (event.pageIndex == 0) {
			//this.callAPIForecast();
		}
		if (event.pageIndex == 1) {
			//Adicionar codigo aqui
		}

	}

	getDetailCity(event: any) {
		//this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
		console.log('get detalhes cidade', event)
	}

	getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
		var dLon = this.deg2rad(lon2 - lon1);
		var a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
			Math.sin(dLon / 2) * Math.sin(dLon / 2)
			;
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R * c; // Distance in km
		return d.toFixed(1);
	}
	deg2rad(deg: number) {
		return deg * (Math.PI / 180)
	}

	getMaxTemp(tempHoras: []) {
		let max = 0;
		for (let index = 0; index < tempHoras.length; index++) {
			let elent: any = tempHoras[index];
			if (elent.temp > max) {
				max = elent.temp
			}
		}
		return max;
	}
	getMinTemp(tempHoras: []) {
		let min = 1000;
		for (let index = 0; index < tempHoras.length; index++) {
			let elent: any = tempHoras[index];
			if (elent.temp < min) {
				min = elent.temp
			}
		}
		return min;
	}

	getImageCity(cidade: string): Promise<any> {
		return this.service.buscaCidadeGoogle(cidade).toPromise()
	}

}
