import { searchDemosAction, searchDemosActionSuccess, searchDemosActionFail, DemoActionTypes } from './demo.actions';
import {demoFilterMock, demoListMock} from '../../model/demo.mock';
import {problemdetailMock} from '../../model/problemdetail.mock';

describe('Demo Actions', () => {
  it('should create the SEARCH_DEMOS action with the correct payload', () => {
    const filter = demoFilterMock;
    const action = searchDemosAction({ filter });

    expect(action.type).toBe(DemoActionTypes.SEARCH_DEMOS);
    expect(action.filter).toEqual(filter);
  });

  it('should create the SEARCH_DEMOS_SUCCESS action with the correct payload', () => {
    const demoList = demoListMock;
    const action = searchDemosActionSuccess({ demoList });

    expect(action.type).toBe(DemoActionTypes.SEARCH_DEMOS_SUCCESS);
    expect(action.demoList).toEqual(demoList);
  });

  it('should create the SEARCH_DEMOS_FAIL action with the correct payload', () => {
    const error = problemdetailMock;
    const action = searchDemosActionFail({ error });

    expect(action.type).toBe(DemoActionTypes.SEARCH_DEMOS_FAIL);
    expect(action.error).toEqual(error);
  });
});
