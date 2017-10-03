import { Component, OnInit } from '@angular/core';
import { Session } from '../../session/session';
import { SessionDataService } from '../session-data.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

const sessions = require('../../../data/sessions-preview.json');

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnInit {

  sessions: Observable<Session[]>;
  searchNameInput = new FormControl();

  // TODO přidejte vlastnost searchNameInput
  constructor(private sessionDataService: SessionDataService) {
  }

  ngOnInit(): void {

    // TODO použijte operátory observables
    this.sessions = this.searchNameInput.valueChanges
    .startWith('')
    .debounceTime(200)
    .distinctUntilChanged()
    .flatMap(text => this.sessionDataService.search(text))
  }

}
