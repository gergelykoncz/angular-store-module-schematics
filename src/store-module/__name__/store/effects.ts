import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { State } from 'app/store';
import * as LocalActions from './actions';
import { DebugLog, log } from '../../log';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class <%= classify(name)%>Effects {
  @Effect()
  handleTest$: Observable<Action> = this._actions$.ofType(LocalActions.TEST_ACTION).mergeMap(payload => {
    log.d(`Effect: Test effect`);
    return Observable.of({type: 'None'});
  });

  constructor(private _actions$: Actions, private _store: Store<State>) {
    log.d('Initializing <%=name%> effects...');
  }
}
