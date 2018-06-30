import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { I<%= classify(name) %>State } from './state';
import { Store } from '@ngrx/store';
import { State } from 'app/store';

let selectFeature = createFeatureSelector<I<%= classify(name) %>State>('<%=name%>');

export const getValue = createSelector(selectFeature, (state: I<%= classify(name) %>State) => state.dummy);

@Injectable()
export class <%= classify(name) %>Selectors {
  constructor(private _store: Store<State>) {
    /* EMPTY */
  }

  getValue() {
    return this._store.select(getValue);
  }
}