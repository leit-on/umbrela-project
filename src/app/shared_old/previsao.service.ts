import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Previsao } from '../models/previsao';
import { PREVISOES } from './mock-previsoes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class PrevisaoService {

  constructor(private messageService: MessageService) { }

  getPrevisoes(): Observable<Previsao[]> {
    const previsoes = of(PREVISOES);
    console.log('previsoes mockadas:', previsoes);
    this.messageService.add('PrevisaoService: fetched previsoes');
    return previsoes;
  }

  getHero(id: number): Observable<Previsao> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = PREVISOES.find(h => h.id === id)!;
    this.messageService.add(`PrevisaoService: fetched previsao id=${id}`);
    return of(hero);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/