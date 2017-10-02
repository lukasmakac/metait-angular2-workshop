import { Session } from './session';
import { Observable } from 'rxjs';
import 'rxjs/operator/map';
import 'rxjs/operator/publishReplay';
import { Injectable } from '@angular/core';

const sessions = require('../../data/sessions.json');

@Injectable()
export class SessionDataService {

  constructor() {
  }

  getList(): Observable<Session[]> {
    return Observable.from([sessions]);
  }

  getById(id: number): Observable<Session> {
    return this.getList()
      .map(sessions => sessions.find(item => item.id === id));
  }

  search(text: string): Observable<Session[]> {
    console.log('SessionDataService - search: ', text);

    const lowerCaseText = text.toLowerCase();

    return this.getList()
      .map(sessions => sessions.filter(item => item.title.toLowerCase().indexOf(lowerCaseText) !== -1));
  }
}
