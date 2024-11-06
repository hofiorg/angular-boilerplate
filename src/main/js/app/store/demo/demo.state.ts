import {Demo} from '../../model/demo.model';
import {ProblemDetail} from '../../model/problemdetail.model';

export const DEMO_FEATURE_KEY = 'demo'

export interface DemoStoreState {
  demoList: Demo[],
  loading: boolean,
  error?: ProblemDetail
}

export const initialState: DemoStoreState = {
  demoList: [],
  loading: false,
  error: undefined
}
