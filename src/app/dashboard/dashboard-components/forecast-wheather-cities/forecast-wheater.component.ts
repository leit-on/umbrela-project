import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatMenuTrigger } from '@angular/material/menu';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-forecast-wheater-cities',
  templateUrl: './forecast-wheater.component.html',
})
export class ForecastWhetherCitiesComponent implements OnInit {
  @Output() changeFilter = new EventEmitter();
  @Output() changePage = new EventEmitter();
  @Output() getDetailCity = new EventEmitter();
  
  @ViewChild('menuFilters') menuFilters: any;

  ordenate_filters = ['mais relevantes', 'mais próximos', 'mais sol', 'mais quentes'];
  climates = ['ensolarado', 'sol-entre-nuvens', 'nublado', 'chuvoso'];

  filters: ({ name: string; type: string })[] = [];
  filters_size = 0;
  ordenate_filter_initial = '';
  climate_filter_initial = '';

  separatorKeysCodes = [ENTER, COMMA];
  addOnBlur = true;
  selectable = true;
  removable = true;

  constructor() { }
  @Input() forecastCities!: { id: string; distance: string; city: string; climate: string; rain: string; umity: string; icon: string; }[] | undefined;
  @Input() lengthPaginate: any;
  @Input() pageIndexPaginate: any;

  

  length = 8;
  pageSize = 4;
  pageIndex = 0;
  pageSizeOptions = [4];

  hidePageSize = false;
  showPageSizeOptions = false;
  showFirstLastButtons = false;
  disabled = false;

  pageEvent: PageEvent;

  ngOnInit(): void {
    // if (this.forecastCities?.length != undefined)
    //   this.length = this.forecastCities?.length
    this.filters.push({ name: "mais relevantes", type: "ordenate" });
    this.filters_size = this.filters_size + 1;
    this.changeFilter.emit(this.filters);
    this.filters.push({ name: "ensolarado", type: "climate" });
    this.filters_size = this.filters_size + 1;
    this.changeFilter.emit(this.filters);
  }

  setFilterOrdenate(menuTrigger: MatMenuTrigger, filter: string, type: string) {
    console.log('filter:', filter);
    this.addFilter(filter, type);
    menuTrigger.closeMenu();
  }

  setFilterClimates(menuTrigger: MatMenuTrigger, filter: string, type: string) {
    console.log('filter:', filter);
    this.addFilter(filter, type);
    menuTrigger.closeMenu();
  }

  removeFilter(fruit: any): void {
    console.log('tipo do filtro', fruit);

    if(fruit.type == 'ordenate')
      this.ordenate_filter_initial = '';

    if(fruit.type == 'climate')
      this.climate_filter_initial = '';

    const index = this.filters.indexOf(fruit);

    if (index >= 0) {
      this.filters.splice(index, 1);
    }
    this.filters_size = this.filters_size - 1;
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.changePage.emit(e);
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  addFilter(filter_name: string, filter_type: string): void {

    if (this.filters.filter(x => x.name == filter_name).length == 0) {

      if ((this.filters.filter(x => x.type == filter_type).length == 0)) {
        if ((filter_name || '').trim()) {
          this.filters.push({ name: filter_name.trim(), type: filter_type.trim() });
          this.filters_size = this.filters_size + 1;
          this.changeFilter.emit(this.filters);
        }

        // Reset the input value
        if (filter_name) {
          filter_name = '';
        }
      }
      else {
        console.log('ja existe')
        if ((filter_name || '').trim()) {
          this.filters.splice(this.filters.findIndex(e => e.type == filter_type), 1);
          this.filters.push({ name: filter_name.trim(), type: filter_type.trim() });
          this.changeFilter.emit(this.filters);
        }

        // Reset the input value
        if (filter_name) {
          filter_name = '';
        }
      }



    }
  }

  navigateDetailCity(city:any){
    this.getDetailCity.emit(city);
  }
}
