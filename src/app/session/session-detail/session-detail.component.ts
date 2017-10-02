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

  constructor(private sessionDataService: SessionDataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.params['id']);
    this.sessionDataService.getById(id).subscribe(session => { this.session = session; });
  }

  favoriteClickHandler(session: Session) {
    console.log('SessionDetailComponent - favoriteClickHandler', session);
  }
}
