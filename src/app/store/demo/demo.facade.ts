import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Demo, DemoFilter} from '../../model/demo.model';
import {Store} from '@ngrx/store';
import {DemoStoreState} from './demo.state';
import {selectDemoList, selectLoading} from './demo.selectors';
import {searchDemosAction} from './demo.actions';

@Injectable({providedIn: 'root'})
export class DemoFacade {
  demoList$: Observable<Demo[]>;
  loading$: Observable<boolean>;

  constructor(private readonly store: Store<DemoStoreState>) {
    this.demoList$ = this.store.select(selectDemoList);
    this.loading$ = this.store.select(selectLoading);
  }

  search(filter: DemoFilter) {
    this.store.dispatch(searchDemosAction({filter}));
  }
}
