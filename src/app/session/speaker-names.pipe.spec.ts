/* tslint:disable:no-unused-variable */

import { SpeakerNamesPipe } from './speaker-names.pipe';
import { Session } from './Session';

describe('Pipe: SpeakerNames', () => {

  let pipe;
  beforeEach(() => {
    pipe = new SpeakerNamesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "" for null session', function(){
    expect(pipe.transform(null)).toBe('');
  });

  it('should return "" for null session.speakers', function(){
    const session: Session = {
      id: 1,
      title: 'title',
      description: 'description',
      tags: []
    };

    expect(pipe.transform(session)).toBe('');
  });

  it('should concatenate speaker names with comma', () => {
    const session: Session = {
      id: 1,
      title: 'title',
      description: 'description',
      tags: [],

      speakers : [

        {name: 'First', company: 'FirstCompany'},
        {name: 'Second', company: 'SecondCompany'},
        {name: 'Third', company: 'ThirdCompany'}
      ]
    };

    expect(pipe.transform(session)).toBe('First, Second, Third');
  });

});
