import { Component, OnInit } from '@angular/core';

import { Previsao } from '../../models/Previsao';
import { PrevisaoService } from '../../shared/previsao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  previsoes: Previsao[] = [];

  constructor(private previsoesService: PrevisaoService) { }

  ngOnInit(): void {
    this.getPrevisoes();

    console.log('previsoes mockadas:', this.getPrevisoes());

  }

  getPrevisoes(): void {
    this.previsoesService.getPrevisoes()
    .subscribe(previsoes => {
      this.previsoes = previsoes;
    } );
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/