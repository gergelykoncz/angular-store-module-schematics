import { Action } from '@ngrx/store';

export const TEST_ACTION = '[<%= name %>] Test Action';

export class TestAction implements Action {
  readonly type = TEST_ACTION;
  constructor() {
    /* EMPTY */
  }
}

export type AllActions<T> = TestAction;
