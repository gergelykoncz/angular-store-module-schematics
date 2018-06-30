import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';

import { initial<%= classify(name)%>State, I<%= classify(name) %>State } from './state';
import * as Actions from './actions';

const reducer: ActionReducer<I<%= classify(name) %>State> = (
  state = initial<%= classify(name)%>State,
  action: Actions.AllActions<any>
) => {
  let result = _.cloneDeep(state);

  switch (action.type) {
    case Actions.TEST_ACTION:
      return result;
    default:
      return state;
  }
};

export { reducer as Reducer };
