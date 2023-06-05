import { HttpClient, HttpHeaders } from "@angular/common/http";

export class ServiceComponent {

    result: Object = [];

    
	static listarCidadesProximas() {
		throw new Error('Method not implemented.');
	}
    readonly apiURL : string;

    constructor(private http : HttpClient) {
        this.apiURL == 'https://revgeocode.search.hereapi.com/v1';
     }

     public listarCidadesProximas(lat: number | undefined, long: number | undefined) {
        
        return this.http.get('https://revgeocode.search.hereapi.com/v1/revgeocode?in=circle%3A'+lat+'%2C'+long+'%3Br%3D15000&limit=100&apiKey=xlHqo0XVNPT1tOb-1bTYAI-jJrvkpK-dHwJz9iMgXzo&types=city')
                //  .subscribe(
                //     {
                //         next: data => {
                //             this.result = data;
                //             return data;
                //         },
                //         error: error => {
                //             console.error('There was an error!', error);
                //             return this.result;
                //         }
                //     }
                //  );
                //  return this.result;
    }

    public buscaPontosTuristicosProximos(lat: number | undefined, long: number | undefined){
        return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+'%2C'+long+'&radius=3000&type=tourist_attraction&key=AIzaSyAne-rZLXFZVkgizh98YEjPfmr6JqE4_AM')
    }

    public buscaCidadeGoogle(cidade: string){
        
        return this.http.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?fields=formatted_address%2Cphotos%2Cname%2Crating%2Copening_hours%2Cgeometry&input='+cidade+'&inputtype=textquery&key=AIzaSyAne-rZLXFZVkgizh98YEjPfmr6JqE4_AM')
    }
    public buscaFotoCidadeGoogle(referencia: string){
        return this.http.get('https://maps.googleapis.com/maps/api/place/photo?maxwidth=280&photo_reference='+referencia+'&key=AIzaSyAne-rZLXFZVkgizh98YEjPfmr6JqE4_AM', {
            responseType: 'text'
          })
    }

    public setResult(resultado: any){
        this.result = resultado;
    }

    public previsaoTempoCity(city: string){
        return this.http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json')
        // .subscribe(resultado => console.log(resultado));
    }
    
}

