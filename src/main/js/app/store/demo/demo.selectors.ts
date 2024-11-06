import {createFeatureSelector, createSelector} from '@ngrx/store';
import {DEMO_FEATURE_KEY, DemoStoreState} from './demo.state';

const selectStoreState= createFeatureSelector<DemoStoreState>(DEMO_FEATURE_KEY);

export const selectDemoList = createSelector(selectStoreState, (state) => state.demoList);
export const selectLoading = createSelector(selectStoreState, (state) => state.loading);
