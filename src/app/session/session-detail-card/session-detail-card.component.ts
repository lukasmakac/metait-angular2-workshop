import { Input, EventEmitter, Output, Component, OnInit } from '@angular/core';
import { Session } from '../session'


@Component({
  selector: 'app-session-detail-card',
  templateUrl: './session-detail-card.component.html',
  styleUrls: ['./session-detail-card.component.css']
})
export class SessionDetailCardComponent implements OnInit {
  @Input()
  session: Session

  @Output()
  onFavouriteClick = new EventEmitter();

  constructor() {

    /* this.session = {
      'id': 400,
      'title': 'REST API je mrtvé, ať žije GraphQL',
      'description': 'REST se stal standardem pro API. Poslední dobou se ale ukazuje, že není vhodné pro uživatelské rozhraní. Facebook nám nabídl GraphQL a skvělou knihovnu Relay, která usnadňuje a zrychluje práci s daty v aplikacích. ',
      'speakers': [
        {
          'id': 6,
          'name': 'Petr Ferschmann'
        }
      ],
      'language': 'Czbech',
      'complexity': 'Advanced',
      'tags': [
        'Backend',
        'Web',
        'GraphQL',
        'REST API'
      ]
    }; */

  }

  ngOnInit() {

  }

  getSpeakerNames () {
    let speakers = this.session.speakers || []

    return speakers.map(speaker => speaker.name)
  }

  onHeartClick () {
    this.onFavouriteClick.emit(this.session)
  }

}
