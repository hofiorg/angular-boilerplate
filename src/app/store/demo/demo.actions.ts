import {createAction, props} from '@ngrx/store';
import {Demo, DemoFilter} from '../../model/demo.model';
import {ProblemDetail} from '../../model/problemdetail.model';

export enum DemoActionTypes {
  SEARCH_DEMOS = '[ACTION] Search Demos',
  SEARCH_DEMOS_SUCCESS = '[ACTION] Search Demos success',
  SEARCH_DEMOS_FAIL = '[ACTION] Search Demos fail',
}

export const searchDemosAction = createAction(DemoActionTypes.SEARCH_DEMOS, props<{ filter: DemoFilter }>());
export const searchDemosActionSuccess = createAction(DemoActionTypes.SEARCH_DEMOS_SUCCESS, props<{ demoList: Demo[] }>());
export const searchDemosActionFail = createAction(DemoActionTypes.SEARCH_DEMOS_FAIL, props<{ error: ProblemDetail }>());
