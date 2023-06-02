import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { GridColsDirective } from './grid-directive'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
	tabForecast: ({ title: string; title_day_week: string; forecastDay: { date: string; climate: string; tempMin: string; tempMax: string; rain: string; umity: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; } }; forecastCities: { id: string; distance: string; city: string;  tempMin: string; tempMax: string;  morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; }; url_image: string; rain: string; icon: string; umity: string; }[]; } | { title: string; title_day_week: string; forecastDay?: undefined; forecastCities?: undefined; })[]
	//tabForecast: [{ title: string; forecastDay:{ date:string; clima: string; }; forecastCities:[{id:string; distance:string; city:string; clima:string; rain: string; umity: string}];}]
	value = "São Paulo";
	pageIndexPaginate = 0;
	latitude:any;
	longitude:any;

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
		this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
	}

	ngAfterViewInit() { }


	async ngOnInit() {
		// if (navigator.geolocation) {
		// 	const position = navigator.geolocation.getCurrentPosition(this.successFunction);

		// } else {
		// 	alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
		// }
		const position:any = await this.getCoordinates(); 
		let latitude = position.coords.latitude;
		let longitude = position.coords.longitude;

		this.callAPIForecast(latitude, longitude);
	}
	getCoordinates() {
		return new Promise(function(resolve, reject) {
		  navigator.geolocation.getCurrentPosition(resolve, reject);
		});
	  }

	successFunction(position: { coords: { latitude: any; longitude: any; }; }) {
		const lat = position.coords.latitude;
		const long = position.coords.longitude;
		//this.latitude = lat;
		//longitude = long;
		return position;
		console.log('Your latitude is :'+lat+' and longitude is '+long);
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


	callAPIForecast(lat: number | undefined, long: number | undefined): void {

		let items: Object = [];
		let itemsPrevisao: any = [];
		let cities: { id: string; distance: string; city: string; tempMin: string; tempMax: string; morning: { temperature: string; climate: string; }; afternoon: { temperature: string; climate: string; }; night: { temperature: string; climate: string; }; url_image: string; rain: string; icon: string; umity: string; }[] =  [];

		 this.service.listarCidadesProximas(lat, long)
			.subscribe(
				{
					next: (data:any) => {
						console.log('data',data)
						items = data.items;

						console.log('items', items)
						for (let index = 0; index < (<any>items).length; index++) {
							const element = (<any>items)[index];
							console.log('elemento:', element.title.split(',')[0]);
							this.service.previsaoTempoCity(element.title.split(',')[0]).subscribe(
								{
									next: (dataPrevisao:any) => {
										console.log('dataPrevisao', dataPrevisao)
										itemsPrevisao.push(dataPrevisao);
										console.log('previsoes', itemsPrevisao);

										// let city = {
										// 	id: "1",
										// 	distance: "15",
										// 	city: "", //(<any>itemsPrevisao).address, //"Atibaia",
										// 	morning: {
										// 		temperature: "18",
										// 		climate: "ensolarado"
										// 	},
										// 	afternoon: {
										// 		temperature: "25",
										// 		climate: "nublado"
										// 	},
										// 	night: {
										// 		temperature: "20",
										// 		climate: "ceu limpo"
										// 	},
										// 	url_image: 'https://images.pexels.com/photos/16317494/pexels-photo-16317494.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
										// 	rain: "15",
										// 	icon: "wb_sunny",
										// 	umity: "8"
										// }
										// cities.push(city);
									},
									error: error => {
										console.error('There was an error!', error);
									}
								})
						}









					},
					error: error => {
						console.error('There was an error!', error);
					}
				}
			);
			let daysCity: any = [];
			let daysCity0: any = [];
		setTimeout(() => {
			console.log('chegou até aqui');

			
			for (let index0 = 0; index0 < 15; index0++) {
				console.log('passa o dia');
				daysCity0 = [];
				for (let index = 0; index < (<any>itemsPrevisao).length; index++) {
					const element = (<any>itemsPrevisao)[index];
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
			this.tabForecast = [];
			for (let index = 0; index < daysCity.length; index++) {
				const element = daysCity[index];
				let data = "";
				cities = [];
				for (let i = 0; i < element.length; i++) {
					const result = element[i];
					data = result.data;
					//let icon = 
					let maxTemp = this.getMaxTemp(result.previsao.hours).toString();
					let minTemp = this.getMinTemp(result.previsao.hours).toString();
					let city = {
						id: "1",
						distance: this.getDistanceFromLatLonInKm(-23.5507572, -46.9388116, result.latitude, result.longitude).toString(),//"15",
						city: result.city_name, //(<any>itemsPrevisao).address, //"Atibaia",
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
						tempMax:maxTemp,
						tempMin:minTemp,
						url_image: 'https://images.pexels.com/photos/16317494/pexels-photo-16317494.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
						rain: "15",
						icon: "wb_sunny",
						umity: "8"
					}
					cities.push(city);
				}
				console.log('cities ficou', cities)
				
	
				let elementItem = {
					title: data,
					title_day_week: 'pendente',
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
					forecastCities:cities
				}
				
				this.tabForecast.push(elementItem);
				console.log('tabForecast ficou', this.tabForecast)
	
			}


		}, 3000);



		
		// this.tabForecast = [
		// 	{
		// 		title: "14/04/2023",
		// 		title_day_week: 'sexta',
		// 		forecastDay: {
		// 			date: "14/04/2023",
		// 			climate: "ensolarado",
		// 			tempMin: "17",
		// 			tempMax: "28",
		// 			rain: "5",
		// 			umity: "5",
		// 			morning: {
		// 				temperature: "18",
		// 				climate: "ensolarado"
		// 			},
		// 			afternoon: {
		// 				temperature: "25",
		// 				climate: "nublado"
		// 			},
		// 			night: {
		// 				temperature: "20",
		// 				climate: "ceu limpo"
		// 			}
		// 		},
		// 		forecastCities: cities // [
					
		// 			// {
		// 			// 	id: "1",
		// 			// 	distance: "15",
		// 			// 	city: "Atibaia",
		// 			// 	morning: {
		// 			// 		temperature: "18",
		// 			// 		climate: "ensolarado"
		// 			// 	},
		// 			// 	afternoon: {
		// 			// 		temperature: "25",
		// 			// 		climate: "nublado"
		// 			// 	},
		// 			// 	night: {
		// 			// 		temperature: "20",
		// 			// 		climate: "ceu limpo"
		// 			// 	},
		// 			// 	url_image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		// 			// 	rain: "15",
		// 			// 	icon: "wb_sunny",
		// 			// 	umity: "8"
		// 			// },
		// 			// {
		// 			// 	id: "2",
		// 			// 	distance: "15",
		// 			// 	city: "São Sebastião",
		// 			// 	morning: {
		// 			// 		temperature: "18",
		// 			// 		climate: "ensolarado"
		// 			// 	},
		// 			// 	afternoon: {
		// 			// 		temperature: "25",
		// 			// 		climate: "nublado"
		// 			// 	},
		// 			// 	night: {
		// 			// 		temperature: "20",
		// 			// 		climate: "ceu limpo"
		// 			// 	},
		// 			// 	url_image: 'https://images.pexels.com/photos/6469984/pexels-photo-6469984.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		// 			// 	rain: "15",
		// 			// 	icon: "water_drop",
		// 			// 	umity: "8"
		// 			// },
		// 			// {
		// 			// 	id: "3",
		// 			// 	distance: "15",
		// 			// 	city: "Atibaia",
		// 			// 	morning: {
		// 			// 		temperature: "18",
		// 			// 		climate: "ensolarado"
		// 			// 	},
		// 			// 	afternoon: {
		// 			// 		temperature: "25",
		// 			// 		climate: "nublado"
		// 			// 	},
		// 			// 	night: {
		// 			// 		temperature: "20",
		// 			// 		climate: "ceu limpo"
		// 			// 	},
		// 			// 	url_image: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		// 			// 	rain: "15",
		// 			// 	icon: "wb_cloudy",
		// 			// 	umity: "8"
		// 			// },
		// 			// {
		// 			// 	id: "4",
		// 			// 	distance: "15",

		// 			// 	city: "Atibaia",
		// 			// 	icon: "brightness_low",
		// 			// 	morning: {
		// 			// 		temperature: "18",
		// 			// 		climate: "ensolarado"
		// 			// 	},
		// 			// 	afternoon: {
		// 			// 		temperature: "25",
		// 			// 		climate: "nublado"
		// 			// 	},
		// 			// 	night: {
		// 			// 		temperature: "20",
		// 			// 		climate: "ceu limpo"
		// 			// 	},
		// 			// 	url_image: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		// 			// 	rain: "15",
		// 			// 	umity: "8"
		// 			// },
		// 			// {
		// 			// 	id: "1",
		// 			// 	distance: "15",
		// 			// 	city: "Atibaia",
		// 			// 	morning: {
		// 			// 		temperature: "18",
		// 			// 		climate: "ensolarado"
		// 			// 	},
		// 			// 	afternoon: {
		// 			// 		temperature: "25",
		// 			// 		climate: "nublado"
		// 			// 	},
		// 			// 	night: {
		// 			// 		temperature: "20",
		// 			// 		climate: "ceu limpo"
		// 			// 	},
		// 			// 	url_image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		// 			// 	rain: "15",
		// 			// 	icon: "wb_sunny",
		// 			// 	umity: "8"
		// 			// },
		// 			// {
		// 			// 	id: "2",
		// 			// 	distance: "15",
		// 			// 	city: "São Sebastião",
		// 			// 	morning: {
		// 			// 		temperature: "18",
		// 			// 		climate: "ensolarado"
		// 			// 	},
		// 			// 	afternoon: {
		// 			// 		temperature: "25",
		// 			// 		climate: "nublado"
		// 			// 	},
		// 			// 	night: {
		// 			// 		temperature: "20",
		// 			// 		climate: "ceu limpo"
		// 			// 	},
		// 			// 	url_image: 'https://images.pexels.com/photos/6469984/pexels-photo-6469984.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		// 			// 	rain: "15",
		// 			// 	icon: "water_drop",
		// 			// 	umity: "8"
		// 			// },
		// 			// {
		// 			// 	id: "3",
		// 			// 	distance: "15",
		// 			// 	city: "Atibaia",
		// 			// 	morning: {
		// 			// 		temperature: "18",
		// 			// 		climate: "ensolarado"
		// 			// 	},
		// 			// 	afternoon: {
		// 			// 		temperature: "25",
		// 			// 		climate: "nublado"
		// 			// 	},
		// 			// 	night: {
		// 			// 		temperature: "20",
		// 			// 		climate: "ceu limpo"
		// 			// 	},
		// 			// 	url_image: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280',
		// 			// 	rain: "15",
		// 			// 	icon: "wb_cloudy",
		// 			// 	umity: "8"
		// 			// }
		// 		//]
		// 	},
		// 	{
		// 		title: "15/04/2023",
		// 		title_day_week: 'sabado',
		// 		forecastDay: {
		// 			date: "14/04/2023",
		// 			climate: "ensolarado",
		// 			tempMin: "17",
		// 			tempMax: "28",
		// 			rain: "5",
		// 			umity: "5",
		// 			morning: {
		// 				temperature: "18",
		// 				climate: "ensolarado"
		// 			},
		// 			afternoon: {
		// 				temperature: "25",
		// 				climate: "nublado"
		// 			},
		// 			night: {
		// 				temperature: "20",
		// 				climate: "ceu limpo"
		// 			}
		// 		},
		// 		forecastCities: [
		// 			{
		// 				id: "1",
		// 				distance: "15",
		// 				city: "Atibaia",
		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				icon: "wb_sunny",
		// 				umity: "8"
		// 			},
		// 			{
		// 				id: "2",
		// 				distance: "15",
		// 				city: "São Sebastião",
		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				icon: "water_drop",
		// 				umity: "8"
		// 			},
		// 			{
		// 				id: "3",
		// 				distance: "15",

		// 				city: "Atibaia",

		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				icon: "wb_cloudy",
		// 				umity: "8"
		// 			},

		// 			{
		// 				id: "4",
		// 				distance: "15",

		// 				city: "Atibaia",
		// 				icon: "brightness_low",
		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				umity: "8"
		// 			}
		// 		]
		// 	},
		// 	{
		// 		title: "16/04/2023",
		// 		title_day_week: 'domingo',
		// 		forecastDay: {
		// 			date: "14/04/2023",
		// 			climate: "ensolarado",
		// 			tempMin: "17",
		// 			tempMax: "28",
		// 			rain: "5",
		// 			umity: "5",
		// 			morning: {
		// 				temperature: "18",
		// 				climate: "ensolarado"
		// 			},
		// 			afternoon: {
		// 				temperature: "25",
		// 				climate: "nublado"
		// 			},
		// 			night: {
		// 				temperature: "20",
		// 				climate: "ceu limpo"
		// 			}
		// 		},
		// 		forecastCities: [
		// 			{
		// 				id: "1",
		// 				distance: "15",
		// 				city: "Atibaia",
		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				icon: "wb_sunny",
		// 				umity: "8"
		// 			},
		// 			{
		// 				id: "2",
		// 				distance: "15",
		// 				city: "São Sebastião",
		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				icon: "water_drop",
		// 				umity: "8"
		// 			},
		// 			{
		// 				id: "3",
		// 				distance: "15",

		// 				city: "Atibaia",

		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				icon: "wb_cloudy",
		// 				umity: "8"
		// 			},
		// 			{
		// 				id: "4",
		// 				distance: "15",

		// 				city: "Atibaia",
		// 				icon: "brightness_low",
		// 				morning: {
		// 					temperature: "18",
		// 					climate: "ensolarado"
		// 				},
		// 				afternoon: {
		// 					temperature: "25",
		// 					climate: "nublado"
		// 				},
		// 				night: {
		// 					temperature: "20",
		// 					climate: "ceu limpo"
		// 				},
		// 				url_image: '',
		// 				rain: "15",
		// 				umity: "8"
		// 			}
		// 		]
		// 	}
		// ]
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
			//this.callAPIForecast();
		}
		if (event.pageIndex == 1) {
			//Adicionar codigo aqui
		}

	}

	getDetailCity(event: any) {
		this.showProgressSpinnerUntilExecuted(new Observable(this.myObservable));
		console.log('get detalhes cidade', event)
	}

	getDistanceFromLatLonInKm(lat1: number,lon1: number,lat2: number,lon2: number) {
		var R = 6371; // Radius of the earth in km
		var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
		var dLon = this.deg2rad(lon2-lon1); 
		var a = 
		  Math.sin(dLat/2) * Math.sin(dLat/2) +
		  Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
		  Math.sin(dLon/2) * Math.sin(dLon/2)
		  ; 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
		return d.toFixed(1);
	  }
	  deg2rad(deg: number) {
		return deg * (Math.PI/180)
	  }

	getMaxTemp(tempHoras:[]){
		let max = 0;
		for (let index = 0; index < tempHoras.length; index++) {
			let elent:any = tempHoras[index];
			if(elent.temp>max){
				max=elent.temp
			}
		}
		return max;
	}
	getMinTemp(tempHoras:[]){
		let min = 1000;
		for (let index = 0; index < tempHoras.length; index++) {
			let elent:any = tempHoras[index];
			if(elent.temp<min){
				min=elent.temp
			}
		}
		return min;
	}
}
