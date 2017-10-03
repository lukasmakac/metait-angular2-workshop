import { Component, OnInit } from '@angular/core';
import { Session } from '../session';
import { ActivatedRoute } from '@angular/router';
import { SessionDataService } from '../session-data.service';

const sessions = require('../../../data/sessions-preview.json');

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  session: Session;

  // TODO Injektněte potřebné služby
  constructor(private sessionDataService: SessionDataService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // TODO načtení dat podle id z routeru
    this.sessionDataService.getById( parseInt(this.activatedRoute.snapshot.params['id'])).subscribe(session => this.session = session)
  }

  favoriteClickHandler(session: Session) {
    console.log('SessionDetailComponent - favoriteClickHandler', session);
  }
}
