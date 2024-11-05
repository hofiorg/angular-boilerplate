import {searchDemosAction, searchDemosActionFail, searchDemosActionSuccess} from './demo.actions';
import {createReducer, on} from '@ngrx/store';
import {initialState} from './demo.state';

export const demoReducer = createReducer(
  initialState,
  on(searchDemosAction, (state) => ({
    ...state,
    demoList: [],
    error: undefined,
    loading: true
  })),
  on(searchDemosActionSuccess, (state, payload) => ({
    ...state,
    demoList: payload.demoList,
    error: undefined,
    loading: false
  })),
  on(searchDemosActionFail, (state, payload) => ({
    ...state,
    demoList: [],
    error: payload.error,
    loading: false
  })),
);
