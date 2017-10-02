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

  constructor(private sessionDataService: SessionDataService) {
  }

  ngOnInit(): void {

    // this.searchNameInput.valueChanges
    //   .subscribe(term => console.log(term));

    this.sessions = this.searchNameInput.valueChanges
      .startWith('')
      .debounceTime(200)
      .distinctUntilChanged()
      .flatMap((value) => this.sessionDataService.search(value));
  }

}
